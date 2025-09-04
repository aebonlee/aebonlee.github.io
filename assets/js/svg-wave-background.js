// Animated Wave Background
(function() {
    'use strict';
    
    // Wait for DOM to be ready
    function init() {
        // Remove any existing background
        const existing = document.getElementById('wave-background');
        if (existing) {
            existing.remove();
        }
        
        // Create container div
        const container = document.createElement('div');
        container.id = 'wave-background';
        container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            pointer-events: none;
            overflow: hidden;
        `;
        
        // Create SVG inline
        container.innerHTML = `
            <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#ff00ff;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#00ffff;stop-opacity:1" />
                    </linearGradient>
                    <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#ff0080;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#0080ff;stop-opacity:1" />
                    </linearGradient>
                    <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#ff4080;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#4080ff;stop-opacity:1" />
                    </linearGradient>
                </defs>
                
                <!-- Wave 1 -->
                <path fill="url(#waveGradient1)" opacity="0.6">
                    <animate attributeName="d" dur="10s" repeatCount="indefinite" 
                        values="M0,400 Q480,300 960,400 T1920,400 V0 H0 V400 Z;
                                M0,350 Q480,450 960,350 T1920,350 V0 H0 V350 Z;
                                M0,400 Q480,300 960,400 T1920,400 V0 H0 V400 Z"/>
                </path>
                
                <!-- Wave 2 -->
                <path fill="url(#waveGradient2)" opacity="0.4">
                    <animate attributeName="d" dur="8s" repeatCount="indefinite" 
                        values="M0,450 Q480,350 960,450 T1920,450 V0 H0 V450 Z;
                                M0,500 Q480,400 960,500 T1920,500 V0 H0 V500 Z;
                                M0,450 Q480,350 960,450 T1920,450 V0 H0 V450 Z"/>
                </path>
                
                <!-- Wave 3 -->
                <path fill="url(#waveGradient3)" opacity="0.3">
                    <animate attributeName="d" dur="12s" repeatCount="indefinite" 
                        values="M0,500 Q480,400 960,500 T1920,500 V0 H0 V500 Z;
                                M0,450 Q480,550 960,450 T1920,450 V0 H0 V450 Z;
                                M0,500 Q480,400 960,500 T1920,500 V0 H0 V500 Z"/>
                </path>
                
                <!-- Wave 4 -->
                <path fill="url(#waveGradient1)" opacity="0.2">
                    <animate attributeName="d" dur="15s" repeatCount="indefinite" 
                        values="M0,550 Q480,450 960,550 T1920,550 V0 H0 V550 Z;
                                M0,600 Q480,500 960,600 T1920,600 V0 H0 V600 Z;
                                M0,550 Q480,450 960,550 T1920,550 V0 H0 V550 Z"/>
                </path>
                
                <!-- Wave 5 -->
                <path fill="url(#waveGradient2)" opacity="0.1">
                    <animate attributeName="d" dur="18s" repeatCount="indefinite" 
                        values="M0,600 Q480,500 960,600 T1920,600 V0 H0 V600 Z;
                                M0,650 Q480,550 960,650 T1920,650 V0 H0 V650 Z;
                                M0,600 Q480,500 960,600 T1920,600 V0 H0 V600 Z"/>
                </path>
            </svg>
        `;
        
        // Insert into body
        document.body.insertBefore(container, document.body.firstChild);
        
        console.log('Wave background initialized');
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();