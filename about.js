
// Tự động phát và lặp lại video

document.addEventListener('DOMContentLoaded', function() {
    var videos = document.querySelectorAll('video');

    videos.forEach(function(video) {
        video.play();
    });

    videos.forEach(function(video) {
        video.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    });
});
