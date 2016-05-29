'use strict';

angular.module('ngApp.ngService', [])

.factory('ngApp.ngService',['$http',function($http){
    return {
        getList: $http.get('http://dev.local/angular-seed/api/list')
                    .success(function(data){
                        return
                    })
                    .error(function(err){
                        console.log(err);
                    })
    };
}]);