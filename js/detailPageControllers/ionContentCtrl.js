angular.module("main.routine.ionContent", [])
    .controller("ionContentCtrl", ["$scope", "$location", "$timeout", function($scope, $location, $timeout){
        //入口页面标题
        $scope.entranceTitle = "ion-content";
        //目录项
        $scope.items = [
            {name: "1）基本内容区", path: "ionContentBasic"},
            {name: "2）地图显示", path: "ionContentMap"},
            {name: "3）下拉刷新列表内容区", path: "ionRefresher"},
            {name: "4）上拉加载列表内容区", path: "ionInfiniteScroll"},
            {name: "▶  综述", path: "ionContentSummarize"}
        ];
        //页面跳转
        $scope.goToDetail = function(path){
            $location.path("/main/" + path);
        };
        //源码查看控制
        $scope.watchCode = false;
    }])
    .controller("refreshCtrl", ["$scope", "$ionicLoading", "$timeout", function($scope, $ionicLoading, $timeout){
        //下拉数据
        $scope.refreshItems = [];
        var refreshFlag = 1;
        //下拉刷新
        $scope.startRefresh = function(){
            for(var i=0; i<10; ++i, ++refreshFlag){
                $scope.refreshItems.unshift(["item", refreshFlag].join(" "));
            }
            $scope.$broadcast("scroll.refreshComplete");
        };
        //页面打开是执行一次数据刷新
        $scope.startRefresh();
        $scope.watchCode = false;
        var Tips = function(){
            $ionicLoading.show({
                template: "试试下拉..."
            });
        };
        Tips();
        $timeout(function(){
            $ionicLoading.hide();
        },1000);

    }])
    .controller("infiniteScrollCtrl", ["$scope", "$ionicLoading", "$timeout", function($scope, $ionicLoading, $timeout){
        //下拉数据
        $scope.infiniteItems = [];
        var infiniteFlag = 1;
        //上拉加载数据
        $scope.loadMore = function(){
            $timeout(function(){
                for(var i=0; i<5; ++i, ++infiniteFlag){
                    $scope.infiniteItems.push(["item", infiniteFlag].join(" "));
                }
                $scope.$broadcast("scroll.infiniteScrollComplete");
            }, 1000);
        };
        $scope.watchCode = false;
        var Tips = function(){
            $ionicLoading.show({
                template: "试试上拉..."
            });
        };
        Tips();
        $timeout(function(){
            $ionicLoading.hide();
        },1000);

    }])
    .controller("mapShowCtrl", ["$scope", "$ionicLoading", "$timeout", function($scope, $ionicLoading, $timeout){
        $scope.watchCode = false;

        $scope.showMap =function(){
            // 百度地图API功能
            var map = new BMap.Map("mapShow");    // 创建Map实例
            map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
            map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
            map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        };
        //提示需点击按钮
        var Tips = function(){
            $ionicLoading.show({
                template: "联网状态，等待地图显示..."
            });
        };
        Tips();
        $timeout(function(){
            $ionicLoading.hide();
            $scope.showMap();
        },3000);
    }])
    .controller("ionScrollCtrl", ["$scope", "$ionicLoading", "$timeout",
        function($scope, $ionicLoading, $timeout){
            var Tips = function(){
                $ionicLoading.show({
                    template: "滑动查看全图"
                });
            };
            Tips();
            $timeout(function(){
                $ionicLoading.hide();
            },1000);
    }]);