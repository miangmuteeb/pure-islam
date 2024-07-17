document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audioPlayer");
    const audioSource = document.getElementById("audioSource");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const playlist = document.getElementById("playlist");
    let currentTrack = 0;
    
    const tracks = Array.from(playlist.getElementsByTagName("li"));
    
    function loadTrack(index) {
        const track = tracks[index];
        audioSource.src = track.getAttribute("data-src");
        audioPlayer.load();
        updateActiveTrack(index);
    }
    
    function updateActiveTrack(index) {
        tracks.forEach((track, idx) => {
            if (idx === index) {
                track.classList.add("active");
            } else {
                track.classList.remove("active");
            }
        });
    }
    
    function playPause() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.textContent = "Pause";
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = "Play";
        }
    }
    
    function playNext() {
        currentTrack = (currentTrack + 1) % tracks.length;
        loadTrack(currentTrack);
        audioPlayer.play();
    }
    
    function playPrevious() {
        currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
        loadTrack(currentTrack);
        audioPlayer.play();
    }
    
    playPauseBtn.addEventListener("click", playPause);
    nextBtn.addEventListener("click", playNext);
    prevBtn.addEventListener("click", playPrevious);
    
    playlist.addEventListener("click", function (e) {
        if (e.target && e.target.nodeName === "LI") {
            currentTrack = tracks.indexOf(e.target);
            loadTrack(currentTrack);
            audioPlayer.play();
        }
    });
    
    audioPlayer.addEventListener("ended", playNext);
    

    loadTrack(currentTrack);
});