define(["views/player-view", "services/player-service"], function(view, service){

    var externals = {};

    function bindEventHandler(){
        view.bind("buttonPlayer", buttonHandler);
    }

    function buttonHandler(){   
        service.getPlayer(function(result){
        view.renderPlayer(result);
        });
    }

    externals.start = function(){
        console.log("controller is ok");

        bindEventHandler()
        view.renderPlayer();
    }

    return externals;
});
