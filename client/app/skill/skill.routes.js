'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('skill', {
    url: '/skill',
    template: '<skill></skill>'
  });
}
