var app = angular.module('apk',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'./views/home.html'
    })
    .when('/contact',{
      templateUrl:'./views/contact.html'
    })
    .when('/about',{
        templateUrl:'./views/about.html'
    })
    .when('/profile',{
      templateUrl:'./views/profile.html'
    })
    .when('/profile/mk',{
      templateUrl:'./views/profile/mk.html'
    })
    .when('/profile/raja',{
      templateUrl:'./views/profile/raja.html'
    })
    .when('/profile/kaja',{
      templateUrl:'./views/profile/kaja.html'
    })
    // .when('/fonts',{
    //   templateUrl:'./themify-icons.css'
    // })
    .when('/profile/banoj',{
      templateUrl:'./views/profile/banoj.html'
    })
    .otherwise({
      templateUrl:'./views/404.html'
    });
}]);

app.directive('navBar',function(){
    return{
        restrict:'A',
        templateUrl:'./views/navigation.html'
    };
});
app.directive('footEr',function(){
    return{
        restrict:'A',
        templateUrl:'./views/footerBar.html'
    };
});
