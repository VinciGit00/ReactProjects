import React from "react";
import Timeline from "./timeline";

class Education extends React.Component {
  render() {
    return (
      <section className="paralax-mf footer-paralax bg-image sect-mt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div id="education" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">My education</h5>
                    </div>
                    <div className="timeline">
                      <div className="timeline-progress"></div>
                    </div>
                    <div>
                      <Timeline></Timeline>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
