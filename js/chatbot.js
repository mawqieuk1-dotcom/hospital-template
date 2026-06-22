const GEMINI_API_KEY = 'AIzaSyBNS1jKJeFRvJMfXt59SDnlcJcOwMmUUJ8';

const medicalDatabase = [
    {
        deptAR: 'طب وجراحة العيون',
        deptEN: 'Ophthalmology',
        icon: 'fa-eye',
        keywords: [
            'عين', 'عيون', 'بصر', 'نظر', 'نظارة', 'عدسة', 'ليزك', 'ليزر',
            'رمد', 'مياه بيضاء', 'مياه زرقاء', 'جلوكوما', 'شبكية', 'قرنية',
            'سد', 'كتاراكت', 'حول', 'انحراف', 'جفن', 'جفون', 'رموش',
            'غبش', 'مغبشة', 'غباش', 'ضباب', 'ازدواج', 'تشوش', 'زغللة',
            'حكة عين', 'حرقان عين', 'دمعة', 'دموع', 'احمرار عين', 'انتفاخ عين',
            'ألم عين', 'وجع عين', 'صداع عين', 'إجهاد عين', 'تعب عين',
            'عين حمراء', 'عيون حمراء', 'انتفاخ تحت العين', 'هالات',
            'eye', 'eyes', 'vision', 'sight', 'blurry', 'blurred', 'cataract',
            'glaucoma', 'retina', 'cornea', 'lasik', 'glasses', 'lens',
            'itchy eye', 'red eye', 'watery eye', 'painful eye', 'teary',
            'ophthalmology', 'optometry', 'optic', 'ocular', 'orbital',
            'swollen eye', 'puffy eyes', 'dark circles', 'floaters', 'flashes'
        ]
    },
    {
        deptAR: 'أمراض القلب',
        deptEN: 'Cardiology',
        icon: 'fa-heart-pulse',
        keywords: [
            'قلب', 'قلبي', 'صدر', 'صدري', 'شرايين', 'شريان', 'وريد', 'أوردة',
            'ضغط', 'ضغط دم', 'كولسترول', 'دهون', 'نوبة', 'ذبحة', 'جلطة',
            'خفقان', 'نبض', 'دقات', 'تسارع', 'بطء قلب', 'عدم انتظام',
            'ألم صدر', 'وجع صدر', 'ضيق صدر', 'ثقل صدر', 'حرقان صدر',
            'تنفس', 'ضيق تنفس', 'نهجان', 'كتمة', 'لهث', 'تعب',
            'heart', 'chest', 'cardiac', 'cardio', 'artery', 'vein',
            'blood pressure', 'cholesterol', 'attack', 'stroke', 'palpitation',
            'pulse', 'beat', 'angina', 'coronary', 'cardiovascular',
            'shortness of breath', 'tight chest', 'racing heart'
        ]
    },
    {
        deptAR: 'جراحة المخ والأعصاب',
        deptEN: 'Neurosurgery',
        icon: 'fa-brain',
        keywords: [
            'رأس', 'راس', 'دماغ', 'مخ', 'أعصاب', 'عصب', 'نخاع', 'عمود فقري',
            'صداع', 'صداع نصفي', 'شقيقة', 'دوخة', 'دوخه', 'دوار', 'دوران',
            'تشنج', 'تشنجات', 'صرع', 'نوبة', 'اختلاج', 'تنميل', 'خدر', 'خدران',
            'فقدان وعي', 'اغماء', 'غيبوبة', 'نسيان', 'ذاكرة', 'تركيز', 'تشويش',
            'رعشة', 'رعاش', 'باركنسون', 'زهايمر', 'تصلب', 'شلل', 'ضعف',
            'ألم رقبة', 'وجع رقبة', 'ألم ظهر', 'انزلاق', 'ديسك', 'غضروف',
            'head', 'brain', 'nerve', 'neuro', 'migraine', 'headache',
            'dizzy', 'vertigo', 'seizure', 'epilepsy', 'numb', 'tingling',
            'memory', 'concentration', 'tremor', 'parkinson', 'alzheimer',
            'spine', 'spinal', 'disc', 'neck', 'paralysis', 'stroke'
        ]
    },
    {
        deptAR: 'جراحة العظام',
        deptEN: 'Orthopedics',
        icon: 'fa-bone',
        keywords: [
            'عظم', 'عظام', 'مفصل', 'مفاصل', 'غضروف', 'أربطة', 'وتر', 'اوتار',
            'كسر', 'كسور', 'شرخ', 'خلع', 'التواء', 'تمزق', 'رض', 'كدمة',
            'ركبة', 'ركب', 'كتف', 'كتوف', 'كوع', 'مرفق', 'رسغ', 'معصم',
            'كاحل', 'قدم', 'اقدام', 'يد', 'يدين', 'اصبع', 'اصابع', 'ابهام',
            'ظهر', 'ضهر', 'فقرات', 'حوض', 'ورك', 'فخذ', 'ساق', 'عضلات',
            'ألم عظام', 'وجع مفاصل', 'تيبس', 'تصلب', 'صعوبة حركة', 'عرج',
            'روماتيزم', 'روماتويد', 'نقرس', 'هشاشة', 'خشونة', 'احتكاك',
            'bone', 'joint', 'fracture', 'break', 'sprain', 'strain',
            'knee', 'shoulder', 'elbow', 'wrist', 'ankle', 'hip', 'back',
            'orthopedic', 'ortho', 'arthritis', 'rheumatism', 'gout',
            'osteoporosis', 'cartilage', 'ligament', 'tendon', 'muscle'
        ]
    },
    {
        deptAR: 'طب الأطفال',
        deptEN: 'Pediatrics',
        icon: 'fa-child',
        keywords: [
            'طفل', 'اطفال', 'رضيع', 'رضع', 'وليد', 'مولود', 'حديث ولادة',
            'صغير', 'صغار', 'بنت', 'ولد', 'ابن', 'ابني', 'بنتي', 'ولدي',
            'حرارة', 'سخونة', 'حمى', 'سعال', 'كحة', 'زكام', 'رشح', 'انفلونزا',
            'تطعيم', 'لقاح', 'تسنين', 'مغص', 'اسهال', 'امساك', 'ترجيع', 'تقيؤ',
            'نمو', 'وزن', 'طول', 'تغذية', 'رضاعة', 'فطام', 'صفراء', 'يرقان',
            'child', 'baby', 'infant', 'kid', 'pediatric', 'fever',
            'cough', 'cold', 'flu', 'vaccine', 'growth', 'feeding',
            'neonatal', 'newborn', 'toddler', 'jaundice', 'measles'
        ]
    },
    {
        deptAR: 'الطوارئ والإسعاف',
        deptEN: 'Emergency',
        icon: 'fa-truck-medical',
        keywords: [
            'طوارئ', 'طارئ', 'اسعاف', 'انقاذ', 'حادث', 'اصابة', 'جرح', 'جروح',
            'نزيف', 'نزف', 'دم', 'ينزف', 'حروق', 'حرق', 'حريق', 'صعق', 'كهرباء',
            'تسمم', 'سم', 'غرق', 'اختناق', 'شرقة', 'غصة', 'تنفس صناعي',
            'كسور خطيرة', 'غيبوبة', 'فقدان وعي', 'سقوط', 'ارتطام', 'صدمة',
            'emergency', 'urgent', 'accident', 'bleeding', 'burn', 'poison',
            'fracture', 'unconscious', 'shock', 'trauma', 'rescue', 'ambulance'
        ]
    },
    {
        deptAR: 'طب الأسنان',
        deptEN: 'Dentistry',
        icon: 'fa-tooth',
        keywords: [
            'سن', 'اسنان', 'ضرس', 'اضراس', 'لثة', 'فم', 'فكين', 'تقويم',
            'تسوس', 'سوسة', 'خراج', 'التهاب لثة', 'نزيف لثة', 'حشوة', 'عصب سن',
            'خلع', 'زراعة', 'تبييض', 'تنظيف', 'جير', 'رائحة فم', 'طقم',
            'ألم سن', 'وجع ضرس', 'حساسية', 'تكسر سن', 'تورم وجه', 'مضغ',
            'tooth', 'teeth', 'dental', 'dentist', 'cavity', 'gum',
            'extraction', 'implant', 'braces', 'whitening', 'root canal'
        ]
    },
    {
        deptAR: 'الأمراض الجلدية',
        deptEN: 'Dermatology',
        icon: 'fa-hand-dots',
        keywords: [
            'جلد', 'بشرة', 'وجه', 'طفح', 'حكة', 'هرش', 'حساسية', 'تحسس',
            'اكزيما', 'صدفية', 'بهاق', 'حبوب', 'بثور', 'حب شباب', 'شباب',
            'شامة', 'وحمة', 'ثؤلول', 'فطريات', 'تساقط شعر', 'صلع', 'قشرة',
            'جفاف', 'تشقق', 'احمرار', 'التهاب جلد', 'حروق شمس', 'تصبغات',
            'skin', 'rash', 'itch', 'allergy', 'eczema', 'psoriasis',
            'acne', 'pimple', 'mole', 'wart', 'fungus', 'hair loss',
            'dermatology', 'sunburn', 'pigmentation'
        ]
    },
    {
        deptAR: 'المسالك البولية',
        deptEN: 'Urology',
        icon: 'fa-droplet',
        keywords: [
            'بول', 'تبول', 'كلى', 'كلية', 'مثانة', 'حالب', 'مجرى بول',
            'حرقان بول', 'ألم تبول', 'تكرار تبول', 'سلس', 'تقطير', 'دم بول',
            'حصوة', 'حصى', 'رمل', 'التهاب', 'عدوى', 'مغص كلوي', 'فشل كلوي',
            'بروستات', 'بروستاتا', 'خصية', 'قضيب', 'عقم', 'ضعف جنسي',
            'urine', 'kidney', 'bladder', 'urinary', 'stone', 'infection',
            'prostate', 'dialysis', 'renal', 'urology', 'incontinence'
        ]
    }
];

