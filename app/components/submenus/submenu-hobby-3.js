"use client";
import React, { useState } from 'react';

export default function Submenu3() {
  const [activeTab, setActiveTab] = useState('Android Studio');
  const openSubTab = (subTabName) => {
    setActiveTab(subTabName);
  };

  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()

  return (
    <>
      <div className="tab-submenu cool-background-5">
        <button className={`tablinks-submenu rounded-4 ${activeTab === 'Android Studio' ? 'active' : ''} cool-background-5`} onClick={() => openSubTab('Android Studio')}><span className="highLight">Android Studio</span></button>
        <button className={`tablinks-submenu rounded-4 ${activeTab === 'React Native' ? 'active' : ''} cool-background-5`} onClick={() => openSubTab('React Native')}><span className="highLight">React Native</span></button>

      </div>

      <div id="Android Studio" className={`tabcontent-submenu ${activeTab === 'Android Studio' ? 'show' : ''} bg-light cool-background-4`}>
        <h3>Android Studio</h3>
        <p>Android Studio is quite a tool I use for programming and packaging mobile applications based on Android. In addition to that, Android Studio also has a built in emulator, which eases testing of applications. Due to nature of my initial usage of Android Studio, I usually use Android Studio to develop applications of the mobile nature for Android devices. </p>
      </div>

      <div id="React Native" className={`tabcontent-submenu ${activeTab === 'React Native' ? 'show' : ''} bg-light cool-background-4`}>
        <h3>React Native</h3>
        <p>React Native is a framework that I use over Android Studio in order to make applications that can work across devices with ease. I have about {(currentYear - 2024 ) === 1 ? `${currentYear - 2024} year` :  `${currentYear - 2024} years` } of experience with it, and its quite useful in making applications, rather than needing to learn multiple languages to program a single application.</p>
      </div>

    </>
  );
}