"use client";
import React, { useState } from 'react';

export default function Submenu4() {
  const [activeTab, setActiveTab] = useState('');
  const openSubTab = (subTabName) => {
    setActiveTab(subTabName);
  };

  return (
    <>
      <div className="tab-submenu">
        <button className={`tablinks-submenu rounded-4 ${activeTab === 'Tensorflow' ? 'active' : ''}`} onClick={() => openSubTab('Tensorflow')}><span className="highLight">Tensorflow</span></button>
        <button className={`tablinks-submenu rounded-4 ${activeTab === 'Scikit-learn' ? 'active' : ''}`} onClick={() => openSubTab('Scikit-learn')}><span className="highLight">Scikit-learn</span></button>
        <button className={`tablinks-submenu rounded-4 ${activeTab === 'C++' ? 'active' : ''}`} onClick={() => openSubTab('C++')}><span className="highLight">OpenCV</span></button>

      </div>

      <div id="Tensorflow" className={`tabcontent-submenu ${activeTab === 'Tensorflow' ? 'show' : ''}`}>
        <h3>Tensorflow</h3>
        <p>Python is a popular programming language.</p>
      </div>

      <div id="Scikit-learn" className={`tabcontent-submenu ${activeTab === 'Scikit-learn' ? 'show' : ''}`}>
        <h3>Scikit-learn</h3>
        <p>EJS is a simple templating language.</p>
      </div>

      <div id="OpenCV" className={`tabcontent-submenu ${activeTab === 'OpenCV' ? 'show' : ''}`}>
        <h3>OpenCV</h3>
        <p>C++ is a general-purpose programming language.</p>
      </div>

    </>
  );
}