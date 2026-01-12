
const users = [
    { username: "admin", password: "Elite1337!", tests_completed: 148, typing_speed: 34, dayssite: 12, historicalSpeed: [5, 10, 20, 30], historicalTests: [51, 23, 33, 41],created_at: '2025-01-21'},
    { username: "user2", password: "password2", tests_completed: 3, typing_speed: 75 }
];

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
       
        localStorage.setItem('userData', JSON.stringify(user));
     
        window.location.href = 'dashboard.html'; 
    } else {
        alert("Неверные логин или пароль");
    }
});


const userData = JSON.parse(localStorage.userData);

if (userData.username && userData.password) {
    window.location = "/dashboard.html";
}


