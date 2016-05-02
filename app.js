(function () {
  angular.module('myRouterApp', ['ui.router','controllers'])
    .config(routerConfig)

    function routerConfig($stateProvider,$urlRouterProvider){

      $stateProvider
        .state('home',{
          url: '/',
          templateUrl: 'home.html',
          controller: 'firstController as myfirstCtrl'
        })
        .state('login',{
          url: '/login',
          templateUrl: 'results.html'
        })

        $urlRouterProvider.otherwise('/')

    }

}())