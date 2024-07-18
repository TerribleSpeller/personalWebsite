"use client";
import React, { useState } from 'react';

export default function Submenu3() {
  const [activeTab, setActiveTab] = useState('');
  const openSubTab = (subTabName) => {
    setActiveTab(subTabName);
  };

  return (
    <>
      <div className="tab-submenu">
        <button className={`tablinks-submenu rounded-4 ${activeTab === 'Android Studio' ? 'active' : ''}`} onClick={() => openSubTab('Android Studio')}><span className="highLight">Android Studio</span></button>
        <button className={`tablinks-submenu rounded-4 ${activeTab === 'Firebase' ? 'active' : ''}`} onClick={() => openSubTab('Firebase')}><span className="highLight">Firebase</span></button>
       
      </div>

      <div id="Android Studio" className={`tabcontent-submenu ${activeTab === 'Android Studio' ? 'show' : ''}`}>
        <h3>Android Studio</h3>
        <p>Python is a popular programming language.</p>
      </div>

      <div id="Firebase" className={`tabcontent-submenu ${activeTab === 'Firebase' ? 'show' : ''}`}>
        <h3>Firebase</h3>
        <p>EJS is a simple templating language.</p>
      </div>


    </>
  );
}