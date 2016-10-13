'use strict';

import angular from 'angular';

export class SkillsController {
  constructor() {}

}

export default angular.module('directives.skills', [])
  .directive('skills', function() {
    return {
      template: require('./mySkills.html'),
      bindToController: true,
      restrict: 'E',
      controller: SkillsController,
      controllerAs: '$ctrl',
      scope: {
        skillsIcon: '='
      }
    };
  })
  .name;


