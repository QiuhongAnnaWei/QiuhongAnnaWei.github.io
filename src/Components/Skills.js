import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


class Skills extends Component {
  constructor(props) {
    super(props);

    this.skills = props.skills;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">Programming Languages</div>
          <div className="row mb-5">
            {
              this.skills.programmingLanguage.map((data, index) => (
                <div key={index} className="col-4">
                  <p className="list-item mb-2"><FontAwesomeIcon icon={faCheckCircle} color="#75bfff" />
                    <span className="ml-2">{data.name}</span>
                  </p>
                </div>
              ))
            }
          </div>

          <div className="subheading mt-6 mb-3">Tech</div>
          <div className="row">
            {
              this.skills.tech.map((data, index) => (
                <div key={index} className="col-4">
                  <p className="list-item mb-2"><FontAwesomeIcon icon={faCheckCircle} color="#75bfff" />
                    <span className="ml-2">{data.name}</span>
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    );
  }
}



export default Skills;
