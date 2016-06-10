export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/:user',
      template: require('./home.html'),
      controller: 'HomeController',
      controllerAs: 'homeController'
    })
} 