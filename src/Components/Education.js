import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);

    this.education = props.education;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
        <div className="w-100">
          <h2 className="mb-5">Education</h2>
          
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                  <div> 
                    <span className="heading mb-0 left">Brown University <span className="subsubheading1">Providence, RI</span></span>
                    <span className="resume-date text-md-right subsubheading2 right">Expected May 2024</span>
                  </div>
                  <div> 
                    <span className="subheading mb-3">Computer Science - Applied Mathematics </span>
                  </div> 
              
              <ul className="mb-2">
                <li> <span className="subsubheading2"> GPA </span>: 4.00/4.00 </li>
                <li> <span className="subsubheading2"> Relevant Coursework </span>: Software Engineering, Computer Vision, Statistical Inference, Differential Equations, Abstract Algebra, Introduction to Higher Mathematics (Set Theory, Combinatorics, Analysis), Honors Calculus </li>
                <li> <span className="subsubheading2"> Leadership & Service </span>: I am one of the 2 Meta Undergraduate Research Assistants in the CS department, for which I serve as the liaison between faculty and 1200 students in the Computer Science department to facilitate undergraduate research </li>
                <li> <span className="subsubheading2"> Activities </span>: Women in Computer Science (WiCS), Socially Responsible Investment Fund (SRIF), Brown Science Olympiad Event Coordinator, Daebak Dance, Chinese Drama Club </li>
              </ul>
              </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                  <div> 
                    <span className="heading mb-0 left">Concordia International School Shanghai <span className="subsubheading1">Shanghai, China</span></span>
                    <span className="resume-date text-md-right subsubheading2 right">May 2019</span>
                  </div>
                  <div> 
                    <span className="subheading mb-3">High School Diploma </span>
                  </div> 
              
              <ul className="mb-2">
                <li> <span className="subsubheading2"> GPA </span>: 3.99/4.00 </li>
                <li> <span className="subsubheading2"> Relevant Coursework </span>: Multivariable Calculus, Linear Algebra, Computer Science, Statistics </li>
                <li> <span className="subsubheading2"> Leadership & Service </span>: Varsity dance captain, Student Council Vice President, 6-year volunteer dance teacher for Chinese migrant children, Math Team Founding Member </li>
              </ul>
              </div>
          </div>
          
        </div>
      </section>
    );
  }
}

export default Education;
