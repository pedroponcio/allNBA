define(function () {
  var externals = {};

  externals.renderTeam = function (result) {
    var app = $("#app");

    var something = "";

    if (result) {
      app.empty();

      something = `<div>
      <p>Name: ${result.response[0].name}</p>
      <p>City: ${result.response[0].city}</p>
      <p>Conference: ${result.response[0].leagues.standard.conference}</p>
      <p>Division: ${result.response[0].leagues.standard.division}</p>
      <img src="${result.response[0].logo}" alt="team">
      </div>
      <button id="goBack" class="btn btn-danger" type="button">Go Back</button>`;
    }

    app.append(something);

    $("#goBack").click(function () {
      window.location.hash = "";
      window.location.reload;
      $("#app").empty();
    });
  };

  return externals;
});
