import app, { Component } from "apprun";

export default class AboutComponent extends Component {
  state = "Work";

  view = state => {
    return (
      <div class="columns">
        <div class="column">
          <h1 class="title">Work</h1>
          <ul class="menu-list">
            <li>
              <h1 class="title">Web / Mobile Developer</h1>
              <h2 class="subtitle">Touch Cat Digital Inc.</h2>
              <div class="content">
                <ul>
                  <li>
                    <p>
                      Developed an idea into a fully featured and functional
                      product, with a heavy emphasis on image processing and UI
                      design.
                    </p>
                  </li>
                  <li>
                    <p>
                      Redesigned front-end and back-end features of various
                      websites.
                    </p>
                  </li>
                  <li>
                    <p>Worked in C#, .NET, PHP, Javascript, CSS, HTML.</p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="column">
          <h1 class="title">Education</h1>
          <ul class="menu-list">
            <li>
              <h1 class="title">University of Guelph</h1>
              <h2 class="subtitle">
                Bachelor of Computing Information Science, Computer Software
                Engineering
              </h2>
              <p>2012-2017</p>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  update = {
    "#work": state => state
  };
}
