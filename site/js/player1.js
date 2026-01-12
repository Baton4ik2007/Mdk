var player = videojs('my-video');


function centerPlayButton() {
    var button = document.querySelector('.vjs-big-play-button');
    var videoElement = document.getElementById('my-video');


    if (!button || !videoElement) return;


    var videoWidth = videoElement.offsetWidth;
    var videoHeight = videoElement.offsetHeight;
    var buttonWidth = button.offsetWidth;
    var buttonHeight = button.offsetHeight;

 
    button.style.top = (videoHeight / 2) - (buttonHeight / 2) + 'px';
    button.style.left = (videoWidth / 2) - (buttonWidth / 2) + 'px';
}

player.ready(function() {
    centerPlayButton();

    window.addEventListener('resize', centerPlayButton);


    document.addEventListener('keydown', function(event) {
        if (event.code === 'KeyF') {  // Используем event.code для идентификации клавиши F
            // Переключение полноэкранного режима
            if (player.isFullscreen()) {
                player.exitFullscreen();
            } else {
                player.requestFullscreen();
            }
        } else if (event.code === 'Space') { // Space для паузы
      
            event.preventDefault(); 
            if (player.paused()) {
                player.play();
            } else {
                player.pause();
            }
        }
    });
});


function createQualityMenu() {
    var qualityMenu = player.controlBar.addChild('Component', {
        el: videojs.createEl('div', { className: 'vjs-quality-menu' })
    });

    var select = videojs.createEl('select', { 
        className: 'quality-select',
        title: 'Выберите качество видео'
    });

    var qualityOptions = [
        { src: '../video/installwin.mp4', label: '480p' },
        { src: '../video/installwin.mp4', label: '720p' },
        { src: '../video/installwin.mp4', label: '1080p' }
    ];

    qualityOptions.forEach(function(option) {
        var optionElement = videojs.createEl('option', {
            innerHTML: option.label,
            value: option.src
        });
        select.appendChild(optionElement);
    });

    qualityMenu.el().appendChild(select);
    player.controlBar.fullscreenToggle.el().parentNode.insertBefore(qualityMenu.el(), player.controlBar.fullscreenToggle.el());

    select.addEventListener('change', function() {
        player.src(this.value);
        player.play();
    });
}


createQualityMenu();