
const userData = JSON.parse(localStorage.getItem('userData'));

if (userData.username && userData.password) {
    document.getElementById('completed-tests').textContent = userData.tests_completed || 0;
    document.getElementById('typing-speed').textContent = `${userData.typing_speed || 0} знаков в минуту`;
    document.getElementById('days-site').textContent = userData.dayssite || 0; 
    const speedCtx = document.getElementById('typingSpeedChart').getContext('2d');
    const speedData = userData.historicalSpeed || [60, 70, 80, 75, 90];
    new Chart(speedCtx, {
        type: 'line',
        data: {
            labels: ['Ⅰ квартал', 'Ⅱ квартал', 'Ⅲ квартал', 'Ⅳ квартал'], 
            datasets: [{
                label: 'Скорость печати (симв/мин)',
                data: speedData,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            layout: {
                padding: {
                    left: 50,
                    right: 50,
                    top: 10,
                    bottom: 10
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const testsCtx = document.getElementById('testsCompletedChart').getContext('2d');
    const testsData = userData.historicalTests || [2, 3, 4, 5];
    new Chart(testsCtx, {
        type: 'bar',
        data: {
            labels: ['Ⅰ квартал', 'Ⅱ квартал', 'Ⅲ квартал', 'Ⅳ квартал'], 
            datasets: [{
                label: 'Пройденные тесты',
                data: testsData,
                backgroundColor: 'rgba(153, 102, 255, 0.5)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {  
            responsive: true,
            layout: {
                padding: {
                    left: 50,
                    right: 50,
                    top: 10,
                    bottom: 10
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

} else {
    window.location.href = '/cabinet.html'; 
}
function calculateDaysOnSite(createdAt) {
    const now = new Date();
    const createdDate = new Date(createdAt);
    
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const createdDateFormatted = createdDate.toLocaleDateString('ru-RU', options); 
    return `Пользователь добавлен ${createdDateFormatted}`;
}
const daysEnrolledMsg = calculateDaysOnSite(userData.created_at);
document.getElementById('days-site').textContent = daysEnrolledMsg; 

function clearLogin() {
    delete userData.username;
    delete userData.password;
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.href = '/cabinet.html';
}