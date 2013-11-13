var myApp = angular.module('coolApp', []);

myApp.controller('CartCtrl', function () {
    this.items = [{ name: 'Chocolate' },
                  { name: 'Bread' },
                  { name: 'Coffee' }];

    this.delete = function (index) {
      this.items.splice(index, 1);
    };
});