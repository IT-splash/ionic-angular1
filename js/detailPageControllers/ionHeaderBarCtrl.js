angular.module("main.routine.ionHeaderBar", [])
    .controller("ionHeaderBarCtrl", ["$scope", "$location", "$http", "$timeout",
        function($scope, $location, $http, $timeout){
            //入口页面标题
            $scope.entranceTitle = "ion-header-bar";
            //目录项
            $scope.items = [
                {name: "1）标题式", path: "ionHeaderBarOnlyTitle"},
                {name: "2）标题 图标按钮式", path: "ionHeaderBarTitleButton"},
                {name: "3）图标 输入框按钮式", path: "ionHeaderBarSearchInput"},
                {name: "▶ 综述", path: "ionHeaderBarSummarize"}
            ];

            //页面跳转
            $scope.goToDetail = function(path){
                $location.path("/main/" + path);
            };
            $scope.iconSelected = "ion-navicon";
            $scope.buttonPosition = "pull-left";
            //用户选择，用于控制标题位置显示
            $scope.choice = "title-center";
            $scope.iconPosition = "left";

            //源码查看控制
            $scope.watchCode = false;

            $scope.baiduData = [];
            $scope.dataName = "";
            $scope.goSearchBaiDuDelay = function(something){
                if(something != ""){
                    $timeout(function(){
                        $http({
                            method : 'JSONP',
                            url : 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+something+'&cb=JSON_CALLBACK'
                        }).success(function(data){
                            $scope.baiduData = data.s;
                        });
                    }, 1500);
                } else{
                    $scope.baiduData = [];
                }
            };
            $scope.goSearchBaiDu = function(something){
                if(something != ""){
                    $http({
                        method : 'JSONP',
                        url : 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+something+'&cb=JSON_CALLBACK'
                    }).success(function(data){
                        $scope.baiduData = data.s;
                    });
                } else{
                    $scope.baiduData = [];
                }
            }

    }]);