'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('skill', {
    url: '/skill',
    template: require('./skill.html')
  });
}
