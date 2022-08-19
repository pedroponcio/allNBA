/**
 * Router Module
 */
define(function () {
  var externals = {}; // module external api

  var routes = {
    player: {
      hash: "#player",
      controller: "player-controller",
    },
    team: {
      hash: "#team",
      controller: "team-controller",
    },
    season: {
      hash: "#season",
      controller: "season-controller",
    },
  };

  function getRoute() {
    return Object.values(routes).find(function (route) {
      return route.hash === window.location.hash;
    });
  }

  function initController(route) {
    require(["controllers/" + route.controller], function (controller) {
      try {
        console.log("dunno whats happening");
        controller.start();
      } catch (err) {
        console.log(err.stack);
      }
    });
  }

  externals.start = function () {
    window.onhashchange = function () {
      console.log("has changed!");
      try {
        initController(getRoute());
      } catch (err) {
        window.location.hash = "";
      }
    };
  };

  return externals;
});
