import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes';

import homeController from './home.controller';
import userInput from './directives/user_input';
import userToDo from './directives/user_toDo';
import allToDo from './directives/all_toDo';

export default angular.module('app.home',[uirouter])
    .config(routing)
    .controller('homeController',homeController)
    .directive('userInput', userInput)
    .directive('userToDo', userToDo)
    .directive('allToDo', allToDo)
    .name; 