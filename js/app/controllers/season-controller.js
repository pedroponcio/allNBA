define(["views/season-view", "services/season-service"], function(view, service){
    var externals = {};

    externals.start = function(){
    console.log("controller is ok");
    service.getSeason(function(result){
    view.renderSeason(result);
    }); 
    };
    return externals;
});
