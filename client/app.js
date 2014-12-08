angular.module('app', [
  'ui.router',
  'StudentController',
  'studentFactory',
  'TeacherController',
  'teacherFactory',
  'AuthController', 
  'authFactory'
])


.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  
  $stateProvider
  
  .state('auth', {
    url: '/login',
    templateUrl: 'App/Auth/login.html',
    controller: 'AuthController'
  })

  .state('student', {
    url: '/',
    templateUrl: 'App/Student/student.html',
    controller: 'StudentController'
  })
  
  .state('teacher', {
    url: '/teacher',
    templateUrl: 'App/Teacher/teacher.html',
    controller: 'TeacherController'
  });
  
  $urlRouterProvider.otherwise('/');

})