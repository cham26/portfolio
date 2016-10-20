'use strict';

import angular from 'angular';

export class CalculatorController {
  constructor() {}

}

export default angular.module('directives.calculator', [])
  .directive('calculator', function() {
    return {
      template: require('./calculator.html'),
      bindToController: true,
      restrict: 'E',
      controller: CalculatorController,
      controllerAs: '$ctrl',
      scope: {
      }
    };
  })
  .name;

