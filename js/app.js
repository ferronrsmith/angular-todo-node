/*global angular  */

/**
 * The main TodoMVC app module.
 *
 * @type {angular.Module}
 */
var todomvc = angular.module('todomvc', ['todoStorage']);

todomvc.run(function ($rootScope) {
    "use strict";
    $rootScope.serverUrl = 'http://localhost\\:3000';
    $rootScope.collectionName = 'todo';

});
