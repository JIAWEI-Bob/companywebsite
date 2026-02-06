document.addEventListener('DOMContentLoaded', () => {
    // 1. 原有的按鈕監聽
    const btn = document.querySelector('.google-form-btn');
    if(btn) {
        btn.addEventListener('click', () => console.log("前往表單"));
    }

    // 2. 核心挑戰：捲動顯現動畫
    const observerOptions = {
        threshold: 0.1 // 當元素出現 10% 就觸發
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // 針對所有卡片與標題進行監聽
    const animateElements = document.querySelectorAll('.service-card, .section-title');
    animateElements.forEach(el => {
        // 設定初始隱藏狀態
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
        observer.observe(el);
    });
});