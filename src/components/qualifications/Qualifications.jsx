import React, { useState } from "react";
import "./qualifications.css";
const Qualifications = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-book-reader qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SSC (90.50 %)</h3>
                <span className="qualification__subtitle">
                  Tatyasaheb Kore English Acadmey Warnanagar
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 07/2019 - 04/2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title"> HSC (85.40 %)</h3>
                <span className="qualification__subtitle">
                  Chate Junior College Kolhapur
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 07/2020 - 04/2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech</h3>
                <span className="qualification__subtitle">
                  D. Y. Patil College of Engineering & Technology, Kolhapur
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Softron Technologies 
                </h3>
                <span className="qualification__subtitle">
                  Internship
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 05/2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  IIT Bombay EdTech
                </h3>
                <span className="qualification__subtitle">
                  Full Stack Developer Intern
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 5/2025
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
