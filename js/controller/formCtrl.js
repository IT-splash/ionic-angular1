angular.module("main.formCtrl", [])
    .controller("formCtrl", ["$scope", "$location", "$anchorScroll", function($scope, $location, $anchorScroll){
        //模块标题
        $scope.moduleTitle  = "表单";
        //目录项
        $scope.items = [
            {name: "文本输入框", detail: "input", path: "textPage"},
            {name: "按钮", detail: "button", path: "buttonPage"},
            {name: "复选框", detail: "ion-checkbox", path: "formCommon", hash: "checkbox"},
            {name: "单选框", detail: "ion-radio", path: "formCommon", hash: "radio"},
            {name: "开关", detail: "ion-toggle", path: "formCommon", hash: "toggle"},
            {name: "进度条", detail: "range", path: "formCommon", hash: "range"},
            {name: "下拉选项", detail: "select", path: "formCommon", hash: "select"},
            {name: "等待指示器", detail: "ion-spinner", path: "formCommon", hash: "spinner"}
        ];
        //页面跳转
        $scope.goToDetail = function(path, hash){
            if(angular.equals(hash, "")){
                $location.path("/main/" + path);
            }else{
                $location.path("/main/" + path).hash(hash);
            }
        }
    }]);