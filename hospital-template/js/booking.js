// ========== booking.js - إرسال احترافي عبر واتساب ==========
let selectedPayment = null;

// ========== فتح نافذة الدفع ==========
function openPaymentModal() {
    // تنظيف الأخطاء السابقة
    document.querySelectorAll('.error-msg').forEach(e => e.remove());
    document.querySelectorAll('#bookingForm input, #bookingForm select').forEach(el => {
        el.style.borderColor = '#dde4ec';
    });
    const formFeedback = document.getElementById('formFeedback');
    if (formFeedback) {
        formFeedback.textContent = '';
        formFeedback.style.color = '';
    }

    // جلب القيم
    const name = document.getElementById('name')?.value?.trim() || '';
    const phone = document.getElementById('phone')?.value?.trim() || '';
    const email = document.getElementById('email')?.value?.trim() || '';
    const department = document.getElementById('department')?.value || '';
    const date = document.getElementById('date')?.value || '';

    let errors = [];

    if (!name) errors.push({ field: 'name', msg: 'الاسم مطلوب' });
    if (!phone || !/^\d{8,}$/.test(phone)) errors.push({ field: 'phone', msg: 'رقم الجوال غير صحيح (8 أرقام على الأقل)' });
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push({ field: 'email', msg: 'البريد الإلكتروني غير صحيح' });
    if (!department) errors.push({ field: 'department', msg: 'الرجاء اختيار القسم' });
    if (!date) {
        errors.push({ field: 'date', msg: 'الرجاء اختيار التاريخ' });
    } else {
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0,0,0,0);
        if (selectedDate < today) errors.push({ field: 'date', msg: 'التاريخ لا يمكن أن يكون في الماضي' });
    }

    // عرض الأخطاء
    if (errors.length > 0) {
        errors.forEach(err => {
            const input = document.getElementById(err.field);
            if (input) {
                input.style.borderColor = 'red';
                const group = input.closest('.form-group');
                if (group) {
                    const errorEl = document.createElement('small');
                    errorEl.className = 'error-msg';
                    errorEl.style.color = 'red';
                    errorEl.textContent = err.msg;
                    group.appendChild(errorEl);
                }
            }
        });
        if (formFeedback) {
            formFeedback.textContent = '⚠️ الرجاء تصحيح الأخطاء أعلاه';
            formFeedback.style.color = 'red';
        }
        return;
    }

    // فتح مودال الدفع
    const paymentModal = document.getElementById('paymentModal');
    if (paymentModal) paymentModal.classList.add('active');
    
    document.getElementById('bankSection').style.display = 'none';
    document.getElementById('modalActions').style.display = 'none';
    document.getElementById('paymentOptionsModal').style.display = 'flex';
    
    selectedPayment = null;
    document.getElementById('btnCod').classList.remove('selected');
    document.getElementById('btnBank').classList.remove('selected');
    document.getElementById('receiptFile').value = '';
    document.getElementById('previewImage').style.display = 'none';
    document.getElementById('modalFeedback').textContent = '';
}

// ========== اختيار طريقة الدفع ==========
function selectPayment(method) {
    selectedPayment = method;
    document.getElementById('btnCod').classList.remove('selected');
    document.getElementById('btnBank').classList.remove('selected');
    
    if (method === 'cod') {
        document.getElementById('btnCod').classList.add('selected');
        document.getElementById('bankSection').style.display = 'none';
    } else {
        document.getElementById('btnBank').classList.add('selected');
        document.getElementById('bankSection').style.display = 'block';
    }
    document.getElementById('modalActions').style.display = 'block';
}

// ========== إغلاق مودال الدفع ==========
function closePaymentModal() {
    document.getElementById('paymentModal').classList.remove('active');
}