const quickReplies = {
    ar: {
        'مرحبا': 'أهلاً بك! أنا المساعد الطبي لمستشفى الحياة. صف لي أعراضك أو شكواك، وسأحللها وأقترح القسم المناسب لك.',
        'شكرا': 'العفو! في خدمتك دائماً. هل لديك أي استفسار آخر؟',
        'hello': 'أهلاً! يمكنك الكتابة بالعربية أو الإنجليزية. صف لي أعراضك من فضلك.',
        'hi': 'مرحباً! تفضل بوصف أعراضك وسأساعدك فوراً.',
        'thanks': 'على الرحب والسعة! هل تحتاج مساعدة إضافية؟'
    },
    en: {
        'hello': 'Hello! I am your medical assistant at Al-Hayat Hospital. Describe your symptoms and I will guide you to the right department.',
        'hi': 'Hi there! Please describe your symptoms so I can help you.',
        'thanks': 'You\'re welcome! How else can I help you?',
        'thank you': 'You\'re welcome! Is there anything else?',
        'مرحبا': 'Hello! Feel free to write in Arabic or English. Please describe your symptoms.',
        'شكرا': 'You\'re welcome! Do you need any other help?'
    }
};

let conversationHistory = [];

function createChatbotHTML() {
    const isArabic = document.documentElement.lang === 'ar';
    const welcomeMsg = isArabic
        ? 'مرحباً! أنا المساعد الطبي الذكي لمستشفى الحياة.\n\nصف لي أعراضك أو شكواك بالتفصيل، وسأقوم بتحليلها واقتراح القسم المناسب لك.\n\nيمكنك الكتابة بالعربية أو الإنجليزية.'
        : 'Hello! I am the smart medical assistant at Al-Hayat Hospital.\n\nDescribe your symptoms in detail, and I will analyze them and suggest the right department for you.\n\nYou can write in Arabic or English.';
    const placeholder = isArabic ? 'اكتب أعراضك هنا...' : 'Type your symptoms here...';
    const suggestions = isArabic
        ? `<span class="suggestion-chip" onclick="sendQuickMessage('عيوني مغبشة وأحس بحرقة')">عيون مغبشة</span>
           <span class="suggestion-chip" onclick="sendQuickMessage('عندي ألم في صدري وصعوبة تنفس')">ألم صدر</span>
           <span class="suggestion-chip" onclick="sendQuickMessage('ظهري يؤلمني من أسبوع')">ألم ظهر</span>
           <span class="suggestion-chip" onclick="sendQuickMessage('طفلي عمره سنتين وحرارته مرتفعة')">حرارة طفل</span>`
        : `<span class="suggestion-chip" onclick="sendQuickMessage('My eyes are blurry and burning')">Blurry eyes</span>
           <span class="suggestion-chip" onclick="sendQuickMessage('I have chest pain and difficulty breathing')">Chest pain</span>
           <span class="suggestion-chip" onclick="sendQuickMessage('My back has been hurting for a week')">Back pain</span>
           <span class="suggestion-chip" onclick="sendQuickMessage('My 2-year-old has high fever')">Child fever</span>`;

    const chatbotHTML = `
    <div class="chatbot-container" id="chatbotContainer">
        <button class="chatbot-toggle" id="chatbotToggle" title="${isArabic ? 'المساعد الطبي' : 'Medical Assistant'}">
            <i class="fas fa-robot"></i>
            <span class="pulse"></span>
        </button>
        <div class="chatbot-window" id="chatbotWindow">
            <div class="chatbot-header">
                <div class="bot-info">
                    <div class="bot-avatar"><i class="fas fa-stethoscope"></i></div>
                    <div>
                        <div class="bot-name">${isArabic ? 'المساعد الطبي الذكي' : 'Smart Medical Assistant'}</div>
                        <div class="bot-status">${isArabic ? 'متصل | مستشفى الحياة' : 'Online | Al-Hayat Hospital'}</div>
                    </div>
                </div>
                <button class="chatbot-close" id="chatbotClose">&times;</button>
            </div>
            <div class="chatbot-body" id="chatbotBody">
                <div class="message bot">${welcomeMsg.replace(/\n/g, '<br>')}
                    <div class="quick-suggestions">${suggestions}</div>
                </div>
            </div>
            <div class="chatbot-footer">
                <input type="text" id="chatbotInput" placeholder="${placeholder}" onkeypress="if(event.key==='Enter') sendMessage()">
                <button onclick="sendMessage()"><i class="fas fa-paper-plane"></i></button>
            </div>
        </div>
    </div>`;
    
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
}

