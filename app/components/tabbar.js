"use client";
import React, { useState } from 'react';
import Submenu1 from './submenus/submenu-hobby-1';
import Submenu2 from './submenus/submenu-hobby-2';
import Submenu3 from './submenus/submenu-hobby-3';
import Submenu4 from './submenus/submenu-hobby-4';
import Submenu5 from './submenus/submenu-hobby-5';


export default function TabBar() {
  const [activeTab, setActiveTab] = useState('');
  const openTab = (tabName) => {
    if (tabName === activeTab) {
        setActiveTab("");

    } else {
        setActiveTab(tabName);

    }
  };

  return (
    <>
      <div className="tab">
        <button className={`tablinks rounded-4 ${activeTab === 'programming' ? 'active' : ''} mx-1 cool-background-4`} onClick={() => openTab('programming')}><span className="highLight">Gen. Programming</span></button>
        <button className={`tablinks rounded-4 ${activeTab === 'webdev' ? 'active' : ''} mx-1 cool-background-4 `} onClick={() => openTab('webdev')}><span className="highLight">Web Development</span></button>
        <button className={`tablinks rounded-4 ${activeTab === 'mobdev' ? 'active' : ''} mx-1 cool-background-4`} onClick={() => openTab('mobdev')}><span className="highLight">Mobile Development</span></button>
        <button className={`tablinks rounded-4 ${activeTab === 'ml' ? 'active' : ''} mx-1 cool-background-4`} onClick={() => openTab('ml')}><span className="highLight">Machine Learning</span></button>
        <button className={`tablinks rounded-4 ${activeTab === 'cloudserv' ? 'active' : ''} mx-1 cool-background-4`} onClick={() => openTab('cloudserv')}><span className="highLight">Cloud Services</span></button>


      </div>

      <div id="programming" className={`tabcontent ${activeTab === 'programming' ? 'show' : ''}`}>
        <Submenu1/>
      </div>

      <div id="webdev" className={`tabcontent ${activeTab === 'webdev' ? 'show' : ''}`}>
        <Submenu2/>
      </div>

      <div id="mobdev" className={`tabcontent ${activeTab === 'mobdev' ? 'show' : ''}`}>
        <Submenu3/>
      </div>

      <div id="ml" className={`tabcontent ${activeTab === 'ml' ? 'show' : ''}`}>
          <Submenu4/>
      </div>

      <div id="cloudserv" className={`tabcontent ${activeTab === 'cloudserv' ? 'show' : ''}`}>
        <Submenu5/>

      </div>
    </>
  );
}