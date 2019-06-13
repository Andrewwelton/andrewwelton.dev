import app, { Component } from "apprun";

export default class Sidebar extends Component {
  view = () => {
    return (
      <aside id="sidebar" class="menu">
        <p class="menu-label">andrewwelton.dev</p>
        <ul class="menu-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
        </ul>
      </aside>
    );
  };
}
