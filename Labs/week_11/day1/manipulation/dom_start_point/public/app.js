window.onload = function(){

//1.create parent container
var quoteArticle = document.createElement("article");
quoteArticle.classList.add("quote");

//2.create first child
var blockquote = document.createElement("blockquote");
blockquote.innerText = "Same as everyone else";

//3.create site element

var cite = document.createElement("cite");
cite.innerText = "Cohort 7";

//4.append the  cite to blockquote

blockquote.appendChild(cite);

//5. append blockquote 

quoteArticle.appendChild(blockquote);

//6 add everything to the list

var quotes = document.querySelector("#quotes");

quotes.appendChild(quoteArticle);

};
