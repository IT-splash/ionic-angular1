angular.module("main.component.components", [])
    .controller("componentsCtrl", ["$scope", "$location", "$ionicModal", "$ionicActionSheet",
        "$ionicLoading", "$timeout", "$ionicPopup", "$ionicPopover",
        function($scope, $location, $ionicModal, $ionicActionSheet, $ionicLoading, $timeout, $ionicPopup, $ionicPopover){
            $scope.componentsTitle = $location.hash();
            $scope.watchCode = [];
            $scope.inputInfo = false;
            $scope.User = {name: "", email: "", password: ""};

            //创建模态框对象
            $ionicModal.fromTemplateUrl("ionicModalShow.html", {
                scope: $scope,
                animation: "slide-in-up"
            }).then(function(modal){
                $scope.modal = modal;
            });

            $scope.showIonicModal = function(){
                $scope.modal.show();
            };
            $scope.hideIonicModal = function(){
                $scope.modal.hide();
                $scope.User = {name: "", email: "", password: ""};
            };
            //点击确定创建用户信息，并显示
            $scope.createUser = function(){
                if( !angular.equals($scope.User.name, "") ) {
                    $scope.inputInfo = true
                }
                $scope.modal.hide();
            };
            $scope.closeInputInfo = function(){
                $scope.inputInfo = false;
                $scope.User = {name: "", email: "", password: ""};
            };


            var ionicLoadingShowInfo = function(value){
                $ionicLoading.show({
                    template: value
                });
                $timeout(function(){
                   $ionicLoading.hide();
                }, 1000)
            };
            //button组
            $scope.buttonItems = {Html5: true, Java: true, Php: true, C: false};
            var getItems = function(){
                var items = [];
                angular.forEach($scope.buttonItems, function(val, key){
                    if(val === true){
                        this.push({text: key});
                    }
                }, items);
                return items;
            };

            $scope.showIonicActionSheet = function(){
                var actionSheet = $ionicActionSheet.show({
                    titleText: "$ionicActionSheet",
                    buttons: getItems(),
                    cancelText: "取消",
                    buttonClicked: function(index){
                        ionicLoadingShowInfo( this.buttons[index].text);
                        actionSheet();
                        $scope.buttonSelect = true;
                    },
                    cancel: function(){
                        actionSheet();
                    }
                })
            };

            $scope.showPopupConfirm = function(){
                $ionicPopup.confirm({
                    title: "确认框",
                    template: "<p style='text-align: center;'><strong>确定要学Ionic框架吗</strong></p>",
                    okText: "必须的",
                    cancelText: "算了吧"
                }).then(function(result){
                    if(result){
                        ionicLoadingShowInfo("加油哦 Ionic ！");
                    }else{
                        ionicLoadingShowInfo("学点别的也好！")
                    }
                })
            };
            $scope.showPopupPrompt = function(){
                $ionicPopup.prompt({
                    title: "提示框",
                    template: "<p style='text-align: center;'><strong>学习当然辛苦 要是喜欢了 就不会啦 么么哒</strong></p>"
                })
            };
            $scope.showPopupWarn = function(){
                $ionicPopup.alert({
                    title: "警告",
                    template: "<p style='text-align: center;'><strong>越是憧憬 越要风雨兼程</strong></p>",
                    okText: "好"
                })
            };
            //创建ionicPopover 对象
            $ionicPopover.fromTemplateUrl("ionicPopoverShow.html",{
                scope: $scope
            }).then(function(popover){
                $scope.popover = popover;
            });
            $scope.showIonicPopover = function($event){
                $scope.popover.show($event);
            }
    }]);