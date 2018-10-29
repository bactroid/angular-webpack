angular.module('app')
  .controller('AppController', ['BooksService', AppController])

AppController.$inject = ['BooksService']
function AppController (BooksService) {
  const vm = this
  vm.books = BooksService.getBooks()
}