function analyzeSymptoms(text) {
    const textLower = text.toLowerCase().trim();
    const matches = [];
    
    medicalDatabase.forEach(dept => {
        let score = 0;
        const matchedKeywords = [];
        
        dept.keywords.forEach(keyword => {
            if (textLower.includes(keyword.toLowerCase())) {
                score += keyword.length > 4 ? 3 : keyword.length > 2 ? 2 : 1;
                matchedKeywords.push(keyword);
            }
        });
        
        if (score > 0) {
            matches.push({
                deptAR: dept.deptAR,
                deptEN: dept.deptEN,
                icon: dept.icon,
                score: score,
                keywords: matchedKeywords
            });
        }
    });
    
    matches.sort((a, b) => b.score - a.score);
    return matches;
}

async function analyzeWithAI(text, matchedDepts) {
    if (GEMINI_API_KEY === 'AIzaSyBNS1jKJeFRvJMfXt59SDnlcJcOwMmUUJ8') return null;
    
    const isArabic = document.documentElement.lang === 'ar';
    const topDepts = matchedDepts.slice(0, 3).map(m => isArabic ? m.deptAR : m.deptEN).join(', ');
    const lang = isArabic ? 'العربية' : 'English';
    
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `You are a friendly medical assistant at Al-Hayat Government Hospital in Kuwait.
                        
                        Patient says: "${text}"
                        Suggested departments: ${topDepts}
                        
                        Do the following:
                        1. Show empathy (one sentence).
                        2. Briefly analyze the symptoms (two sentences).
                        3. Suggest the most appropriate department.
                        4. Ask if they want to book an appointment.
                        
                        Reply in ${lang}. Be warm and concise (3-4 sentences max).
                        Do not use markdown. Do not mention you are AI.`
                    }]
                }]
            })
        });
        
        const data = await response.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text || null;
    } catch (error) {
        return null;
    }
}

