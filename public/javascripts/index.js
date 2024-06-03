window.addEventListener("DOMContentLoaded", () => {
    let timeline = anime.timeline({ loop: false, autoplay: true });

    function displaySubtitles() {
        const subtitles = [
            { text: "Welcome to our presentation", start: 500, duration: 3000 },
            { text: "Exploring the wonders of Anime.js", start: 4000, duration: 3000 },
            { text: "Thank you for watching", start: 8000, duration: 3000 }
        ];

        subtitles.forEach(sub => {
            timeline.add({
                targets: '.subtitles',
                begin: function() {
                    document.querySelector('.subtitles').innerHTML = sub.text;
                },
                opacity: [0, 1],
                translateY: [30, 0],
                easing: 'easeOutExpo',
                duration: 800,
                endDelay: sub.duration - 800,
                complete: function() {
                    document.querySelector('.subtitles').innerHTML = "";
                }
            }, sub.start);
        });
    }

    displaySubtitles();
});
