
function shelfBook(book, sciFiShelf) {
  if (sciFiShelf.length <= 2) {
  return sciFiShelf.unshift(book);
  };
};

function unshelfBook(bookTitle, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title.includes(bookTitle))
      shelf.splice(i,1)
    };
};

function listTitles(shelf) {
  var titlesList = []
  for (var i = 0; i < shelf.length; i++) {
    var list = shelf[i].title

    titlesList.push(list)
  }

return titlesList.join(', ')
};



function searchShelf(shelf, bookTitle) {
    for (var i = 0; i < shelf.length; i++)
      var titleKey = shelf[i].title
    {
      if (titleKey.includes(bookTitle)) {
        return true;
      } else {
        return false;
      }
  }
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
