const jsmediatags = window.jsmediatags;
const inputFile = document.getElementById("inputFile");
const modalSection = document.querySelector(".modal-section");

async function openModal() {
  modalSection.style.display = "block";
}

function closeModal() {
  modalSection.style.display = "none";
}

const options = {
  accept: "image/*",
};

async function selectFile(e) {
  let [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
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

  setTimeout(() => {
    openModal();
  }, 1500);
}

inputFile.addEventListener("click", (e) => {
  selectFile(e);
});