// ========== رفع الصورة إلى خدمة مجانية ==========
async function uploadImageToHost(file) {
    const formData = new FormData();
    formData.append('image', file);
    
    try {
        // استخدام imgbb (خدمة مجانية لرفع الصور)
        const response = await fetch('https://api.imgbb.com/1/upload?key=9dc838c75907d91865c9164d1a78c91a', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        if (data.success) {
            return data.data.url;
        }
        return null;
    } catch (error) {
        console.error('فشل رفع الصورة:', error);
        return null;
    }
}

// ========== الإرسال النهائي عبر واتساب ==========
function submitBooking() {
    const modalFeedback = document.getElementById('modalFeedback');
    
    if (!selectedPayment) {
        if (modalFeedback) modalFeedback.textContent = 'الرجاء اختيار طريقة الدفع';
        return;
    }
    
    const receiptFile = document.getElementById('receiptFile');
    if (selectedPayment === 'bank' && (!receiptFile || !receiptFile.files || !receiptFile.files.length)) {
        if (modalFeedback) modalFeedback.textContent = 'الرجاء رفع صورة إيصال التحويل';
        return;
    }

    if (modalFeedback) modalFeedback.textContent = 'جاري فتح واتساب...';

    const name = document.getElementById('name')?.value || '';
    const phone = document.getElementById('phone')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const department = document.getElementById('department')?.value || '';
    const date = document.getElementById('date')?.value || '';
    const time = document.getElementById('time')?.value || 'غير محدد';
    const notes = document.getElementById('notes')?.value || 'لا يوجد';
    const paymentMethod = selectedPayment === 'bank' ? 'تحويل بنكي' : 'دفع عند الاستلام';
    const deptSelect = document.getElementById('department');
    const deptText = deptSelect?.options[deptSelect.selectedIndex]?.text || department;

    // بناء رسالة واتساب - استخدام نجوم ورموز بسيطة
    let message = `*حجز موعد جديد - مستشفى الحياة الحكومي*\n\n`;
    message += `السلام عليكم ورحمة الله وبركاته\n`;
    message += `تم استلام طلب حجز موعد جديد:\n\n`;
    message += `--------------------------------\n\n`;
    message += `*اسم المريض:* ${name}\n`;
    message += `*رقم الجوال:* ${phone}\n`;
    message += `*البريد الالكتروني:* ${email}\n\n`;
    message += `--------------------------------\n\n`;
    message += `*القسم:* ${deptText}\n`;
    message += `*التاريخ:* ${date}\n`;
    message += `*الوقت:* ${time}\n\n`;
    message += `--------------------------------\n\n`;
    message += `*طريقة الدفع:* ${paymentMethod}\n`;
    
    if (selectedPayment === 'bank') {
        message += `\n*معلومات التحويل البنكي:*\n`;
        message += `- البنك: بنك الكويت الوطني\n`;
        message += `- رقم الحساب: 1234567890\n`;
        message += `- IBAN: KW12345678901234567890\n`;
    }
    
    message += `\n--------------------------------\n\n`;
    message += `*ملاحظات:* ${notes}\n\n`;
    message += `--------------------------------\n\n`;
    message += `*للتواصل مع المريض:* ${phone}\n`;
    message += `*بريد المريض:* ${email}\n\n`;
    message += `مع تحيات\n`;
    message += `مستشفى الحياة الحكومي - الكويت`;

    // استخدام encodeURIComponent للتشفير الصحيح
    const encodedMessage = encodeURIComponent(message);
    
    // رقم صاحب المشروع
    const ownerNumber = '966507652943';
    
    // رابط واتساب
    const whatsappURL = `https://wa.me/${ownerNumber}?text=${encodedMessage}`;

    // فتح واتساب
    window.open(whatsappURL, '_blank');

    if (modalFeedback) modalFeedback.textContent = 'تم فتح واتساب - اضغط ارسال لتأكيد الحجز';
    
    setTimeout(() => {
        closePaymentModal();
        document.getElementById('bookingForm')?.reset();
        if (modalFeedback) modalFeedback.textContent = '';
        document.getElementById('bankSection').style.display = 'none';
        document.getElementById('modalActions').style.display = 'none';
        document.getElementById('paymentOptionsModal').style.display = 'flex';
    }, 3000);
}


// ========== رفع الصورة (معاينة) ==========
document.addEventListener('DOMContentLoaded', function() {
    const uploadArea = document.getElementById('uploadArea');
    const receiptFile = document.getElementById('receiptFile');
    const previewImage = document.getElementById('previewImage');
    
    if (uploadArea && receiptFile) {
        uploadArea.addEventListener('click', function() {
            receiptFile.click();
        });
        
        receiptFile.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    if (previewImage) {
                        previewImage.src = e.target.result;
                        previewImage.style.display = 'block';
                    }
                };
                reader.readAsDataURL(this.files[0]);
            }
        });
    }

    // إغلاق المودال عند النقر خارجه
    const paymentModal = document.getElementById('paymentModal');
    if (paymentModal) {
        paymentModal.addEventListener('click', function(e) {
            if (e.target === paymentModal) {
                paymentModal.classList.remove('active');
            }
        });
    }
});