// Allianz Core - Official Logic
// Designed by: Salah Ashraf

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. عداد الوقت (Allianz Core Countdown)
    function updateTimer() {
        const launchDate = new Date("April 4, 2026 16:00:00").getTime();
        const now = new Date().getTime();
        const diff = launchDate - now;
        const timerElement = document.getElementById("countdown");

        if (!timerElement) return;

        if (diff <= 0) {
            timerElement.innerHTML = "تم الانطلاق بنجاح! مرحباً بكم في المستقبل.";
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        // تنسيق العداد بشكل احترافي
        timerElement.innerHTML = `${d} يوم و ${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    // تشغيل العداد فوراً وتحديثه كل ثانية
    setInterval(updateTimer, 1000);
    updateTimer();

    // 2. كود الأسئلة الشائعة (FAQ) - الربط مع الـ CSS
    const questions = document.querySelectorAll('.faq-question');
    
    questions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            
            // إغلاق أي سؤال آخر مفتوح حالياً لضمان تجربة مستخدم سلسة
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // فتح أو قفل السؤال الحالي (الـ CSS هيتولى الباقي بالـ Animation)
            item.classList.toggle('active');
        });
    });

});