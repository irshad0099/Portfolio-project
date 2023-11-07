import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderConten from "../../component/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './style.scss';
import { DiApple, DiAndroid } from 'react-icons/di';
import { FaDev, FaDatabase } from "react-icons/fa";


const PersonalDetails = [
  {
    label: "Name",
    value: "Irshad Alam"
  },
  {
    label: "DOB",
    value: "09/10/1999"
  },
  {
    label: "Current_Address",
    value: "Hyderabad-Ameerpet, 500016"
  },
  {
    label: "Email",
    value: "Irshad103d@gmail.com"
  },
  {
    label: "Contact No",
    value: "6205356010"
  },
  {
    label: "Permanent_Address",
    value: "Bihar - West Champaran - 845453 "
  }
];

const jobSummary = ' My name is irshad alam, I have completed my graduation in 2023 with B.E in Computer Science and Engineering,and i have completed my traning in naresh it in hyedrabad 6 month HTML, CSS,Bootstrap, JavaScript &  React.js and I i have also built some projects using HTML, CSS, TALWIND AND REACT.JS, BOOTSTRAP, Now i am looking to leverage everything that i have learned and get some hands-on work experience. if you have any Entry Level position for React And UI, pls consider me Thank You !!'

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderConten headerText="About Me" icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >

            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">Personal Information</h3>
            <ul>
              {
                PersonalDetails.map((item, i) => (
                  <li key={i}>
                    <span className="title">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </li>
                ))
              }
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var(--yellow-theme-main-color)" />
              </div>

            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;