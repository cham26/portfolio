'use strict';

import angular from 'angular';

export class BioController {
  constructor() {}

};

export default angular.module('directives.bio', [])
  .directive('bio', function() {
    return {
      template: require('./myBio.html'),
      restrict: 'E',
      controller: BioController,
      controllerAs: '$ctrl',
      scope: {}
    };
  })
  .name;
