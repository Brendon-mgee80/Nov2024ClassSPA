import html from "html-literal";
import * as views from "../view";

export default state =>
  html`
    ${views[state.view](state)}
  `;
