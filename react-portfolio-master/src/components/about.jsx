import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "75%",
          value: "90",
        },
        { id: "Dart", content: "Dart", porcentage: "85%", value: "85" },
        { id: "Java", content: "Java", porcentage: "80%", value: "80" },
        {
          id: "Javascript",
          content: "Javascript",
          porcentage: "75%",
          value: "75",
        },

        { id: "SQL", content: "SQL", porcentage: "85%", value: "85" },
        { id: "MongoDB", content: "MongoDB", porcentage: "70%", value: "70" },
        {
          id: "Firebase",
          content: "Firebase",
          porcentage: "60%",
          value: "60%",
        },
        {
          id: "C",
          content: "C",
          porcentage: "40%",
          value: "40",
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I'm currently becoming an engineer and I'm going to improving myself and pushing myself to the limit to improve my skills.",
        },
        {
          id: "second-p-about",
          content:
            "My favourite interests are: python and dart. I'm able also to interact with realtional and NoSQL databases.",
        },
        {
          id: "third-p-about",
          content:
            "I love programming because I can do app according to my needs.",
        },
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="title-box-2">
                      <h5 className="title-left">About Me</h5>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map((skill) => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      {this.state.about_me.map((content) => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
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

export default About;
