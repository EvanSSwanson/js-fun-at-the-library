function createTitle(title) {
  return `The ${title}`;
};

function buildMainCharacter(name, age, pronouns) {
  var builtCharacter = {
    name: name,
    age: age,
    pronouns: pronouns
  };
  return builtCharacter;
};

function saveReview(statement, listOfReviews) {
  if (listOfReviews.includes(statement) === false) {
  return listOfReviews.push(statement);
  };
};

function calculatePageCount(bookTitle) {
  var pageCount = bookTitle.length * 20;
  return pageCount;
};

function writeBook(bookTitle, builtCharacter, bookGenre) {
  var bookObject = {
    title: bookTitle,
    mainCharacter: builtCharacter,
    pageCount: bookTitle.length * 20,
    genre: bookGenre
  };
  return bookObject;
};

function editBook(bookObject) {
  return bookObject.pageCount = bookObject.pageCount * .75
};


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
