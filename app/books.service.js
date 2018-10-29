function BooksService () {
  var vm = this
  vm.getBooks = function () {
    return [
      {title: 'Game of Thrones', author: 'George R. R. Martin'},
      {title: 'Capital', author: 'Karl Marx'},
      {title: 'Interview with the Vampire', author: 'Anne Rice'}
    ]
  }
}

angular.module('app')
  .service('BooksService', BooksService)
