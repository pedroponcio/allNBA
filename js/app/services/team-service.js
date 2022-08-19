define(function () {
  var externals = {};

  externals.getTeam = function (callbackFunction) {
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
      "https://api-nba-v1.p.rapidapi.com/teams?name=" + getTeamSearchURL(),
      requestOptions
    )
      .then((response) => response.json())
      //.then((res) => console.log(res))
      .then((result) => callbackFunction(result))
      .catch((error) => console.log("error", error));
  };

  function getTeamSearchURL() {
    var searchedWord = $("#searchInputTeam").val();

    console.log("hello");
    console.log(searchedWord);

    var urlArray = searchedWord.split(" ");

    var url = "";

    switch (urlArray.length) {
      case 2:
        var url = urlArray[0] + "%20" + urlArray[1];
        break;

      case 3:
        var url = urlArray[0] + "%20" + urlArray[1] + "%20" + urlArray[2];
    }

    return url;
  }
  return externals;
});
