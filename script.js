// Axis Core - Official Logic (Optimized for Smooth Performance)
// Designed by: Salah Ashraf

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. عداد الوقت (Axis Core Countdown)
    function updateTimer() {
        const launchDate = new Date("April 4, 2026 00:00:00 GMT+0200").getTime();
        const now = new Date().getTime();
        const diff = launchDate - now;
        const timerElement = document.getElementById("countdown");

        if (!timerElement) return;

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

    // 2. كود الأسئلة الشائعة (FAQ) - سلس وسريع
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', (e) => {
                e.preventDefault();
                const isActive = item.classList.contains('active');
                
                // قفل الباقي
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // تبديل الحالة
                if (!isActive) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
    });

    // 3. تأثيرات الظهور عند التمرير (Scroll Animations) - محسنة للأداء
    const fadeElements = document.querySelectorAll('.standard-card, .partner-card, .faq-item, .section-title, .hero-title, .employee-card');
    
    function checkVisibility() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top < windowHeight - 80) {
                el.classList.add('visible');
            }
        });
    }
    
    // استخدام requestAnimationFrame للأداء الأفضل
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                checkVisibility();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    window.addEventListener('load', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility();

    // 4. عارض النصوص التقنية (متغيرات - أخف)
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
            // تأثير fade سلس
            textElement.style.opacity = '0';
            setTimeout(() => {
                textElement.textContent = techMessages[currentIndex];
                textElement.style.opacity = '1';
            }, 200);
        }, 5000);
    }

    // 5. صفحة التحميل (Pre-loader) - يظهر مرة واحدة لكل جلسة تصفح
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
                }, 400);
            }, 1200);
        } else {
            preloader.style.display = 'none';
            siteContent.style.display = 'block';
            checkVisibility();
        }
    } else {
        if (siteContent) siteContent.style.display = 'block';
    }

    // 6. قائمة الهامبرغر للموبايل (محسنة)
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.classList.toggle('show');
        });
        
        // قفل القائمة لما يضغط على أي رابط
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
            });
        });
    }

    // 7. شريط التقدم (Progress Bar) - خفيف
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        let progressTicking = false;
        window.addEventListener('scroll', () => {
            if (!progressTicking) {
                requestAnimationFrame(() => {
                    const windowHeight = window.innerHeight;
                    const documentHeight = document.documentElement.scrollHeight;
                    const scrollTop = window.scrollY;
                    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
                    progressBar.style.width = scrollPercent + '%';
                    progressTicking = false;
                });
                progressTicking = true;
            }
        });
    }
    
    // 8. شفافية الهيدر عند التمرير
    const header = document.getElementById('mainHeader');
    if (header) {
        let headerTicking = false;
        window.addEventListener('scroll', () => {
            if (!headerTicking) {
                requestAnimationFrame(() => {
                    if (window.scrollY > 50) {
                        header.classList.add('scrolled');
                    } else {
                        header.classList.remove('scrolled');
                    }
                    headerTicking = false;
                });
                headerTicking = true;
            }
        });
    }
    
    // 9. تحديث Uptime بشكل عشوائي (أخف)
    const uptimeElement = document.getElementById('uptimeValue');
    if (uptimeElement) {
        setInterval(() => {
            const newUptime = (85.2 + Math.random() * 15.6).toFixed(1);
            uptimeElement.textContent = newUptime;
        }, 10000);
    }

    // 10. النوافذ المنبثقة
    window.showWorksPopup = function() {
        const popup = document.getElementById('worksPopupOverlay');
        if (popup) popup.style.display = 'flex';
    };
    
    window.closeWorksPopup = function() {
        const popup = document.getElementById('worksPopupOverlay');
        if (popup) popup.style.display = 'none';
    };
    
    window.showLangPopup = function() {
        const popup = document.getElementById('langPopupOverlay');
        if (popup) popup.style.display = 'flex';
    };
    
    window.closeLangPopup = function() {
        const popup = document.getElementById('langPopupOverlay');
        if (popup) popup.style.display = 'none';
    };
    
    window.showAcademyPopup = function() {
        const popup = document.getElementById('academyPopupOverlay');
        if (popup) popup.style.display = 'flex';
    };
    
    window.closeAcademyPopup = function() {
        const popup = document.getElementById('academyPopupOverlay');
        if (popup) popup.style.display = 'none';
    };
    
    window.showThemePopup = function() {
        const popup = document.getElementById('themePopupOverlay');
        if (popup) popup.style.display = 'flex';
    };
    
    window.closeThemePopup = function() {
        const popup = document.getElementById('themePopupOverlay');
        if (popup) popup.style.display = 'none';
    };
    
    // إغلاق النوافذ عند الضغط خارجها
    const popups = ['worksPopupOverlay', 'langPopupOverlay', 'academyPopupOverlay', 'themePopupOverlay'];
    popups.forEach(popupId => {
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.style.display = 'none';
                }
            });
        }
    });

    // 11. زر العودة للأعلى
    const scrollBtn = document.getElementById('scrollToTopBtn');
    if (scrollBtn) {
        let btnTicking = false;
        window.addEventListener('scroll', () => {
            if (!btnTicking) {
                requestAnimationFrame(() => {
                    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
                    btnTicking = false;
                });
                btnTicking = true;
            }
        });
        
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});