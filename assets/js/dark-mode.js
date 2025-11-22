// Dark Mode Toggle Script
(function() {
  'use strict';
  
  // Check for saved theme preference or default to 'light'
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  // Apply the saved theme on page load
  document.documentElement.setAttribute('data-theme', currentTheme);
  document.body.setAttribute('data-theme', currentTheme);
  
  // Wait for DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Create theme toggle button
    const toggleButton = document.createElement('button');
    toggleButton.className = 'theme-toggle';
    toggleButton.setAttribute('aria-label', 'Toggle dark mode');
    toggleButton.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';
    
    // Add styles for the toggle button
    const style = document.createElement('style');
    style.textContent = `
      .theme-toggle {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color, #667eea);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        transition: all 0.3s ease;
      }
      
      .theme-toggle:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      }
      
      @media (max-width: 768px) {
        .theme-toggle {
          width: 45px;
          height: 45px;
          font-size: 20px;
          bottom: 15px;
          right: 15px;
        }
      }
    `;
    document.head.appendChild(style);
    
    // Add toggle button to the page
    document.body.appendChild(toggleButton);
    
    // Toggle theme function
    function toggleTheme() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      // Update theme on both html and body
      document.documentElement.setAttribute('data-theme', newTheme);
      document.body.setAttribute('data-theme', newTheme);
      
      // Save preference to localStorage
      localStorage.setItem('theme', newTheme);
      
      // Update button icon
      toggleButton.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
      
      // Trigger custom event for other scripts to listen to
      window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: newTheme } }));
    }
    
    // Add click event listener
    toggleButton.addEventListener('click', toggleTheme);
    
    // Listen for system theme changes
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      mediaQuery.addEventListener('change', function(e) {
        // Only auto-switch if user hasn't manually set a preference
        if (!localStorage.getItem('theme')) {
          const newTheme = e.matches ? 'dark' : 'light';
          document.documentElement.setAttribute('data-theme', newTheme);
          document.body.setAttribute('data-theme', newTheme);
          toggleButton.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
        }
      });
    }
  });
})();