function updateTimer() {
    // موعد الانطلاق الرسمي: 4 أبريل 2026
    const launchDate = new Date("April 4, 2026 16:00:00").getTime();
    const now = new Date().getTime();
    const diff = launchDate - now;

    // جلب العنصر الواحد (السطر الأصلي)
    const timerElement = document.getElementById("countdown");

    // التأكد إن العنصر موجود عشان الكود ميفصلش
    if (!timerElement) return;

    if (diff <= 0) {
        timerElement.innerHTML = "تم الانطلاق بنجاح! مرحباً بكم في المستقبل.";
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    // عرض الوقت في سطر واحد ثابت (يوم و 00:00:00)
    timerElement.innerHTML = 
        `${d} يوم و ${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

// تشغيل العداد كل ثانية
setInterval(updateTimer, 1000);
updateTimer();

// كود الأسئلة الشائعة (FAQ) - سليم ومحمي
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) item.classList.remove('active');
        });
        faqItem.classList.toggle('active');
    });
});










// تشغيل الأكورديون بقوة وسلاسة
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        
        // قفل باقي الأسئلة (اختياري، لو عايز تفتح واحد بس في المرة)
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) otherItem.classList.remove('active');
        });

        // تبديل حالة السؤال الحالي
        item.classList.toggle('active');
    });
});