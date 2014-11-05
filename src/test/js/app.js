// модуль левой таблицы - скважины
angular.module('main-app', [
  'ngRoute',
  'ui.bootstrap',
  'ngCollapseChekbox'
])
  .controller('mainCtrl', ['$scope',
    function ($scope) {
      var model = $scope.model = {
        filter: {
          sampleList: [
            {id: 1, name:'Item 1', checked: false},
            {id: 2, name:'Item 2', checked: true},
            {id: 3, name:'Item 3', checked: false},
            {id: 4, name:'Item 4', checked: false},
            {id: 5, name:'Item 5', checked: false},
            {id: 6, name:'Item 6', checked: false},
            {id: 7, name:'Item 7', checked: false}
          ]
        },
        output: {
          params : {}
        }
      };
    }
  ]);