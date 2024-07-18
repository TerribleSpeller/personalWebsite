import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/navbar"
import Link from 'next/link'


export default function Home() {
  var encEmail = "ZW1haWxAYWRkcmVzcy5jb20=";
  var deEncryptedEmail = "mailto:".concat(atob(encEmail));
  return (
    <main>
      <div className="container">
        <NavBar/>
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
            <h2>Contacts</h2>
            <div className="d-flex flex-row" >
              <div className="d-flex flew-row">
                <i className="bi bi-linkedin"></i> <Link href="https://www.linkedin.com/in/jason-alexander-yuwono-4ab514220/" className="nav-link link-module link-buffer">LinkedIn</Link>
              </div>
              <div className="d-flex flew-row">
                <i className="bi bi-github"></i> <Link href="https://github.com/TerribleSpeller" className="nav-link link-module link-buffer">Github</Link>
              </div>
            </div>
          </div>
      </div>
    </main>
  );
}