function buildLocalReply(text, matches) {
    const isArabic = document.documentElement.lang === 'ar';
    const lowerText = text.toLowerCase().trim();
    
    const replies = quickReplies[isArabic ? 'ar' : 'en'];
    for (const [key, reply] of Object.entries(replies)) {
        if (lowerText.includes(key)) return reply;
    }
    
    if (matches.length === 0) {
        return isArabic
            ? 'شكراً لتواصلك. لم أتمكن من تحديد القسم المناسب من وصفك. هل يمكنك إعطائي تفاصيل أكثر عن الأعراض التي تشعر بها؟\n\nمثلاً:\n• "عندي ألم حاد في العين اليمنى"\n• "أحس بخفقان في قلبي"\n• "ظهري يؤلمني عند الانحناء"'
            : 'Thank you for reaching out. I couldn\'t determine the right department from your description. Could you give me more details about your symptoms?\n\nFor example:\n• "I have a sharp pain in my right eye"\n• "I feel heart palpitations"\n• "My back hurts when I bend"';
    }
    
    const topMatch = matches[0];
    const deptName = isArabic ? topMatch.deptAR : topMatch.deptEN;
    
    const empathyAR = ['أتمنى أن تكون بخير،', 'أتفهم شعورك،', 'لا تقلق، سنساعدك،', 'صحح الله بدنك،'];
    const empathyEN = ['I hope you feel better,', 'I understand how you feel,', 'Don\'t worry, we\'re here to help,', 'Wishing you good health,'];
    const empathy = isArabic ? empathyAR[Math.floor(Math.random() * empathyAR.length)] : empathyEN[Math.floor(Math.random() * empathyEN.length)];
    
    let reply = `${empathy} `;
    
    if (isArabic) {
        reply += `بناءً على الأعراض التي ذكرتها، أنصحك بشدة بزيارة *قسم ${deptName}*.\n\n`;
        if (matches.length > 1) {
            reply += `قد يكون *قسم ${matches[1].deptAR}* ذا صلة أيضاً.\n\n`;
        }
        reply += 'هل ترغب في حجز موعد الآن؟';
        reply += '\n<a href="index.html#book" class="quick-book-btn">نعم، احجز موعداً</a>';
    } else {
        reply += `Based on your symptoms, I strongly recommend visiting the *${deptName} Department*.\n\n`;
        if (matches.length > 1) {
            reply += `The *${matches[1].deptEN} Department* may also be relevant.\n\n`;
        }
        reply += 'Would you like to book an appointment now?';
        reply += '\n<a href="index.html#book" class="quick-book-btn">Yes, book now</a>';
    }
    
    return reply;
}

