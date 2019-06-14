import app, { Component } from "apprun";

export default class HomeComponent extends Component {
  state = "Home";

  view = state => {
    return (
      <div class="content">
        <h1 class="title">Andrew Welton</h1>
        <h2 class="subtitle">Software Developer</h2>
      </div>
    );
  };

  update = {
    "#": state => state
  };
}
