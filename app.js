(function () {
  angular.module('myApp')
    .config(routerConfig)
            function routerConfig($stateProvider,$urlRouterProvider){
                $stateProvider
                .state('watersupply',{
                    url:'/',
                    templateUrl:'watersupply.html'
                })
                .state('results',{
                    url:'/contaminants',
                    templateUrl:'results.html'
                })
                .state('treatment',{
                    url:'/treatment',
                    templateUrl:'treatment.html'
                })
                $urlRouterProvider.otherwise('/')
            }
}())
