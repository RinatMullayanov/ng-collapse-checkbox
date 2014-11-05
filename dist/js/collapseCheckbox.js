'use strict';
angular.module('ngCollapseChekbox', []);

angular.module('ngCollapseChekbox')
  .directive('ngCollapseChekbox', function () {
    return {
      restrict: 'E',
      scope: {
        isCollapsed: '@',
        collapseHeader: '@',
        input: '=',
        output: '='
      },
      templateUrl: 'template/collapseCheckbox.html',
      controller: [
        '$scope', '$attrs', function ($scope) {
          var statusList = [], initList = [];

          if (typeof $scope.isCollapsed === 'boolean') {
            $scope.isStateCollapsed = $scope.isCollapsed;
          } else if (typeof $scope.isCollapsed === 'string') {
            $scope.isStateCollapsed = $scope.isCollapsed === 'true';
          } else {
            $scope.isStateCollapsed = false;
          }

          function checker() {
            for (var i = 0, length = statusList.length; i < length; i++) {
              for (var j = 0; j < initList.length; j++) {
                if (statusList[i].id.toString() === initList[j]) {
                  statusList[i].checked = true;
                  continue;
                }
              }
            }
          }

          $scope.$watch('input', function (newParams, oldParams) {
            if (!angular.isArray(newParams)) {
              return;
            }

            statusList = newParams;
            if (newParams.length !== 0 && initList.length !== 0) {
              checker();
              initList = [];
              return;
            }

            var statuses = [];
            for (var i = 0, length = statusList.length; i < length; i++) {
              if (statusList[i].checked) {
                statuses.push(statusList[i].id.toString());
              }
            }

            if (statuses.length === 0 &&
              (newParams === oldParams ||
              (angular.isUndefined(oldParams)) ||
              oldParams === null)) {
              return;
            }

            $scope.output = statuses;
          }, true);

          var output = $scope.$watch('output', function (newParams) {
            if (angular.isDefined(newParams)) {
              output();
              initList = newParams;
              if (statusList.length !== 0) {
                checker();
              }
              return;
            }
          }, true);
        }
      ]
    };
  });