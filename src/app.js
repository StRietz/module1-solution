(function () {
    'use strict';

    angular.module('LunchCheckApp', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject=['$scope'];
    function LunchCheckController ($scope)
    {
     $scope.name="";
     $scope.message="";

     $scope.buttonclick= function (){
         var arrayOfString = $scope.name.trim().split(',');
         if (arrayOfString<2)
         {
           return $scope.message="Please enter data first"
         }else if(arrayOfString.length<4)
         {
             return $scope.message="Enjoy!"
         }
         return $scope.message="Too much!"
     }
    }



})();