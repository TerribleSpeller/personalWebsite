"use client";
import React, { useState } from 'react';

export default function Submenu1() {
  const [activeTab, setActiveTab] = useState('Google Cloud');
  const openSubTab = (subTabName) => {
    setActiveTab(subTabName);
  };

  return (
    <>
      <div className="tab-submenu">
        <button className={`tablinks-submenu rounded-4 ${activeTab === 'Google Cloud' ? 'active' : ''}`} onClick={() => openSubTab('Google Cloud')}><span className="highLight">Google Cloud</span></button>
        <button className={`tablinks-submenu rounded-4 ${activeTab === 'Firebase' ? 'active' : ''}` } onClick={() => openSubTab('Firebase')}><span className="highLight">Firebase</span></button>
        <button className={`tablinks-submenu rounded-4 ${activeTab === 'Vercel' ? 'active' : ''}` } onClick={() => openSubTab('Vercel')}><span className="highLight">Vercel</span></button>


      </div>

      <div id="Google Cloud" className={`tabcontent-submenu ${activeTab === 'Google Cloud' ? 'show' : ''} bg-light`}>
        <h3>Google Cloud</h3>
        <p>Google Cloud is quite a nice platform full of various APIs and services that are most useful for cloud computing. Particularly trying out Kubernetes and setting up pipelines is quite fun and very much useful for some projects. </p>
      </div>
      <div id="Firebase" className={`tabcontent-submenu ${activeTab === 'Firebase' ? 'show' : ''} bg-light`}>
        <h3>Firebase</h3>
        <p>Firebase is quite a nifty tool if I say so myself. It is relatively easy to apply for my purposes of hosting databases and for authentication. Due to the easy way that it can be integrated into exisitng products, I now use it ever since I have known it for simple scalable projects that require databases that can be scaled appropriately. The features it has for authentication certainly are useful too if I ever need to use them. </p>
      </div>
      <div id="Vercel" className={`tabcontent-submenu ${activeTab === 'Vercel' ? 'show' : ''} bg-light`}>
        <h3>Vercel</h3>
        <p>Vercel is a very useful hosting tool, allowing me to deploy next.js web-apps with ease. Along with that, it has a host of convenient tools that I often use to enhance my websites - for example this website is hosted <i>on</i> Vercel!</p>
      </div>

    </>
  );
}