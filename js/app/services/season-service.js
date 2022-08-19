define(function () {
  var externals = {};

  externals.getSeason = function (callbackFunction) {
    var myHeaders = new Headers();
    myHeaders.append(
      "x-rapidapi-key",
      "de7395fe44mshd79b83f4fa71310p157ab8jsn87f55a859651"
    );
    myHeaders.append("x-rapidapi-host", "api-nba-v1.p.rapidapi.com");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
        'https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=' + getSeasonSearchURL(), 
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => callbackFunction(result))
      .catch((error) => console.log("error", error));

  };

  function getSeasonSearchURL() {
    
    var searchedSeason = $("#searchInputCalendar").val();
    
    console.log(searchedSeason);

    return searchedSeason;
  }

  return externals;
});
