document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    navbar.style.transition = 'none'; 
    navbar.style.maxHeight = '0'; 
    navbar.style.display = 'none'; 

    document.getElementById('menu-icon').addEventListener('click', function () {
        this.classList.toggle('open'); 

        navbar.classList.toggle('open'); 

        if (navbar.classList.contains('open')) {
            navbar.style.display = 'block'; 
           
            setTimeout(() => {
                navbar.style.transition = 'max-height 0.3s ease, opacity 0.3s ease'; 
                navbar.style.maxHeight = navbar.scrollHeight + 'px'; 
            }, 0);
        } else {
            navbar.style.maxHeight = '0'; 
            setTimeout(() => {
                navbar.style.display = 'none'; 
            }, 300); 
        }
    });
});
