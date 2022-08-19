define(function () {
  var externals = {};

  externals.renderSeason = function (result) {
    var app = $("#app");

    if (result) {
      app.empty();

        var atlantic = [];

        var central = [];

        var southeast = [];

        var pacific = [];

        var northwest = [];

        var southwest = [];

    for (let i = 0; i < result.response.length; i++) {
      if (result.response[i].division.name === "atlantic") {
        atlantic.push({
          Name: result.response[i].team.name,
          Rank: result.response[i].conference.rank,
        });
      }

      if (result.response[i].division.name === "central") {
        central.push({
          Name: result.response[i].team.name,
          Rank: result.response[i].conference.rank,
        });
      }

      if (result.response[i].division.name === "southeast") {
        southeast.push({
          Name: result.response[i].team.name,
          Rank: result.response[i].conference.rank,
        });
      }

      if (result.response[i].division.name === "pacific") {
        pacific.push({
          Name: result.response[i].team.name,
          Rank: result.response[i].conference.rank,
        });
      }

      if (result.response[i].division.name === "northwest") {
        northwest.push({
          Name: result.response[i].team.name,
          Rank: result.response[i].conference.rank,
        });
      }

      if (result.response[i].division.name === "southwest") {
        southwest.push({
          Name: result.response[i].team.name,
          Rank: result.response[i].conference.rank,
        });
      }
    }

    console.log(atlantic);
    console.log(central);
    console.log(southeast);
    console.log(northwest);
    console.log(pacific);
    console.log(southwest);

    var tableAtlantic = `<table id='table' class='table table-bordered'> 
                        <p>Atlantic</p>
                        <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        </tr>
                        </table>`;

        app.append(tableAtlantic);

    for (let i = 0; i < atlantic.length; i++) {
      var value = `<tr>
                    <td>${atlantic[i].Rank}</td>
                    <td>${atlantic[i].Name}</td>
                   </tr>`;

        app.append(value);
    }

    var tableCentral = `<table id='table' class='table table-bordered'> 
                        <p>Central</p>
                        <th>Rank</th>
                        <th>Name</th>
                        </table>`;

        app.append(tableCentral);

    for (let i = 0; i < central.length; i++) {
      var value = `<tr>
                    <td>${central[i].Rank}</td>
                    <td>${central[i].Name}</td>
                    </tr>`;

        app.append(value);
    }

    var tableSoutheast = `<table id='table' class='table table-bordered'> 
                        <p>Southeast</p>
                        <th>Rank</th>
                        <th>Name</th>
                        </table>`;

        app.append(tableSoutheast);

    for (let i = 0; i < central.length; i++) {
      var value = `<tr>
                    <td>${southeast[i].Rank}</td>
                    <td>${southeast[i].Name}</td>
                    </tr>`;

        app.append(value);
    }

    var tablePacific = `<table id='table' class='table table-bordered'> 
                        <p>Pacific</p>
                        <th>Rank</th>
                        <th>Name</th>
                        </table>`;

        app.append(tablePacific);

    for (let i = 0; i < pacific.length; i++) {
      var value = `<tr>
                    <td>${pacific[i].Rank}</td>
                    <td>${pacific[i].Name}</td>
                    </tr>`;

        app.append(value);
    }

    var tableNorthwest = `<table id='table' class='table table-bordered'> 
                        <p>Northwest</p>
                        <th>Rank</th>
                        <th>Name</th>
                        </table>`;

        app.append(tableNorthwest);

    for (let i = 0; i < northwest.length; i++) {
      var value = `<tr>
        <td>${northwest[i].Rank}</td>
        <td>${northwest[i].Name}</td>
        </tr>`;

        app.append(value);
    }

    var tableSouthwest = `<table id='table'> 
                        <p>Southwest</p>
                        <th>Rank</th>
                        <th>Name</th>
                        </table>`;

        app.append(tableSouthwest);

    for (let i = 0; i < southwest.length; i++) {
      var value = `<tr>
        <td>${southwest[i].Rank}</td>
        <td>${southwest[i].Name}</td>
        </tr>`;
        
        app.append(value);

    }

    var goBack =  `<button id="goBack" class="btn btn-danger" type="button">Go Back</button>`;
    
    app.append(goBack);

        $("#goBack").click(function () {
            window.location.hash = "";
            window.location.reload;
            $("#app").empty();
          });
  }
}
  return externals;
});

