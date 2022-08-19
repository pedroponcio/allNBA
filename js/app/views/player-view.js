define(function () {
  var externals = {};
  var elements = {};
  var handlers = {};

  function createMainMenu() {
    return `
      <div style="display: flex; justify-content: space-around; align-items: center">

      ${createInputPlayer()}
      ${buttonPlayer()}

      </div>
    `;
  }

  function createInputPlayer() {
    return '<input type="text" id="searchInputPlayer" class="form-control input-lg" style= "max-width:200px;margin-left:20px;">';
  }

  function buttonPlayer() {
    return '<button id="button-player" class="btn btn-primary">Search Player</button>';
  }

  function renderButtonPlayer() {
    if (elements.buttonPlayer) {
      return;
    }
    elements.buttonPlayer = $("#button-player");
    elements.buttonPlayer.click(handlers.buttonPlayer);
  }

  function renderPlayerField() {
    if (elements.playerField) {
      return;
    }
    elements.playerField = $(createInputPlayer());
    elements.app.append(elements.playerField);
  }

  function createSearchPlayer(result) {
    console.log(result);
  }

  function renderSearch(search) {

      if (elements.searchPlayer) {
        elements.searchPlayer.empty();
      }
      elements.searchPlayer = $(createSearchPlayer(search));
      elements.app.append(elements.searchPlayer);
    }
  

  externals.bind = function (event, handler) {
    handlers[event] = handler;
  };

  externals.renderPlayer = function (search) {
    elements.app = $("#app");

    if (search) {
      renderSearch(search);
    }

    if (!elements.mainMenu) {
      elements.mainMenu = $(createMainMenu());
      elements.app.append(elements.mainMenu);
      renderButtonPlayer();
    }
  };

  return externals;
});
