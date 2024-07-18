"use client";
import React, { useState } from 'react';

export default function Submenu2() {
  const [activeTab, setActiveTab] = useState('');
  const openSubTab = (subTabName) => {
    setActiveTab(subTabName);
  };

  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()

  return (
    <>
      <div className="tab-submenu">
        <button className={`tablinks-submenu rounded-4 ${activeTab === 'React' ? 'active' : ''}`} onClick={() => openSubTab('React')}><span className="highLight">React.js</span></button>
        <button className={`tablinks-submenu rounded-4 ${activeTab === 'Next' ? 'active' : ''}`} onClick={() => openSubTab('Next')}><span className="highLight">Next.js</span></button>
        <button className={`tablinks-submenu rounded-4 ${activeTab === 'Bootstrap' ? 'active' : ''}`} onClick={() => openSubTab('Bootstrap')}><span className="highLight">Bootstrap</span></button>
        <button className={`tablinks-submenu rounded-4 ${activeTab === 'PHPMyAdmin' ? 'active' : ''}`} onClick={() => openSubTab('PHPMyAdmin')}><span className="highLight">PHPMyAdmin</span></button>
      </div>

      <div id="React" className={`tabcontent-submenu ${activeTab === 'React' ? 'show' : ''}`}>
        <h3>React.js</h3>
        <p>React.js is a framework for making more complex and seamless UIs. I have about {currentYear - 2023} years of experience in dealing with the framework. Allowing for more and more modern websites to be made by me, that are also much more easy to scale up in comaprison to creating websites without using said framework.</p>
      </div>

      <div id="Next" className={`tabcontent-submenu ${activeTab === 'Next' ? 'show' : ''}`}>
        <h3>Next.js</h3>
        <p>Next.js is a framework that is stacked upon React.js, providing React-based web applications with server-side rendering and static website generation. Which is more secure and more accesible than React alone, by engaging in server-side rendering before sending it off to clients. I have about  {currentYear - 2023} years of experience in using it, and in fact! This website is built using Next.js! With Next.js, it has streamlined and made it easier for me to create various MultiPage Websites, for both personal and professional usages.  </p>
      </div>

      <div id="Bootstrap" className={`tabcontent-submenu ${activeTab === 'Bootstrap' ? 'show' : ''}`}>
        <h3>C++</h3>
        <p>C++ is a general-purpose programming language.</p>
      </div>

      <div id="PHPMyAdmin" className={`tabcontent-submenu ${activeTab === 'PHPMyAdmin' ? 'show' : ''}`}>
        <h3>Kotlin</h3>
        <p>Kotlin is a modern programming language that makes developers happier.</p>
      </div>

    </>
  );
}