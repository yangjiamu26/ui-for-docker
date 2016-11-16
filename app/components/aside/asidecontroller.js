angular.module('aside', [])
    .controller('AsideController', ['$scope', 'localStorageService',
                           function ($scope,   localStorageService) {
        $scope.template = 'app/components/aside/aside.html';        
        $scope.current_menu = localStorageService.get('current_menu') || 'home';

        $scope.active=function(name){
        	$scope.current_menu=name;
        	localStorageService.set('current_menu', name);
        }

    }]);
