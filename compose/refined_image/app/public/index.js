import { init, SageEmbed, EmbedEvent, AuthType } from "https://cdn.skypack.dev/@thoughtspot/visual-embed-sdk";
import { getTokenService } from "./tokenService.js";

// Initialize embed configuration
init({
  thoughtSpotHost: "https://try-everywhere.thoughtspot.cloud",
  authType: AuthType.TrustedAuthTokenCookieless,
  getAuthToken: getTokenService,
  disableTokenVerification: true,
});

// Instantiate class for embedding the full application
const embed = new SageEmbed("#your-own-div", {
  frameParams: {},
  disableWorksheetChange: true,
  dataSource: "cd252e5c-b552-49a8-821d-3eadaa049cca",
  hideWorksheetSelector: true,
});

embed
  .on(EmbedEvent.Init, showLoader)
  .on(EmbedEvent.Load, hideLoader)
  .render();

function setDisplayStyle(el, style) {
  if (document.getElementById(el)) {
    document.getElementById(el).style.display = style;
  }
}

function showLoader() {
  setDisplayStyle("loader", "block");
}

function hideLoader() {
  setDisplayStyle("loader", "none");
}
