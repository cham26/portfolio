'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('projects', {
    url: '/projects',
    template: require('./projects/projects.html'),
    controller: 'ProjectsController',
    controllerAs: 'projects',
    authenticate: 'projects'
  });
}
