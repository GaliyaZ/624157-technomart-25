var addBookmark = document.querySelectorAll(".bookmark-button");
var bookmark = document.querySelector(".bookmarks");

var addCard = document.querySelector(".buy-button");
var card = document.querySelector(".card");
var i = 0;

var linkBuy = document.querySelectorAll(".buy-button");
var popupBuy = document.querySelector(".add-form");
var closeBuy = popupBuy.querySelector(".close-button");

/*popup Buy open/close */
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
for(i = 0; i < addBookmark.length; i++){
  addBookmark[i].addEventListener("click", function(evt) {
  evt.preventDefault();
  bookmark.classList.add("function-background");
}); 
};