import app from "apprun";
import "bulma/css/bulma.css";

import Sidebar from "./Sidebar";

const App = () => (
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-one-quarter">
          <Sidebar />
        </div>
        <div id="my-app" class="column" />
      </div>
    </div>
  </section>
);

app.render(document.getElementById("main"), <App />);

import Home from "./Home";
import Work from "./Work";

const element = "my-app";
new Home().start(element);
new Work().mount(element);
