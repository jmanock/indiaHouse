(function() {
  'use strict';

  angular
    .module('indiaHouse')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
