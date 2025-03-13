"use client";
import React, { useState } from 'react';

export default function Submenu2() {
  const [activeTab, setActiveTab] = useState('React');
  const openSubTab = (subTabName) => {
    setActiveTab(subTabName);
  };

  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()

  return (
    <>
      <div className="tab-submenu cool-background-5">
        <button className={`tablinks-submenu rounded-4 ${activeTab === 'React' ? 'active' : ''} cool-background-5`} onClick={() => openSubTab('React')}><span className="highLight">React.js</span></button>
        <button className={`tablinks-submenu rounded-4 ${activeTab === 'Next' ? 'active' : ''} cool-background-5` } onClick={() => openSubTab('Next')}><span className="highLight">Next.js</span></button>
        <button className={`tablinks-submenu rounded-4 ${activeTab === 'Bootstrap' ? 'active' : ''} cool-background-5`} onClick={() => openSubTab('Bootstrap')}><span className="highLight">Bootstrap</span></button>
      </div>

      <div id="React" className={`tabcontent-submenu ${activeTab === 'React' ? 'show' : ''} bg-light cool-background-4`}>
        <h3>React.js</h3>
        <p>React.js is a framework for making more complex and seamless UIs. I have about {currentYear - 2023} years of experience in dealing with the framework. Allowing for more and more modern websites to be made by me, that are also much more easy to scale up in comaprison to creating websites without using said framework.</p>
      </div>

      <div id="Next" className={`tabcontent-submenu ${activeTab === 'Next' ? 'show' : ''} bg-light cool-background-4`}>
        <h3>Next.js</h3>
        <p>Next.js is a framework that is stacked upon React.js, providing React-based web applications with server-side rendering and static website generation. Which is more secure and more accesible than React alone, by engaging in server-side rendering before sending it off to clients. I have about  {currentYear - 2023} years of experience in using it, and in fact! This website is built using Next.js! With Next.js, it has streamlined and made it easier for me to create various MultiPage Websites, for both personal and professional usages.  </p>
      </div>

      <div id="Bootstrap" className={`tabcontent-submenu ${activeTab === 'Bootstrap' ? 'show' : ''} bg-light cool-background-4`}>
        <h3>Bootstrap</h3>
        <p>Bootstrap is a "powerful, extensible, and feature-packed frontend toolkit", which I mainly use for streamlining in creating professional websites, with help in mainly using its prebuilt classes for flex classes. With about {currentYear - 2022} years of experience in it, I love using it.</p>
      </div>


    </>
  );
}