$('.big li').on('click',function () {
    $('.zz').hide();
    $('.zz').eq($(this).index()).show();
    $('.pages').hide();
    if($(this).index()==0){
        $('.sml1 li a').css({
            'background':'#fff',
            'color':'#fc8395'
        });
    }else{
        $('.sml2 li a').css({
            'background':'#fff',
            'color':'#5bbffc'
        });
    }
})

$('.sml1 li a').on('click',function () {
    $('.sml1 li a').css({
        'background':'#fff',
        'color':'#fc8395'
    });
    $(this).css({
        'background':'#fc8395',
        'color':'#fff'
    });
    $('.pages').show();
})

$('.sml2 li a').on('click',function () {
    $('.sml2 li a').css({
        'background':'#fff',
        'color':'#5bbffc'
    });
    $(this).css({
        'background':'#5bbffc',
        'color':'#fff'
    });
    $('.pages').show();
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
            templateUrl: 'views/Subpage/pages/1.ejs',
            controller: 'Home1Controller'
        }).
        when('/home2', {
            templateUrl: 'views/Subpage/pages/2.ejs',
            controller: 'Home2Controller'
        }).
        when('/home3', {
            templateUrl: 'views/Subpage/pages/3.ejs',
            controller: 'Home3Controller'
        }).
        when('/home4', {
            templateUrl: 'views/Subpage/pages/4.ejs',
            controller: 'Home4Controller'
        }).
        when('/home5', {
            templateUrl: 'views/Subpage/pages/5.ejs',
            controller: 'Home5Controller'
        }).
        when('/home6', {
            templateUrl: 'views/Subpage/pages/6.ejs',
            controller: 'Home6Controller'
        });
    });