define(["views/team-view", "services/team-service"], function (view, service) {
  var externals = {};

    externals.start = function () {
    console.log("controller is ok");
    service.getTeam(function (result) {
    view.renderTeam(result);
    });
    };
  return externals;
});
