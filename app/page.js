import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'
import TabBar from "./components/tabbar"

export default function Home() {
  var encEmail = "amFzb25hbGV4YW5kZXJ5dXdvbm9AZ21haWwuY29t";
  var deEncryptedEmail = "mailto:".concat(atob(encEmail));
  return (
    <main>
      <div className="container d-flex flex-column">
        <div className="container" id="intro">
          <h1>Hello, I'm Jason Alexander!</h1>
          <p>
            Hello! I'm a Student who's currently studying Automotive and Robotics Engineering  with a drive to create things that can be applied effectively to assist others in their own creative and sustainable endeavors. Meaning that I tinker a lot with websites! Mainly using Next.js and React, with React Native soon on its way once I get a hang of it! In addition to that, I've dabbled with mobile application development using Kotlin and Firebase, Internet of Things using ESP32 and Arduinos, Machine Learning with Tensorflow and Sckit-learn, and also Google Cloud and SAP are on my radar of skills.
          </p>
          <p>
            You could say, that I am quite the veritable Swiss Army Knife of skills! With a passion for learning, adapting and creating, I'm always looking for new opportunities to expand my horizons and learn new things.
          </p>
        </div>
        <div id="contacts" className="container mt-4">
          <div className="d-flex flex-row" style={{ "fontSize": "14px" }} >
            <div className="d-flex flew-row">
              <i className="bi bi-linkedin"></i> <Link href="https://www.linkedin.com/in/jason-alexander-yuwono-4ab514220/" className="nav-link link link-module link-buffer"><span className="highLight">LinkedIn</span></Link>
            </div>
            <div className="d-flex flew-row">
              <i className="bi bi-github"></i> <Link href="https://github.com/TerribleSpeller" className="nav-link link link-module link-buffer"><span className="highLight">Github</span></Link>
            </div>
            <div className="d-flex flew-row">
              <i className="bi bi-envelope"></i> <Link href={deEncryptedEmail} className="nav-link link link-module link-buffer" id="contact"><span className="highLight">Email</span></Link>
            </div>
          </div>
        </div>
        <div id="skills" className="container mt-5">
          <h2 className="link-buffer">Skills</h2>
          <TabBar />

        </div>
        <div id="about-me" className="container mt-5">
          <h2 className="link-buffer">About Me</h2>
          <div className="d-flex flex-row  mt-3">
            <div className="d-flex flex-column flex-fill link-buffer">
              <h3>Hobbies</h3>
              <ul>
                <li>Writing</li>
                <li>Worldbuilding</li>
                <li>Reading Fanfics</li>
                <li>Reading Nonfictional Analyses</li>
              </ul>
            </div>

            <div className="d-flex flex-column flex-fill link-buffer">
              <h3>Interests</h3>
              <ul>
                <li>Programming Easy to Use Websites</li>
                <li>Integrating Narratives and UX</li>
                <li>Using AI to improve UX</li>
                <li>Web Development</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="experience" className="container mt-5">
          <h2 className="link-buffer">Experience</h2>
          <div className="d-flex flex-row  mt-3">
            <div className="d-flex flex-column flex-fill link-buffer">
              <div class="timeline-exp">
                <div class="timeline-item">
                  <div class="circle-exp"></div>
                  <div class="content">
                    <h4>Software Engineer Intern</h4>
                    <h5>PT Sinar Mitbana Mas · Internship</h5>
                    <span>Sep 2024 –July 2025</span>
                    <p>Assisting in the development, testing, and maintenance of new software applications to streamline company workflow; Collaborating with existing departments in creating the optimal UI/UX of new software applications; Streamling, debugging, and improving existing software applications; Creating scalable, expandable, and maintainable software applications that can work on both websites (Node.js) and mobile devices (android, IOS); & Creating software applications that can assist and allow for users to do comprehensive analysis and coordinate better</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="circle-exp"></div>
                  <div class="content">
                    <h4>Application Developer Intern</h4>
                    <h5>Sinar Mas Land · Internship</h5>
                    <span>Jun 2024 - Aug 2024</span>
                    <p>Designed a website with embedeed javascript to fulfill the requirements of the department in terms of marketing, ensuring good user interface design and experience, along with proper and sleek presentation.</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="circle-exp"></div>
                  <div class="content">
                    <h4>Teaching Assistant</h4>
                    <h5>BINUS ASO School of Engineering · Part-Time </h5>
                    <span>Nov 2023 - Jan 2024</span>
                    <p>Teaching Assistant for teaching students in the Business Engineering Course about Python.</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="circle-exp"></div>
                  <div class="content">
                    <h4>Website Engineer</h4>
                    <h5>BASE CORE · Part-Time </h5>
                    <span>Jul 2023 - Jul 2024</span>
                    <p>Developed and maintain a website for BASE Centre Of Robotic Engineering.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="projects" className="container mt-5">
          <h2 className="link-buffer">Projects</h2>
          <div className="d-flex flex-row  mt-3">
            <div className="d-flex flex-column flex-fill link-buffer">

            </div>
          </div>
        </div>
        <div id="education" className="container mt-5">
          <h2 className="link-buffer">Education</h2>
          <div className="d-flex flex-row  mt-3">
            <div className="d-flex flex-column flex-fill link-buffer">
              <div class="timeline">
                <div class="timeline-item">
                  <div class="circle"></div>
                  <div class="content">
                    <h4>BINUS ASO School of Engineering (BASE)</h4>
                    <p>B.Tech. in Automotive and Robotics Engineering, Majored in Intelligent Robotics</p>
                    <p>Sep 2022 – Sep 2026</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="circle"></div>
                  <div class="content">
                    <h4>Calvin High School</h4>
                    <p>Major in Science Stream(Physics, Biology, Chemistry)</p>
                    <p>2013 – 2018</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="my-5">

      </div>
    </main>
  );
}
