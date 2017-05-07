var app = angular.module("IonicDemoSet", ["ionic", "oc.lazyLoad"]);
app.config(["$stateProvider", "$urlRouterProvider", "$ionicConfigProvider",
    function($stateProvider, $urlRouterProvider, $ionicConfigProvider){
        $ionicConfigProvider.platform.android.tabs.style("standard");
        $ionicConfigProvider.platform.android.tabs.style("backgroundColor", "D4D4D4");
        $ionicConfigProvider.platform.android.tabs.position("bottom");
        $ionicConfigProvider.platform.android.views.transition("ios");
    $stateProvider
        .state("main", {
            url: "/main",
            abstract: true,
            templateUrl: "./templates/main.html"
        })
        //常规模块入口
        .state("main.routine", {
            url: "/routine",
            views: {
                "routineView": {
                    templateUrl: "./templates/publicModuleEntrance.html",
                    controller: "routineCtrl"
                }
            },
            resolve: ["$ocLazyLoad", function($ocLazyLoad){
                return $ocLazyLoad.load({
                    name: "main.routineCtrl",
                    files: ["./js/controller/routineCtrl.js"]
                })
            }]
        })
        //表单模块入口
        .state("main.form", {
            url: "/form",
            views: {
                "formView": {
                    templateUrl: "./templates/hashEntrance.html",
                    controller: "formCtrl"
                }
            },
            resolve: ["$ocLazyLoad", function($ocLazyLoad){
                return $ocLazyLoad.load({
                    name: "main.formCtrl",
                    files: ["./js/controller/formCtrl.js"]
                })
            }]
        })
        //列表模块入口
        .state("main.list", {
            url: "/list",
            views: {
                "listView": {
                    templateUrl: "./templates/publicModuleEntrance.html",
                    controller: "listCtrl"
                }
            },
            resolve: ["$ocLazyLoad", function($ocLazyLoad){
                return $ocLazyLoad.load({
                    name: "main.listCtrl",
                    files: ["./js/controller/listCtrl.js"]
                })
            }]
        })
        //切换模块入口
        .state("main.switch", {
            url: "/switch",
            views: {
                "switchView": {
                    templateUrl: "./templates/publicModuleEntrance.html",
                    controller: "switchCtrl"
                }
            },
            resolve: ["$ocLazyLoad", function($ocLazyLoad){
                return $ocLazyLoad.load({
                    name: "main.switchCtrl",
                    files: ["./js/controller/switchCtrl.js"]
                })
            }]
        })
        //组件模块入口
        .state("main.component", {
            url: "/component",
            views: {
                "componentView": {
                    templateUrl: "./templates/publicModuleEntrance.html",
                    controller: "componentCtrl"
                }
            },
            resolve: ["$ocLazyLoad", function($ocLazyLoad){
                return $ocLazyLoad.load({
                    name: "main.componentCtrl",
                    files: ["./js/controller/componentCtrl.js"]
                })
            }]
        });

    $stateProvider
        .state("main.ionHeaderBar", {
            url: "/ionHeaderBar",
            views: {
                "routineView": {
                    templateUrl: "./detailPages/publicEntrance.html",
                    controller: "ionHeaderBarCtrl"
                }
            },
            resolve: ["$ocLazyLoad", function($ocLazyLoad){
                return $ocLazyLoad.load({
                    name: "main.routine.ionHeaderBar",
                    files: ["./js/detailPageControllers/ionHeaderBarCtrl.js"]
                })
            }]
        })
        .state("main.ionHeaderBarOnlyTitle", {
            url: "/ionHeaderBarOnlyTitle",
            views: {
                routineView: {
                    templateUrl: "./detailPages/ionHeaderBar/ionHeaderBarOnlyTitle.html",
                    controller: "ionHeaderBarCtrl"
                }
            },
            resolve: ["$ocLazyLoad", function($ocLazyLoad){
                return $ocLazyLoad.load({
                    name: "main.routine.ionHeaderBar",
                    files: ["./js/detailPageControllers/ionHeaderBarCtrl.js"]
                })
            }]
        })
        .state("main.ionHeaderBarTitleButton", {
            url: "/ionHeaderBarTitleButton",
            views: {
                routineView: {
                    templateUrl: "./detailPages/ionHeaderBar/ionHeaderBarTitleButton.html",
                    controller: "ionHeaderBarCtrl"
                }
            },
            resolve: ["$ocLazyLoad", function($ocLazyLoad){
                return $ocLazyLoad.load({
                    name: "main.routine.ionHeaderBar",
                    files: ["./js/detailPageControllers/ionHeaderBarCtrl.js"]
                })
            }]
        })
        .state("main.ionHeaderBarSearchInput", {
            url: "/ionHeaderBarSearchInput",
            views: {
                routineView: {
                    templateUrl: "./detailPages/ionHeaderBar/ionHeaderBarSearchInput.html",
                    controller: "ionHeaderBarCtrl"
                }
            },
            resolve: ["$ocLazyLoad", function($ocLazyLoad){
                return $ocLazyLoad.load({
                    name: "main.routine.ionHeaderBar",
                    files: ["./js/detailPageControllers/ionHeaderBarCtrl.js"]
                })
            }]
        })
        .state("main.ionHeaderBarSummarize", {
            url: "/ionHeaderBarSummarize",
            views: {
                routineView: {
                    templateUrl: "./detailPages/ionHeaderBar/ionHeaderBarSummarize.html"
                }
            }
        });

    $stateProvider
        .state("main.ionFooterBar", {
            url: "/ionFooterBar",
            views: {
                "routineView": {
                    templateUrl: "./detailPages/publicEntrance.html",
                    controller: "ionFooterBarCtrl"
                }
            },
            resolve: ["$ocLazyLoad", function($ocLazyLoad){
                return $ocLazyLoad.load({
                    name: "main.routine.ionFooterBar",
                    files: ["./js/detailPageControllers/ionFooterBarCtrl.js"]
                })
            }]
        })
        .state("main.ionFooterBarOnlyTitle", {
            url: "/ionFooterBarOnlyTitle",
            views: {
                routineView: {
                    templateUrl: "./detailPages/ionFooterBar/ionFooterBarOnlyTitle.html",
                    controller: "ionFooterBarDetailCtrl"
                }
            },
            resolve: ["$ocLazyLoad", function($ocLazyLoad){
                return $ocLazyLoad.load({
                    name: "main.routine.ionFooterBar",
                    files: ["./js/detailPageControllers/ionFooterBarCtrl.js"]
                })
            }]
        })
        .state("main.ionFooterBarTitleButton", {
            url: "/ionFooterBarTitleButton",
            views: {
                routineView: {
                    templateUrl: "./detailPages/ionFooterBar/ionFooterBarTitleButton.html",
                    controller: "ionFooterBarDetailCtrl"
                }
            },
            resolve: ["$ocLazyLoad", function($ocLazyLoad){
                return $ocLazyLoad.load({
                    name: "main.routine.ionFooterBar",
                    files: ["./js/detailPageControllers/ionFooterBarCtrl.js"]
                })
            }]
        })
        .state("main.ionFooterBarButtonBar", {
            url: "/ionFooterBarButtonBar",
            views: {
                routineView: {
                    templateUrl: "./detailPages/ionFooterBar/ionFooterBarButtonBar.html",
                    controller: "ionFooterBarDetailCtrl"
                }
            },
            resolve: ["$ocLazyLoad", function($ocLazyLoad){
                return $ocLazyLoad.load({
                    name: "main.routine.ionFooterBar",
                    files: ["./js/detailPageControllers/ionFooterBarCtrl.js"]
                })
            }]
        })
        .state("main.ionFooterBarSummarize", {
            url: "/ionFooterBarSummarize",
            views: {
                routineView: {
                    templateUrl: "./detailPages/ionFooterBar/ionFooterBarSummarize.html"
                }
            }
        });
    $stateProvider
        .state("main.ionContent", {
            url: "/ionContent",
            views: {
                "routineView": {
                    templateUrl: "./detailPages/publicEntrance.html",
                    controller: "ionContentCtrl"
                }
            },
            resolve: ["$ocLazyLoad", function($ocLazyLoad){
                return $ocLazyLoad.load({
                    name: "main.routine.ionContent",
                    files: ["./js/detailPageControllers/ionContentCtrl.js"]
                })
            }]
        })
        .state("main.ionContentBasic", {
            url: "/ionContentBasic",
            views: {
                routineView: {
                    templateUrl: "./detailPages/ionContent/ionContentBasic.html",
                    controller: "ionContentCtrl"
                }
            },
            resolve: ["$ocLazyLoad", function($ocLazyLoad){
                return $ocLazyLoad.load({
                    name: "main.routine.ionContent",
                    files: ["./js/detailPageControllers/ionContentCtrl.js"]
                })
            }]
        })
        .state("main.ionContentMap", {
            url: "/ionContentMap",
            views: {
                routineView: {
                    templateUrl: "./detailPages/ionContent/ionContentMap.html",
                    controller: "mapShowCtrl"
                }
            },
            resolve: ["$ocLazyLoad", function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: "main.routine.ionContent",
                    files: ["./js/detailPageControllers/ionContentCtrl.js"]
                })
            }]
        })
        .state("main.ionRefresher", {
            url: "/ionRefresher",
            views: {
                routineView: {
                    templateUrl: "./detailPages/ionContent/ionRefresher.html",
                    controller: "refreshCtrl"
                }
            },
            resolve: ["$ocLazyLoad", function($ocLazyLoad){
                return $ocLazyLoad.load({
                    name: "main.routine.ionContent",
                    files: ["./js/detailPageControllers/ionContentCtrl.js"]
                })
            }]
        })
        .state("main.ionInfiniteScroll", {
            url: "/ionInfiniteScroll",
            views: {
                routineView: {
                    templateUrl: "./detailPages/ionContent/ionInfiniteScroll.html",
                    controller: "infiniteScrollCtrl"
                }
            },
            resolve: ["$ocLazyLoad", function($ocLazyLoad){
                return $ocLazyLoad.load({
                    name: "main.routine.ionContent",
                    files: ["./js/detailPageControllers/ionContentCtrl.js"]
                })
            }]
        })
        .state("main.ionContentSummarize", {
            url: "/ionContentSummarize",
            views: {
                routineView: {
                    templateUrl: "./detailPages/ionContent/ionContentSummarize.html"
                }
            }
        });

    $stateProvider
        .state("main.ionScroll", {
            url: "/ionScroll",
            views: {
                routineView: {
                    templateUrl: "./detailPages/ionScroll/ionScroll.html",
                    controller: "ionScrollCtrl"
                }
            },
            resolve: ["$ocLazyLoad", function($ocLazyLoad){
                return $ocLazyLoad.load({
                    name: "main.routine.ionContent",
                    files: ["./js/detailPageControllers/ionContentCtrl.js"]
                })
            }]
        });

    //grid布局
    $stateProvider
        .state("main.grid", {
            url: "/grid",
            views: {
                "routineView": {
                    templateUrl: "./detailPages/publicEntrance.html",
                    controller: "gridCtrl"
                }
            },
            resolve: ["$ocLazyLoad", function($ocLazyLoad){
                return $ocLazyLoad.load({
                    name: "main.routine.grid",
                    files: ["./js/detailPageControllers/gridCtrl.js"]
                })
            }]
        })
        .state("main.gridStyle", {
            url: "/gridStyle",
            views: {
                "routineView": {
                    templateUrl: "./detailPages/grid/gridStyle.html",
                    controller: "gridCtrl"
                }
            },
            resolve: ["$ocLazyLoad", function($ocLazyLoad){
                return $ocLazyLoad.load({
                    name: "main.routine.grid",
                    files: ["./js/detailPageControllers/gridCtrl.js"]
                })
            }]
        })
        .state("main.gridSummarize", {
            url: "/gridSummarize",
            views: {
                "routineView": {
                    templateUrl: "./detailPages/grid/gridSummarize.html",
                    controller: "gridCtrl"
                }
            },
            resolve: ["$ocLazyLoad", function($ocLazyLoad){
                return $ocLazyLoad.load({
                    name: "main.routine.grid",
                    files: ["./js/detailPageControllers/gridCtrl.js"]
                })
            }]
        });
    //手势
    $stateProvider
        .state("main.gesture", {
            url: "/gesture",
            views: {
                "routineView": {
                    templateUrl: "./detailPages/gesture/gesture.html",
                    controller: "gestureCtrl"
                }
            },
            resolve: ["$ocLazyLoad", function($ocLazyLoad){
                return $ocLazyLoad.load({
                    name: "main.routine.gesture",
                    files :["./js/directives/gestureDirectives.js"]
                })
            }]
        });

        //表单模块
        $stateProvider
            .state("main.textPage", {
                url: "/textPage",
                views: {
                    formView: {
                        templateUrl: "./detailPages/form/textPage.html",
                        controller: "textCtrl"
                    }
                },
                resolve: ["$ocLazyLoad", function($ocLazyLoad){
                    return $ocLazyLoad.load({
                        name: "main.form.formDetails",
                        files: ["./js/detailPageControllers/formDetailsCtrl.js"]
                    })
                }]
            })
            .state("main.buttonPage", {
                url: "/buttonPage",
                views: {
                    formView: {
                        templateUrl: "./detailPages/form/buttonPage.html"
                    }
                }
            })
            .state("main.formCommon", {
                url: "/formCommon",
                views: {
                    formView: {
                        templateUrl: "./detailPages/form/formCommonPage.html",
                        controller: "formCommonCtrl"
                    }
                },
                resolve: ["$ocLazyLoad", function($ocLazyLoad){
                    return $ocLazyLoad.load({
                        name: "main.form.formDetails",
                        files: ["./js/detailPageControllers/formDetailsCtrl.js"]
                    })
                }]
            });

        //列表模块
        $stateProvider
            .state("main.routineList", {
                url: "/routineList",
                views: {
                    "listView": {
                        templateUrl: "./detailPages/list/routineList.html",
                        controller: "routineListCtrl"
                    }
                },
                resolve: ["$ocLazyLoad", function($ocLazyLoad){
                    return $ocLazyLoad.load({
                        name: "main.list.listDetails",
                        files: ["./js/detailPageControllers/listDetailsCtrl.js"]
                    })
                }]
            })
            .state("main.colorfulList", {
                url: "/colorfulList",
                views: {
                    "listView": {
                        templateUrl: "./detailPages/list/colorfulList.html",
                        controller: "colorfulListCtrl"
                    }
                },
                resolve: ["$ocLazyLoad", function($ocLazyLoad){
                    return $ocLazyLoad.load({
                        name: "main.list.listDetails",
                        files: ["./js/detailPageControllers/listDetailsCtrl.js"]
                    })
                }]
            });

        //页面切换模块
        $stateProvider
            .state("main.ionNavView", {
                url: "/ionNavView",
                views: {
                    "switchView": {
                        templateUrl: "./detailPages/switch/ionNavView.html"
                    }
                }
            })
            .state("main.ionTabs", {
                url: "/ionTabs",
                views: {
                    "switchView": {
                        templateUrl: "./detailPages/switch/ionTabs.html"
                    }
                }
            })
            .state("main.ionSideMenus", {
                url: "/ionSideMenus",
                views: {
                    "switchView": {
                        templateUrl: "./detailPages/switch/ionSideMenus.html"
                    }
                }
            })
            .state("main.ionSlideBox", {
                url: "/ionSlideBox",
                views: {
                    "switchView": {
                        templateUrl: "./detailPages/switch/ionSlideBox.html",
                        controller: "ionSlideBoxCtrl"
                    }
                },
                resolve: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: "main.switch.switchDetails",
                        files: ["./js/detailPageControllers/switchDetailsCtrl.js"]
                    })
                }]
            });
        //组件路由
        $stateProvider
            .state("main.ionicModal", {
                url: "/ionicModal",
                views: {
                    "componentView": {
                        templateUrl: "./detailPages/component/ionicModal.html",
                        controller: "componentsCtrl"
                    }
                },
                resolve: ["$ocLazyLoad", function($ocLazyLoad){
                    return $ocLazyLoad.load({
                        name: "main.component.components",
                        files: ["./js/detailPageControllers/componentsCtrl.js"]
                    })
                }]
            })
            .state("main.ionicActionSheet", {
                url: "/ionicActionSheet",
                views: {
                    "componentView": {
                        templateUrl: "./detailPages/component/ionicActionSheet.html",
                        controller: "componentsCtrl"
                    }
                },
                resolve: ["$ocLazyLoad", function($ocLazyLoad){
                    return $ocLazyLoad.load({
                        name: "main.component.components",
                        files: ["./js/detailPageControllers/componentsCtrl.js"]
                    })
                }]
            })
            .state("main.ionicPopup", {
                url: "/ionicPopup",
                views: {
                    "componentView": {
                        templateUrl: "./detailPages/component/ionicPopup.html",
                        controller: "componentsCtrl"
                    }
                },
                resolve: ["$ocLazyLoad", function($ocLazyLoad){
                    return $ocLazyLoad.load({
                        name: "main.component.components",
                        files: ["./js/detailPageControllers/componentsCtrl.js"]
                    })
                }]
            })
            .state("main.ionicPopover", {
                url: "/ionicPopover",
                views: {
                    "componentView": {
                        templateUrl: "./detailPages/component/ionicPopover.html",
                        controller: "componentsCtrl"
                    }
                },
                resolve: ["$ocLazyLoad", function($ocLazyLoad){
                    return $ocLazyLoad.load({
                        name: "main.component.components",
                        files: ["./js/detailPageControllers/componentsCtrl.js"]
                    })
                }]
            });
    $urlRouterProvider.otherwise("/main/routine");
}]);
app.controller("indexCtrl", ["$scope", function($scope){
    if(localStorage.getItem("hideIndex")){
        $scope.showIndex = false;
    }else {
        $scope.showIndex = true;
    }

    $scope.hideIndex = function(){
        $scope.showIndex = false;
        localStorage.setItem("hideIndex", true);
    };
}]);
app.controller("downloadCtrl", ["$scope", "$ionicPopup", function($scope, $ionicPopup){
    $scope.showCover = false;
    $scope.showDownload = false;
    $scope.showDownloadFunc = function(){
        $scope.showCover = true;
        $scope.showDownload = true;
    };
    $scope.hideDownloadFunc = function(){
        $scope.showCover = false;
        $scope.showDownload = false;
    };
    var png = document.querySelector("#downloadPng");
    var hostUrl = window.location.hostname;
    //png.src = "http://s.jiathis.com/qrcode.php?url=" + hostUrl;
    png.src = "http://s.jiathis.com/qrcode.php?url=" + "10.224.68.140";

    $scope.quitApp = function(){
        $ionicPopup.confirm({
            template: "<p style='text-align: center;'><strong>确定关闭吗</strong></p>",
            okText: "确定",
            cancelText: "取消"
        }).then(function(result){
            if(result) {
                window.close();
            }
        });
    }
}]);