var linkWrite = document.querySelector(".write-us");
var popupWrite = document.querySelector(".write");
var closeWrite = popupWrite.querySelector(".close-button");
var userName = popupWrite.querySelector(".write-input");

var linkMap = document.querySelector(".map-image");
var popupMap = document.querySelector(".map");
var closeMap = popupMap.querySelector(".close-button");
        
var addBookmark = document.querySelectorAll(".bookmark-button");
var bookmark = document.querySelector(".bookmarks");

var addCard = document.querySelector(".buy-button");
var card = document.querySelector(".card");
var i = 0;

var linkBuy = document.querySelectorAll(".buy-button");
var popupBuy = document.querySelector(".add-form");
var closeBuy = popupBuy.querySelector(".close-button");

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

/* popup добавления в корзину */
for(i = 0; i < linkBuy.length; i++){ 
  linkBuy[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    popupBuy.classList.add("show-popup");
    card.classList.add("function-background");
  });
};
closeBuy.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupBuy.classList.remove("show-popup");
}); 
i=0;
/*фон закладок и корзины*/
for(i = 0; i < addBookmark.length; i++){ // проходим циклом по всем элементам объекта
  addBookmark[i].addEventListener("click", function(evt) {
  evt.preventDefault();
  bookmark.classList.add("function-background");
}); 
};
