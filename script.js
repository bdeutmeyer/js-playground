const bodyEl = document.getElementById("body-el")
const funFactsBtn = document.getElementById("fun-facts-btn");
const bgColorBtn = document.getElementById("bg-color-btn");
const catGifBtn = document.getElementById("cat-gif-btn");
const gifSection = document.getElementById("gif-section");

const colorArray = ["aqua", "purple", "blue", "green", "yellow", "beige", "white", "blueviolet", "black", "azure", "cyan", "bisque", "aquamarine", "brown", "cadetblue", "chartreuse", "coral"];
 
const bgChange = () => {
    for (let i = colorArray.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = colorArray[i];
        colorArray[i] = colorArray[j];
        colorArray[j] = k;
    }
    bodyEl.style.backgroundColor = colorArray[0];
};

const gifArray = ["https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExczAxdWgyOG53ZjA4cmE0ZGF1dmtrdzZmZjl5c3hmanZrY3ZhMXh3aCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/epnHmbfUFaBkk/giphy.gif", "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExczAxdWgyOG53ZjA4cmE0ZGF1dmtrdzZmZjl5c3hmanZrY3ZhMXh3aCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/G0oBD5WsPcWjK/giphy.gif", "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExczAxdWgyOG53ZjA4cmE0ZGF1dmtrdzZmZjl5c3hmanZrY3ZhMXh3aCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/SL2TwiZJAvOhO/giphy.gif", "https://media.giphy.com/media/lXCQNy6VTwmk0/giphy.gif?cid=790b7611s01uh28nwf08ra4dauvkkw6ff9ysxfjvkcva1xwh&ep=v1_gifs_search&rid=giphy.gif&ct=g", "https://media.giphy.com/media/dTfxJ7enUzdSM/giphy.gif?cid=790b7611s01uh28nwf08ra4dauvkkw6ff9ysxfjvkcva1xwh&ep=v1_gifs_search&rid=giphy.gif&ct=g", "https://media.giphy.com/media/5ZZbMGV6EQANO/giphy.gif?cid=790b7611s01uh28nwf08ra4dauvkkw6ff9ysxfjvkcva1xwh&ep=v1_gifs_search&rid=giphy.gif&ct=g", "https://media.giphy.com/media/XVHVUJm4ElVbq/giphy.gif?cid=790b7611s01uh28nwf08ra4dauvkkw6ff9ysxfjvkcva1xwh&ep=v1_gifs_search&rid=giphy.gif&ct=g", "https://media.giphy.com/media/BaFAtIGShvmo0/giphy.gif?cid=790b7611s01uh28nwf08ra4dauvkkw6ff9ysxfjvkcva1xwh&ep=v1_gifs_search&rid=giphy.gif&ct=g"];

const gifChange = () => {
  for (let i = gifArray.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i+1));
      let k = gifArray[i];
      gifArray[i] = gifArray[j];
      gifArray[j] = k;
  }

  const catGif = document.createElement("img");
  const catGifUrl = gifArray[0];
  catGif.src = catGifUrl
  gifSection.appendChild(catGif);
};

bgColorBtn.addEventListener("click", () => {
  bgChange();
});

catGifBtn.addEventListener("click", () => {
  gifChange();
});