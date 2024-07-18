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
            <div className="d-flex flex-row" style={{"fontSize": "14px"}} >
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
            <TabBar/>

          </div>
          <div id="about-me" className="container mt-5">
            <h2 className="link-buffer">About Me</h2>
            <div className="d-flex flex-row  mt-3">
              <div className="d-flex flex-column flex-fill link-buffer">
                <h3>Hobbies</h3>

              </div>
            </div>
          </div>
      </div>
    </main>
  );
}
