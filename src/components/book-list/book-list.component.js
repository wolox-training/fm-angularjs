const angular = require('angular');

angular.module('app-bootstrap').component('bookList', {
  template: require('./book-list.html'),
  controller: ['userService', function (userService) {
    this.bookList = [];
    this.getBookList = () => {
      userService.getBooks()
        .then(response => {
          this.bookList = response.data.page;
        })
        .catch(error => {
          console.log(error);
        });
    };
    this.getBookList();
  }]
});

