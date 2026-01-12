function adjustLayout() {
    const width = window.innerWidth;

  
    if (width < 600) {
        document.body.style.fontSize = "14px"; // Уменьшаем размер шрифта для узких экранов
    } else {
        document.body.style.fontSize = "16px"; // Обычный размер шрифта
    }
}


adjustLayout();


window.addEventListener("resize", adjustLayout);
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Управление видимостью
});
