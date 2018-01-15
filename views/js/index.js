$('.big li').on('click',function () {
    $('.zz').hide();
    $('.zz').eq($(this).index()).show();
})

angular.module('ngRouteExample', ['ngRoute'])
    .controller('Home1Controller', function ($scope, $route) { $scope.$route = $route;})
    .controller('Home2Controller', function ($scope, $route) { $scope.$route = $route;})
    .controller('Home3Controller', function ($scope, $route) { $scope.$route = $route;})
    .controller('Home4Controller', function ($scope, $route) { $scope.$route = $route;})
    .controller('Home5Controller', function ($scope, $route) { $scope.$route = $route;})
    .controller('Home6Controller', function ($scope, $route) { $scope.$route = $route;})
    .config(function ($routeProvider) {
        $routeProvider.
        when('/home1', {
            templateUrl: '1.ejs',
            controller: 'Home1Controller'
        }).
        when('/home2', {
            templateUrl: '2.ejs',
            controller: 'Home2Controller'
        }).
        when('/home3', {
            templateUrl: '3.ejs',
            controller: 'Home3Controller'
        }).
        when('/home4', {
            templateUrl: '4.ejs',
            controller: 'Home4Controller'
        }).
        when('/home5', {
            templateUrl: '5.ejs',
            controller: 'Home5Controller'
        }).
        when('/home6', {
            templateUrl: '6.ejs',
            controller: 'Home6Controller'
        });
    });