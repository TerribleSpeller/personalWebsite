"use client";
import React, { useState } from 'react';

export default function Submenu4() {
  const [activeTab, setActiveTab] = useState('Tensorflow');
  const openSubTab = (subTabName) => {
    setActiveTab(subTabName);
  };

  return (
    <>
      <div className="tab-submenu cool-background-5">
        <button className={`tablinks-submenu rounded-4 ${activeTab === 'Tensorflow' ? 'active' : ''} cool-background-5`} onClick={() => openSubTab('Tensorflow')}><span className="highLight">Tensorflow</span></button>
        <button className={`tablinks-submenu rounded-4 ${activeTab === 'Scikit-learn' ? 'active' : ''} cool-background-5`} onClick={() => openSubTab('Scikit-learn')}><span className="highLight">Scikit-learn</span></button>
        <button className={`tablinks-submenu rounded-4 ${activeTab === 'OpenCV' ? 'active' : ''} cool-background-5`} onClick={() => openSubTab('OpenCV')}><span className="highLight">OpenCV</span></button>
        <button className={`tablinks-submenu rounded-4 ${activeTab === 'YOLO' ? 'active' : ''} cool-background-5`} onClick={() => openSubTab('YOLO')}><span className="highLight">YOLO</span></button>

      </div>

      <div id="Tensorflow" className={`tabcontent-submenu ${activeTab === 'Tensorflow' ? 'show' : ''} bg-light cool-background-4`}>
        <h3>Tensorflow</h3>
        <p>One of the first python modules for Machine Learning I learned was Tensorflow, and its very much robust for the purposes I need. Whether that be processing large amounts of data for various types of modules, it is reliable and well!</p>
      </div>

      <div id="Scikit-learn" className={`tabcontent-submenu ${activeTab === 'Scikit-learn' ? 'show' : ''} bg-light cool-background-4`}>
        <h3>Scikit-learn</h3>
        <p>Sckit-learn is a nice library for data analysis and machine learning. Particularly well is their capbilities in data visualiation, making it possible to see and understand the datas being processed. I have mainly shifted to using Scikit-learn recently so that I can train models more effectively and observe it more in depth. </p>
      </div>

      <div id="OpenCV" className={`tabcontent-submenu ${activeTab === 'OpenCV' ? 'show' : ''} bg-light cool-background-4`}>
        <h3>OpenCV</h3>
        <p>I learned OpenCV after I was volunteered to help out with training a model based on camera feed. Enter ala, OpenCV. A great library for allowing to interpet visual data and turning it into data that can be trained on by various machine learning models! Mainly YOLO, for a project wherehence I needed to identify types of objects from visual data.</p>
      </div>
      <div id="YOLO" className={`tabcontent-submenu ${activeTab === 'YOLO' ? 'show' : ''} bg-light cool-background-4`}>
        <h3>YOLO</h3>
        <p>
          YOLO is a great library for object detection, and I have used it in various projects where I needed to identify types of objects from visual data. It is quite useful for real-time object detection, and its lightweight counterpart - YOLO Nano runs well on smaller devices such as a Raspberry Pi!
        </p>
      </div>


    </>
  );
}