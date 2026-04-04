// Axis Core - Official Logic
// Designed by: Salah Ashraf

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. عداد الوقت (Axis Core Countdown)
    function updateTimer() {
        const launchDate = new Date("April 4, 2026 00:00:00 GMT+0200").getTime();
        const now = new Date().getTime();
        const diff = launchDate - now;
        const timerElement = document.getElementById("countdown");

        if (!timerElement) {
            console.log("عنصر countdown غير موجود في الصفحة");
            return;
        }

        if (diff <= 0) {
            timerElement.innerHTML = "🚀 تم الإطلاق التجريبي بنجاح! مرحباً بكم في المستقبل.";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        timerElement.innerHTML = `${days} يوم - ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    updateTimer();
    setInterval(updateTimer, 1000);

    // 2. كود الأسئلة الشائعة (FAQ)
    const questions = document.querySelectorAll('.faq-question');
    questions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });

    // 3. تأثيرات الظهور عند التمرير (Scroll Animations)
    const fadeElements = document.querySelectorAll('.standard-card, .partner-item, .soon-card, .faq-item, .section-title, .architect-wrapper, .hero-title');
    
    function checkVisibility() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top < windowHeight - 100 && rect.bottom > 100) {
                el.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('load', checkVisibility);
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // 4. عارض النصوص التقنية
    const textElement = document.getElementById('code-text');
    if (textElement) {
        const techMessages = [
            "✨ \"نحن لا نبرمج؛ نبني أنظمة تعيش طويلاً.\"",
            "🔧 \"الكود النظيف هو أساس الهندسة المتقنة.\"",
            "🛡️ \"الأمن ليس إضافة؛ إنه جوهر التصميم.\"",
            "⚡ \"كل سطر نكتبه يحمل بصمة المهندس صلاح أشرف.\"",
            "🚀 \"من القاهرة إلى العالم.. هندسة بلا حدود.\"",
            "💡 \"التكنولوجيا وسيلة، والهندسة رسالة.\""
        ];
        let currentIndex = 0;
        textElement.textContent = techMessages[0];
        setInterval(() => {
            currentIndex = (currentIndex + 1) % techMessages.length;
            textElement.textContent = techMessages[currentIndex];
        }, 4000);
    }

    // 5. صفحة التحميل (Pre-loader)
    const preloader = document.getElementById('preloader');
    const siteContent = document.querySelector('.site-content');
    const hasSeenPreloader = sessionStorage.getItem('preloaderShown');
    
    if (preloader && siteContent) {
        if (!hasSeenPreloader) {
            sessionStorage.setItem('preloaderShown', 'true');
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                    siteContent.style.display = 'block';
                    checkVisibility();
                }, 500);
            }, 1500);
        } else {
            preloader.style.display = 'none';
            siteContent.style.display = 'block';
            checkVisibility();
        }
    } else {
        if (siteContent) siteContent.style.display = 'block';
    }

    // 6. قائمة الهامبرغر للموبايل
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    menuToggle.setAttribute('aria-label', 'القائمة');
    
    const nav = document.querySelector('nav');
    if (nav && !document.querySelector('.menu-toggle')) {
        nav.appendChild(menuToggle);
    }
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            if (navLinks) {
                navLinks.classList.toggle('active');
            }
        });
    }
    
    if (navLinks) {
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 7. شريط التقدم (Progress Bar)
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    }
    
    // 8. شفافية الهيدر عند التمرير
    const header = document.getElementById('mainHeader');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // 9. تفعيل خلفية الجزيئات (Particles)
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-bg', {
            particles: {
                number: { value: 60, density: { enable: true, value_area: 800 } },
                color: { value: '#d4af37' },
                shape: { type: 'circle' },
                opacity: { value: 0.3, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: false },
                move: { enable: true, speed: 1, direction: 'none', random: true, straight: false, out_mode: 'out' }
            },
            interactivity: {
                detect_on: 'canvas',
                events: { onhover: { enable: false }, onclick: { enable: false }, resize: true }
            },
            retina_detect: true
        });
    } else {
        console.log("Particles.js library not loaded");
    }

    // 10. تحديث Uptime بشكل عشوائي
    const uptimeElement = document.querySelector('.uptime span');
    if (uptimeElement) {
        setInterval(() => {
            const newUptime = (85.2 + Math.random() * 15.6).toFixed(1);
            uptimeElement.textContent = `Uptime: ${newUptime}%`;
        }, 8000);
    }

    // 11. أهداف طموحة - عداد متحرك (يتفعل عند ظهور القسم)
    const impactSection = document.querySelector('.impact-section');
    if (impactSection) {
        const counters = [
            { id: 'codeTarget', target: 50000, suffix: '+' },
            { id: 'projectsTarget', target: 25, suffix: '+' },
            { id: 'clientsTarget', target: 20, suffix: '+' }
        ];
        let started = false;

        function updateCounter(counter) {
            const element = document.getElementById(counter.id);
            if (!element) return;
            let current = 0;
            const increment = Math.ceil(counter.target / 60);
            const interval = setInterval(() => {
                current += increment;
                if (current >= counter.target) {
                    current = counter.target;
                    clearInterval(interval);
                }
                element.textContent = current + counter.suffix;
            }, 20);
        }

        function checkImpactVisibility() {
            if (started) return;
            const rect = impactSection.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                started = true;
                counters.forEach(counter => updateCounter(counter));
            }
        }

        window.addEventListener('scroll', checkImpactVisibility);
        window.addEventListener('load', checkImpactVisibility);
        checkImpactVisibility();
    }

    // 12. نافذة أعمالنا
    window.showWorksPopup = function() {
        const popup = document.getElementById('worksPopupOverlay');
        if (popup) popup.style.display = 'flex';
    };
    
    window.closeWorksPopup = function() {
        const popup = document.getElementById('worksPopupOverlay');
        if (popup) popup.style.display = 'none';
    };
    
    // 13. نافذة اللغة
    window.showLangPopup = function() {
        const popup = document.getElementById('langPopupOverlay');
        if (popup) popup.style.display = 'flex';
    };
    
    window.closeLangPopup = function() {
        const popup = document.getElementById('langPopupOverlay');
        if (popup) popup.style.display = 'none';
    };
    
    // 14. نافذة الأكاديمية
    window.showAcademyPopup = function() {
        const popup = document.getElementById('academyPopupOverlay');
        if (popup) popup.style.display = 'flex';
    };
    
    window.closeAcademyPopup = function() {
        const popup = document.getElementById('academyPopupOverlay');
        if (popup) popup.style.display = 'none';
    };
    
    // إغلاق النوافذ عند الضغط خارجها
    const worksPopup = document.getElementById('worksPopupOverlay');
    if (worksPopup) {
        worksPopup.addEventListener('click', function(e) {
            if (e.target === this) window.closeWorksPopup();
        });
    }
    
    const langPopup = document.getElementById('langPopupOverlay');
    if (langPopup) {
        langPopup.addEventListener('click', function(e) {
            if (e.target === this) window.closeLangPopup();
        });
    }
    
    const academyPopup = document.getElementById('academyPopupOverlay');
    if (academyPopup) {
        academyPopup.addEventListener('click', function(e) {
            if (e.target === this) window.closeAcademyPopup();
        });
    }
});



















