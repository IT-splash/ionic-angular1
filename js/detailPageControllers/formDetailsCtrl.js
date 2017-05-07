angular.module("main.form.formDetails", [])
    .controller("textCtrl", ["$scope", function($scope){
        $scope.watchCode = [];
    }])
    .controller("formCommonCtrl", ["$scope", "$location", "$interval", function($scope, $location, $interval){
        var titleSet ={
            "checkbox": "复选框", "radio": "单选框",
            "toggle": "开关", "range": "进度条",
            "select": "下拉选择", "spinner": "加载指示器"
        };
        $scope.commonTitle = titleSet[$location.hash()];
        $scope.watchCode = [];
        $scope.checkboxItems = [
            {name: "Html5", value: false},
            {name: "C/C++", value: false},
            {name: "Java", value: false},
            {name: "Php", value: false}
        ];

        $scope.radioResult = "Win7";
        $scope.toggleResult = false;

        $scope.rangeValue1 = 30;
        $scope.rangeValue2 = 60;
        $scope.rangeChange = function(){
            $interval(function(){
                ++ $scope.rangeValue1;
                ++ $scope.rangeValue2;
                if($scope.rangeValue1 > 100){
                    $scope.rangeValue1 = 0;
                }
                if($scope.rangeValue2 > 100){
                    $scope.rangeValue2 = 0;
                }
            }, 100)
        }

    }]);