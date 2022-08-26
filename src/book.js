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
}
};

function calculatePageCount() {

}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}
