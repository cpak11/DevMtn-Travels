angular
  .module("devmtnTravel")
  .controller("bookedCtrl", function($scope, mainSrv, $stateParams) {
    $scope.packages = mainSrv.packageInfo;
    for (var i = 0; i < $scope.packages.length; i++) {
      if ($scope.packages[i].id === Number($stateParams.id)) {
        $scope.curr = $scope.packages[i];
      }
    }
  });