function addMessage(content, type = 'bot') {
    const body = document.getElementById('chatbotBody');
    const div = document.createElement('div');
    div.className = `message ${type}`;
    div.innerHTML = content.replace(/\n/g, '<br>');
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
}

function showTyping() {
    const body = document.getElementById('chatbotBody');
    const div = document.createElement('div');
    div.className = 'message typing';
    div.id = 'typingIndicator';
    div.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
}

function hideTyping() {
    const typing = document.getElementById('typingIndicator');
    if (typing) typing.remove();
}

function updateChatbotLanguage() {
    const chatbotBody = document.getElementById('chatbotBody');
    if (!chatbotBody) return;
    
    const isArabic = document.documentElement.lang === 'ar';
    const placeholder = isArabic ? 'اكتب أعراضك هنا...' : 'Type your symptoms here...';
    const input = document.getElementById('chatbotInput');
    if (input) input.placeholder = placeholder;
    
    const botName = document.querySelector('.bot-name');
    const botStatus = document.querySelector('.bot-status');
    if (botName) botName.textContent = isArabic ? 'المساعد الطبي الذكي' : 'Smart Medical Assistant';
    if (botStatus) botStatus.textContent = isArabic ? 'متصل | مستشفى الحياة' : 'Online | Al-Hayat Hospital';
}

async function sendMessage() {
    const input = document.getElementById('chatbotInput');
    const text = input.value.trim();
    if (!text) return;
    
    addMessage(text, 'user');
    input.value = '';
    
    conversationHistory.push({ role: 'user', content: text });
    if (conversationHistory.length > 10) conversationHistory.shift();
    
    showTyping();
    
    const matches = analyzeSymptoms(text);
    let reply = await analyzeWithAI(text, matches);
    if (!reply) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        reply = buildLocalReply(text, matches);
    }
    
    hideTyping();
    addMessage(reply, 'bot');
    conversationHistory.push({ role: 'assistant', content: reply });
}

function sendQuickMessage(text) {
    document.getElementById('chatbotInput').value = text;
    sendMessage();
}

document.addEventListener('DOMContentLoaded', function() {
    createChatbotHTML();
    
    const toggle = document.getElementById('chatbotToggle');
    const window_ = document.getElementById('chatbotWindow');
    const close = document.getElementById('chatbotClose');
    
    toggle.addEventListener('click', () => {
        window_.classList.toggle('open');
        if (window_.classList.contains('open')) {
            document.getElementById('chatbotInput').focus();
        }
    });
    
    close.addEventListener('click', () => {
        window_.classList.remove('open');
    });
});

window.addEventListener('languageChanged', function() {
    updateChatbotLanguage();
});
