
function shelfBook(book, sciFiShelf) {
  if (sciFiShelf.length <= 2) {
  return sciFiShelf.unshift(book);
  };
};

function unshelfBook() {

}


module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};
