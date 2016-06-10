import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes';

import homeController from './home.controller';
import userInput from './directives/user_input';

export default angular.module('app.home',[uirouter])
    .config(routing)
    .controller('homeController',homeController)
    .directive('userInput', userInput)
    .name; 