var myApp = angular.module('mailApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'inbox.html',
      controller: 'InboxController',
      controllerAs: 'inbox',
      name: 'inbox'
    })
    .when('/message/:id', {
      templateUrl: 'message.html',
      controller: 'MessageController',
      controllerAs: 'message',
      name: 'inbox'
    })
    .when('/compose', {
      templateUrl: 'compose.html',
      controller: 'MessageController',
      controllerAs: 'compose',
      name: 'compose'
    })
    .when('/settings', {
      templateUrl: 'settings.html',
      controller: 'SettingsController',
      controllerAs: 'settings',
      name: 'settings'
    })
    .when('/about', {
      templateUrl: 'about.html',
      controller: 'AboutController',
      controllerAs: 'about',
      name: 'about'
    })
    .otherwise({
      redirectTo: '/'
    });
  });

myApp.factory('messages', function($http) {
  return $http
    .get('messages.json')
    .then(function(response) {
      return response.data;
    });
});

myApp.controller('InboxController', function (messages) {
    var self = this;
    messages.then(function (messages) {
      self.messages = messages;
    });
});



myApp.controller('NavController', function ($route) {
    this.is = function(title) {
      if (!$route.current) { 
        return false;
      }
      return $route.current.name == title;
    }
});

myApp.controller('MessageController', function ($routeParams, messages) {
    var self = this;
    messages.then(function (messages) {
      self.detail = messages[$routeParams.id];
    });
});

myApp.controller('SettingsController', function () {
  // TODO
});

myApp.controller('ComposeController', function () {
  // TODO
});

myApp.controller('AboutController', function () {
  // TODO
});