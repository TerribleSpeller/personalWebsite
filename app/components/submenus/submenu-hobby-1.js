"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Submenu1() {
  const [activeTab, setActiveTab] = useState('py');
  const openSubTab = (subTabName) => {
    setActiveTab(subTabName);
  };

  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()

  return (
    <>
      <div className="tab-submenu">
        <button className={`tablinks-submenu rounded-4 ${activeTab === 'py' ? 'active' : ''}`} onClick={() => openSubTab('py')}><span className="highLight">Python</span></button>
        <button className={`tablinks-submenu rounded-4 ${activeTab === 'EJS' ? 'active' : ''}`} onClick={() => openSubTab('EJS')}><span className="highLight">EJS/JavaScript</span></button>
        <button className={`tablinks-submenu rounded-4 ${activeTab === 'C++' ? 'active' : ''}`} onClick={() => openSubTab('C++')}><span className="highLight">C++</span></button>
        <button className={`tablinks-submenu rounded-4 ${activeTab === 'Kotlin' ? 'active' : ''}`} onClick={() => openSubTab('Kotlin')}><span className="highLight">Kotlin</span></button>
        <button className={`tablinks-submenu rounded-4 ${activeTab === 'PHP' ? 'active' : ''}`} onClick={() => openSubTab('PHP')}><span className="highLight">PHP</span></button>
      </div>

      <div id="py" className={`tabcontent-submenu ${activeTab === 'py' ? 'show' : ''} bg-light`}>
        <h3>Python</h3>
        <p style={{"fontSize": "14px"}}>Like many people, my first programming language was Python. With {currentYear - 2016} years of experience wrangling the language, I've taken to use the language mainly for mathemathical issues, such as usage in MatLab for mathemathical analysis or digital signal processing. For Machine Learning Purposes, I often apply it on Jupyter Notebook enivronments and regular enivronments, providing a level of verstaility.</p>
        <p>For Complex IoT projects, that possibly warrant the usage of a Raspberry PI or a ESP32, Python is also utilized as it is more verstaile with the more complex microcontrollers that have to be used.</p>
      </div>

      <div id="EJS" className={`tabcontent-submenu ${activeTab === 'EJS' ? 'show' : ''} bg-light`}>
        <h3>EJS (Embedded JS) / JavaScript</h3>
        <p style={{"fontSize": "14px"}}>The second proper programming language I learned was Embedded Javascript. For EJS, I have about  {currentYear - 2020} years of experience utilizing it. Proper formal education on the application of it was obtained from  <Link className="highLight link" href="https://www.udemy.com/certificate/UC-b28f715e-22c5-40e8-9517-e9f8562cef87/">Dr Angela Yu's Complete 2024 Web Development Bootcamp</Link>.  Application of the language can be seen on all the websites that I've worked on, due to my intensive usage of the React.js and Next.js frameworks. </p>
        <p>Application of this language consists of utilizing it to create complicated animations on webpages. For more practical purposes such as complex processes such as authentation on websites, I also use this language.</p>
      </div>

      <div id="C++" className={`tabcontent-submenu ${activeTab === 'C++' ? 'show' : ''} bg-light`}>
        <h3>C++</h3>
        <p>With the fact that I entered university for a Bachelor of Engineering, it was only a matter of time until I learned C++. Now with {currentYear - 2022} years of experience, C++ has become my go to tool for basic and intermediate complex Internet of Things (IoT) projects. Often using for projects involving Arduinos, C++ has been utilized many times which have bred familiarlty in my skillset with it. In addition to learning the various ways that C++ can be utilized.</p>
      </div>

      <div id="Kotlin" className={`tabcontent-submenu ${activeTab === 'Kotlin' ? 'show' : ''} bg-light`}>
        <h3>Kotlin</h3>
        <p>With IoT becoming significantly more important, mobile applications are a growing avenue that needs to be taken note of and exploited. So far, I have  {currentYear - 2024} year of experience with them, mainly with the utilization of Kotlin and Android Studio. Kotlin was the first language I learned that had the capbilities to be deployed on Android, and with it I learned how to deploy apps that can interact with the rest of the IoT network. Going so far to have one semester's final project to involve using one such application! </p>
      </div>

      <div id="PHP" className={`tabcontent-submenu ${activeTab === 'PHP' ? 'show' : ''} bg-light`}>
        <h3>PHP</h3>
        <p>PHP is a general purpose language, one that I have  {(currentMonth  > 11) ? `${currentYear - 2024} years` : `${currentMonth} months` } of experience in. I utilize it mainly for various websites that require various data types to be processed in relatively complex manners where Javascript alone is not enough. </p>
      </div>
    </>
  );
}