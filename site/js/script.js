



document.addEventListener("DOMContentLoaded", function () {
    const teachersCount = 32; 
    const usersCount = 4200;

    const teachersElement = document.getElementById('teachers-count');
    const usersElement = document.getElementById('users-count');

    const animateCount = (element, count) => {
        let currentCount = 0;
        const increment = Math.ceil(count / 50); 
        
        const interval = setInterval(() => {
            currentCount += increment;
            if (currentCount >= count) {
                clearInterval(interval);
                element.textContent = count;
            } else {
                element.textContent = currentCount;
            }
        }, 30); // Интервал обновления
    };

    const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                animateCount(teachersElement, teachersCount);
                animateCount(usersElement, usersCount);
                intersectionObserver.unobserve(entry.target);
            }
        });
    });

    const statisticsSection = document.querySelector('.statistics');
    intersectionObserver.observe(statisticsSection); 
});