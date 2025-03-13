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
            <div className="d-flex flex-column link-buffer">
              <h3>Hobbies</h3>
              <ul>
                <li>Writing</li>
                <li>Worldbuilding</li>
                <li>Websitr Development</li>
                <li>Reading Analyses</li>
              </ul>
            </div>
            <div className="d-flex flex-column link-buffer mx-1">
              <h3>Interests</h3>
              <ul>
                <li>Programming Easy to Use Websites</li>
                <li>Integrating Narratives and UX</li>
                <li>Discovering ways to improve UX across devices</li>
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
              <div class="timeline-pro">
              <div class="timeline-item">
                  <div class="circle-pro"></div>
                  <div class="content">
                    <h4>Personal Website </h4>
                    <span><i>Personal Project (Sep 2024 - Now)</i> | (<Link className="link" href="https://www.linkedin.com/in/jason-alexander-yuwono-4ab514220/details/projects/406420294/multiple-media-viewer?profileId=ACoAADea6sMBdInycYLJA0cgZDrff4dx0EA4RI8&treasuryMediaId=1737720693943&type=IMAGE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_projects_details%3BOSXoqMdpS6WC1e7FmXR2Ig%3D%3D">Project Link</Link>)</span>
                    <p>
                      The Site you're currently on! A personal project that was made to showcase my skills and experiences in a more interactive and engaging manner. The site was made using Next.js, React, and Bootstrap. The site is hosted on Vercel. The site is designed to be a hub for all my projects, experiences, and skills, and is designed to be easily updatable and expandable.
                    </p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="circle-pro"></div>
                  <div class="content">
                    <h4>Automatic Golf Ball Retreiver                    </h4>
                    <span><i>University Project (Oct 2024 - Jan 2025)</i> | (<Link className="link" href="https://www.linkedin.com/in/jason-alexander-yuwono-4ab514220/details/projects/406420294/multiple-media-viewer?profileId=ACoAADea6sMBdInycYLJA0cgZDrff4dx0EA4RI8&treasuryMediaId=1737720693943&type=IMAGE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_projects_details%3BOSXoqMdpS6WC1e7FmXR2Ig%3D%3D">Project Link</Link>)</span>
                    <p>
                      As a fifth semester project, this project explores the development of an automatic golf ball retrieving robot designed to improve efficiency, sustainability within golf fields, and also as a manner to apply genuine and proper practice of the material learnt from university courses. . The robot is centered around a Raspberry Pi, which serves as the primary processing unit, coordinating serial data exchange and command execution with two Arduino Unos via two ROS 2 Nodes. The system integrates various components to allow object detection, object avoidance, adjustable collector speed control, and omnidirectional mobility by using mecanum wheels. The robot’s implementation demonstrates the potential for reducing labor requirements while promoting environmentally friendly practices in recreational or professional sports environments, and also our capabilities in applying what we have learned in class.
                    </p><p>
                      This was made as a joint project for the Control Systems, Machine Learning for Robotics, and Robotic Kinematics and Dynamics Courses.
                    </p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="circle-pro"></div>
                  <div class="content">
                    <h4>Wynyard Product Knowledge Registration Website                    </h4>
                    <span><i>Internship Project (Apr 2024 - Jun 2024)</i> | (<Link className="link" href="https://www.linkedin.com/in/jason-alexander-yuwono-4ab514220/details/projects/1274172663/multiple-media-viewer/?profileId=ACoAADea6sMBdInycYLJA0cgZDrff4dx0EA4RI8&treasuryMediaId=1723556059849">Project Link</Link>)</span>
                    <p>
                      A Website made specifically for registering for the Wynyard Grand Product Knowledge Event that was hosted by Hiera BSD on the 12th of August, 2024. The project successfully handled up to 1740 Users. With a peak of 677 Active Users, and 36k Requests over the course of the event and the week before. Was provided to guests using the redirect of https://tinyurl.com/agentpkregistration
                    </p><p>
                      The goal of the project was to provide a simple and easy mechanisms to identify and register attendees to the event utilizing QR Codes.
                    </p><p>
                      The project was created using Firebase Authentication, Firebase Realtime Database, and Firebase Storage. Maintained with Firebase Analystics. Hosted on Vercel (https://wynyard-pk-registration.vercel.app/). QR Code Scanning utilized Html5-QRCode (https://www.npmjs.com/package/html5-qrcode). The project was designed and created over the course of two weeks.
                    </p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="circle-pro"></div>
                  <div class="content">
                    <h4>Moodbloom</h4>
                    <span><i>University Project (Apr 2024 - Jun 2024)</i> | (<Link className="link" href="https://www.linkedin.com/in/jason-alexander-yuwono-4ab514220/details/projects/536211907/multiple-media-viewer?profileId=ACoAADea6sMBdInycYLJA0cgZDrff4dx0EA4RI8&treasuryMediaId=1720670615085&type=LINK&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_media_list_details_modal%3B5HMh9QetRRSHyNeNC1Xkaw%3D%3D">Project Link</Link>)</span>
                    <p>
                      MoodBloom is a smart pot designed to make indoor gardening more accessible and enjoyable. This smart pot aims to bridge the gap between traditional gardening and modern technology. With just one check in the user’s phone, the user can know exactly how the plant is ‘feeling’. One of MOOD BLOOM’s unique features is its use of emojis to communicate the plant's needs. Whether your plant is thirsty, too cold, or receiving too much sunlight, different emojis will indicate its current state, making plant care intuitive and engaging. Aside from simplifying plant care with showing plant needs through human emotions, this special feature also aims to provide interactivity with the user, where the user could feel like they are taking care of a pet, instead of just a stagnant plant.</p><p>

                      This project was made as part of our projects for the App Engineering, Entreprenurship, and Introduction to Microcontroller Courses.
                    </p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="circle-pro"></div>
                  <div class="content">
                    <h4>BASE CORE Club Website</h4>
                    <span><i>University Project (Sep 2023 - May 2024)</i> </span>
                    <p>
                      Designed and currently maintaining a website for BASE CORE (Binus ASO School of Engineering Center of Research and Engineering) Club utilizing Boostrap and Next.js, and hosted it on Vercel.com
                    </p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="circle-pro"></div>
                  <div class="content">
                    <h4>LCD 16 x 2 CPLD Program                    </h4>
                    <span><i>University Project (Nov 2023 - Jan 2024)</i> | (<Link className="link" href="https://www.linkedin.com/in/jason-alexander-yuwono-4ab514220/details/projects/795804346/multiple-media-viewer?profileId=ACoAADea6sMBdInycYLJA0cgZDrff4dx0EA4RI8&treasuryMediaId=1716635240237&type=DOCUMENT&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_projects_details%3B4WrNJ9l8QXm%2FMg0nCB9kGA%3D%3D">Project Link</Link>)</span>
                    <p>
                      As per our Digital Systems class, we were required to put the skills we've learned over the semester to program a certain actuator that can be programmed using a Complex Programming Logic Device (CPLD). For my team, we programmed a LCD 16 x 2 Interface using VHDL within aISE Design Suite within a VirtualBox Environment.
                    </p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="circle-pro"></div>
                  <div class="content">
                    <h4>Lung Diseases Recognition by Trachea Esophagus Sound Analysis</h4>
                    <span><i>University Project (Sep 2023 - Jan 2024)</i> | (<Link className="link" href="https://www.linkedin.com/in/jason-alexander-yuwono-4ab514220/details/projects/1716634131669/single-media-viewer?type=DOCUMENT&profileId=ACoAADea6sMBdInycYLJA0cgZDrff4dx0EA4RI8&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_projects_details%3B4WrNJ9l8QXm%2FMg0nCB9kGA%3D%3D">Project Link</Link>)</span>
                    <p>
                      For our Digital Systems Project in Semester Three, we developed a Support Vector Machine Model that is able to detect and recognise Lung Diseases via Trachea and Esophagus Sound Analysis. This project is based on the fact that Lung diseases are still a persistent issue, but is one with an easily detectable symptoms such as Persistent cough, Shortness of Breath, Crackles, and wheezes, If you can detect these issues, you can be alerted to check if a person has a disease of the lung.
                    </p>
                  </div>
                </div>
              </div>
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
