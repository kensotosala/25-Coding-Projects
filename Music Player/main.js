const jsmediatags = window.jsmediatags;
const inputFile = document.getElementById("inputFile");
const modalSection = document.querySelector(".modal-section");
const btnPlay = document.getElementById("play-sound");
const btnForward = document.getElementById("btnForward");
const btnBackward = document.getElementById("btnBackward");

// Variables
let audioFile;
const audio = new Audio();
let isPlaying = false;

async function openModal() {
  modalSection.style.display = "block";
}

function closeModal() {
  modalSection.style.display = "none";
  stopAudio();
}

async function selectFile(e) {
  let [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  audioFile = file;
  jsmediatags.read(file, {
    onSuccess: function (tag) {
      console.log(tag);
      document.querySelector(".song-title").textContent = tag.tags.title;
      document.querySelector(".author-title").textContent = tag.tags.artist;

      const picture = tag.tags.picture;

      // Convert picture data to a base64 string
      const base64String = btoa(String.fromCharCode.apply(null, picture.data));

      // Create a data URL for the image
      const imageURL = `data:${picture.format};base64,${base64String}`;

      // Set the src attribute of the image element
      const songCoverElement = document.getElementById("songCover");
      songCoverElement.src = imageURL;
    },
    onError: function (error) {
      console.log(error);
    },
  });

  audio.src = URL.createObjectURL(audioFile);

  setTimeout(() => {
    openModal();
  }, 1500);

  return file;
}

inputFile.addEventListener("click", (e) => {
  selectFile(e);
});

function stopAudio() {
  audio.pause();
  audio.currentTime = 0;
}

btnPlay.addEventListener("click", () => {
  if (isPlaying) {
    btnPlay.src = "/assets/play.svg";
    isPlaying = false;
    audio.pause();
  } else {
    btnPlay.src = "/assets/pause.svg";
    isPlaying = true;
    audio.play();
  }
});

btnForward.addEventListener("click", () => {
  if (!isNaN(audio.duration)) {
    audio.currentTime += 5;
  }
});

btnBackward.addEventListener("click", () => {
  if (!isNaN(audio.duration)) {
    audio.currentTime -= 5;
  }
});
