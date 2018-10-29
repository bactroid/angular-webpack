var bookList = {
  bindings: {
    books: '<'
  },
  template: require('./book-list.template.html')
}

angular.module('app')
  .component('bookList', bookList)
