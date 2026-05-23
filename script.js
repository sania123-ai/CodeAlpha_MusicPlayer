const songs = [
  {
    title: "Song 1",
    artist: "Artist 1",
    src: "songs/song1.mp3"
  },
  {
    title: "Song 2",
    artist: "Artist 2",
    src: "songs/song2.mp3"
  }
];

let index = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

function loadSong() {
  audio.src = songs[index].src;
  title.textContent = songs[index].title;
  artist.textContent = songs[index].artist;
}

function playPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function nextSong() {
  index = (index + 1) % songs.length;
  loadSong();
  audio.play();
}

function prevSong() {
  index = (index - 1 + songs.length) % songs.length;
  loadSong();
  audio.play();
}

// volume control
document.getElementById("volume").addEventListener("input", (e) => {
  audio.volume = e.target.value;
});

loadSong();