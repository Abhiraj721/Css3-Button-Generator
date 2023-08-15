import React, { useState } from 'react';
import '../App.css'; // Make sure to import your CSS file

function Inputs({ title, children }) {
  const [isActive, setIsActive] = useState(false);

  const toggleSection = () => {
    setIsActive(prevState => !prevState);
    // Add this script at the end of the body tag in your HTML file

 // Add this script at the end of the body tag in your HTML file

  const collapsibles = document.querySelectorAll('.collapsible');

  collapsibles.forEach(collapsible => {
    const header = collapsible.querySelector('.collapsible-header');

    header.addEventListener('click', () => {
      // Close all other open sections and remove active class
      collapsibles.forEach(item => {
        if (item !== collapsible) {
          item.classList.remove('active');
        }
      });

      // Toggle the clicked section and bring it to the top
      collapsible.classList.toggle('active');
      if (collapsible.classList.contains('active')) {
        collapsible.parentElement.prepend(collapsible);
      }
    });
  });

  window.scrollTo({
    top: 0,
    behavior: 'smooth' // This makes the scrolling smooth
  });

  };

  return (
    <div className={`collapsible ${isActive ? 'active' : ''}`}>
      <h2 className="collapsible-header" onClick={toggleSection}>
        {title}
      </h2>
      <div className={`collapsible-content ${isActive ? 'active' : ''}`}>
        {children}
      </div>
      
    </div>
  );
}

export default Inputs;
