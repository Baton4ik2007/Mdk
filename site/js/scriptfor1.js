// Обработка реакций на статью
const reactionButtons = document.querySelectorAll('.reaction');
reactionButtons.forEach(button => {
    button.addEventListener('click', function() {
        const reactionType = this.getAttribute('data-reaction');
        playReactionAnimation(reactionType);
    });
});

function playReactionAnimation(reaction) {
    const notification = document.createElement('div');
    notification.classList.add('reaction-notification');
   
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 2000);
}

document.getElementById('submit-comment').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const commentText = document.getElementById('comment').value;
    
    const avatarUrl = '/images/avatar.png';  

    if (name && commentText) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `<img src="${avatarUrl}" alt="${name}'s avatar" class="avatar" /> 
                                <strong>${name}</strong><br>${commentText}<br>
                                <button class="reaction" data-reaction="like">👍</button>
                                <button class="reaction" data-reaction="dislike">👎</button>`;
        
        document.getElementById('comment-list').append(commentDiv);

        document.getElementById('name').value = '';
        document.getElementById('comment').value = '';

        const reactionButtons = commentDiv.querySelectorAll('.reaction');
        reactionButtons.forEach(button => {
            button.addEventListener('click', function() {
                reactionButtons.forEach(btn => btn.classList.remove('selected'));
                this.classList.add('selected');
                
                const commentReaction = this.getAttribute('data-reaction');
                playReactionAnimation(commentReaction);
            });
        });
    } else {
        showNotification('Пожалуйста, заполните все поля.');
    }
});

function showNotification(message) {
    const notification = document.getElementById('notification');
    const messageContainer = notification.querySelector('.notification-message');

    messageContainer.innerText = message; 
    notification.style.display = 'flex'; 
    notification.classList.remove('fade-out'); 

   
    setTimeout(() => {
        notification.classList.add('fade-out'); 

        
        setTimeout(() => {
            notification.style.display = 'none'; 
        }, 300); 
    }, 3000); 
}
document.querySelectorAll('.reaction').forEach(button => {
    button.addEventListener('click', function() {
        // Убираем класс active у всех кнопок
        document.querySelectorAll('.reaction').forEach(btn => {
            btn.classList.remove('active');
        });

        // Добавляем класс active к нажатой кнопке
        this.classList.add('active');
    });
});
document.querySelectorAll('.reaction').forEach(button => {
    button.addEventListener('click', function() {
        const comment = this.parentElement; 
        comment.classList.toggle('selected');
    });
});









document.querySelectorAll('.step-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 

        const targetId = this.getAttribute('href'); 
        const targetElement = document.querySelector(targetId); 

        // Прокручиваем к целевому элементу
        targetElement.scrollIntoView({ behavior: 'smooth' });

        // Добавляем класс подсветки
        targetElement.classList.add('highlight');

        // Убираем подсветку через несколько секунд
        setTimeout(() => {
            targetElement.classList.remove('highlight');
        }, 2000); // 2000 мс = 2 секунды
    });
});
const switchInput = document.getElementById('themeSwitch');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

switchInput.addEventListener('change', () => {
    const isDarkTheme = document.body.classList.toggle('dark-theme');
    header.classList.toggle('dark-theme', isDarkTheme);
    footer.classList.toggle('dark-theme', isDarkTheme);
});


if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    header.classList.add('dark-theme');
    footer.classList.add('dark-theme');
    switchInput.checked = true;
}

switchInput.addEventListener('change', () => {
    if (switchInput.checked) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.removeItem('theme');
    }
});