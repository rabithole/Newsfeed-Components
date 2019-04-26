// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    this.domElement = domElement;
// console.log(domElement)
    this.expandButton = domElement.querySelector('.article .expandButton');
    this.expandButton.textContent = 'expand  ';
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
  }
  expandArticle() {
    this.domElement.classList.toggle('article-open')
  }
}

// let articles = document.querySelectorAll('.article').forEach(domElement => new Article(domElement));

document.querySelectorAll('.article').forEach(newArticle);
function newArticle(a) {
  new Article(a)
  // console.log(a)
}