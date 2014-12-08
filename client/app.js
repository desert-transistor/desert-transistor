angular.module('app', [
  'ui.router'
]).config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  $stateProvider.state('student', {
    url: '/',
    templateUrl: 'App/Student/student.html',
    controller: 'App/Student/studentCtrl.js'
  }).state('teacher', {
    url: '/teacher',
    templateUrl: 'App/Teacher/teacher.html',
    controller: 'App/Teacher/teacherCtrl.js'
  });
  $urlRouterProvider.otherwise('/');
})