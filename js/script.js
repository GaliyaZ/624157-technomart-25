var linkWrite = document.querySelector(".write-us");
var popupWrite = document.querySelector(".write");
var closeWrite = popupWrite.querySelector(".close-button");
var userName = popupWrite.querySelector(".write-input");

var linkMap = document.querySelector(".map-image");
var popupMap = document.querySelector(".map");
var closeMap = popupMap.querySelector(".close-button");
        
var addBookmark = document.querySelector(".bookmark-button");
var bookmark = document.querySelector(".bookmarks");

var addCard = document.querySelector(".buy-button");
var card = document.querySelector(".card");

linkWrite.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupWrite.classList.add("show-popup");
  userName.focus();
});

closeWrite.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupWrite.classList.remove("show-popup");
});  

/*map-popup-------------- */
linkMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.add("show-popup");
});

closeMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.remove("show-popup");
}); 

var linkBuy = document.querySelector(".buy-button");
/*var popupBuy = document.querySelector(".add-form");
var closeBuy = popupBuy.querySelector(".close-button");*/

linkBuy.addEventListener("click", function(evt) {
    /*evt.preventDefault();
    popupBuy.classList.add("show-popup");*/
    console.log("hhhhhhhhhhhhhhhhhhhhhh");
});
/*
closeBuy.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupBuy.classList.remove("show-popup");
}); */

/*фон закладок и корзины*/
addBookmark.addEventListener("click", function(evt) {
    evt.preventDefault();
    bookmark.classList.add("function-background");
}); 


addCard.addEventListener("click", function(evt) {
    evt.preventDefault();
    card.classList.add("function-background");
});