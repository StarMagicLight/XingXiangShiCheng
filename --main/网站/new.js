document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.slider-dots');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
    // 创建导航点
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    
    // 更新轮播图显示
    function updateSlider() {
        // 移除所有活动状态
        slides.forEach(slide => {
            slide.style.opacity = '0';
            slide.style.display = 'none';
        });
        dots.forEach(dot => dot.classList.remove('active'));
        
        // 设置当前幻灯片
        slides[currentSlide].style.display = 'block';
        setTimeout(() => {
            slides[currentSlide].style.opacity = '1';
        }, 50);
        
        // 更新导航点
        dots[currentSlide].classList.add('active');
    }
    
    // 切换到指定幻灯片
    function goToSlide(index) {
        currentSlide = index;
        updateSlider();
    }
    
    // 下一张幻灯片
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlider();
    }
    
    // 上一张幻灯片
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlider();
    }
    
    // 添加按钮事件监听
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // 自动播放
    let autoplayInterval = setInterval(nextSlide, 5000);
    
    // 鼠标悬停时暂停自动播放
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });
    
    // 鼠标离开时恢复自动播放
    slider.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextSlide, 5000);
    });
    
    // 初始化显示
    updateSlider();
});