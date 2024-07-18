"use client";
import React, { useState } from 'react';

export default function Submenu1() {
  const [activeTab, setActiveTab] = useState('');
  const openSubTab = (subTabName) => {
    setActiveTab(subTabName);
  };

  return (
    <>
      <div className="tab-submenu">
        <button className={`tablinks-submenu rounded-4 ${activeTab === 'Google Cloud' ? 'active' : ''}`} onClick={() => openSubTab('Google Cloud')}><span className="highLight">Python</span></button>
      </div>

      <div id="Google Cloud" className={`tabcontent-submenu ${activeTab === 'Google Cloud' ? 'show' : ''}`}>
        <h3>Python</h3>
        <p>Python is a popular programming language.</p>
      </div>

    </>
  );
}