import app, { Component } from "apprun";

export default class AboutComponent extends Component {
  state = "Work";

  view = state => {
    return (
      <div class="columns">
        <div class="column">
          <h1 class="title">Work</h1>
          <div class="content">
            <h1 class="title">Software Developer</h1>
            <h2 class="subtitle">Magnet Forensics</h2>
            <ul>
              <li>
                <p>
                  Work in a full stack web environment (AngularJS, React,
                  Python, C++) on Magnet Review.
                </p>
              </li>
              <li>
                <p>
                  Interpreting and parsing data from third-party sources without
                  documentation and adapting said data to an existing in-house
                  data model.
                </p>
              </li>
              <li>
                <p>Integrating a newly acquired remote team to the company.</p>
              </li>
              <li>
                <p>
                  Developing new features to integrate the product to Magnet
                  Forensics and supporting pilot customers by acting quickly on
                  customer issues.
                </p>
              </li>
              <li>
                <p>
                  Wrote a performance testing suite in Gatling which proved
                  assumptions about the performance of the product and provided
                  actionable results for improvement.
                </p>
              </li>
              <li>
                <p>
                  Full stack web experience building Magnet Automate (a
                  forensics automation platform) with React and Clojure
                </p>
              </li>
              <li>
                <p>
                  Full stack web experience building a prototype forensics
                  review platform in React and NodeJS, using the Serverless
                  framework with AWS
                </p>
              </li>
              <li>
                <p>
                  Built and maintained dev-ops scripts for deploying and
                  removing resources to AWS using CloudFormation and Serverless,
                  for both testing and demo purposes.
                </p>
              </li>
              <li>
                <p>
                  Deployed product on-site with customers which resulted in a
                  successful pilot program and a company first purchase of the
                  product.
                </p>
              </li>
              <li>
                <p>
                  Implemented QA practices to team development process to ensure
                  code coverage and code quality remained high.
                </p>
              </li>
            </ul>
            <h1 class="title">Software Developer (Co-op)</h1>
            <h2 class="subtitle">Magnet Forensics</h2>
            <ul>
              <li>
                <p>
                  Worked on UI and back-end features for Magnet Examine in C#
                  and WPF.
                </p>
              </li>
              <li>
                <p>Extended support for a hex viewer for new file-systems.</p>
              </li>
              <li>
                <p>
                  Implemented a 3rd party licensing solution for all products in
                  the Magnet Axiom suite.
                </p>
              </li>
              <li>
                <p>
                  Gathered product requirements across several teams and
                  implemented licensing features according to said requirements.
                </p>
              </li>
            </ul>
            <h1 class="title">Agile Software Developer (Co-op)</h1>
            <h2 class="subtitle">Christie Digital Systems</h2>
            <ul>
              <li>
                <p>
                  Assigned to work on the web interface for the Christie Boxer
                  series projector.
                </p>
              </li>
              <li>
                <p>
                  Developed new features for the interface and resolved bugs.
                </p>
              </li>
              <li>
                <p>
                  Developed an internal development aide and a fully functional,
                  responsive, prototype interface.
                </p>
              </li>
              <li>
                <p>Worked in Typescript, HTML, CSS.</p>
              </li>
            </ul>
            <h1 class="title">Web / Mobile Developer</h1>
            <h2 class="subtitle">Touch Cat Digital Inc.</h2>
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
