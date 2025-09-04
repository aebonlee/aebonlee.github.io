// Dynamic Wave Background - loading.io style
(function() {
    'use strict';
    
    function init() {
        // Remove any existing background
        const existing = document.getElementById('wave-background');
        if (existing) {
            existing.remove();
        }
        
        // Create container
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
        
        // Create multiple animated wave layers with complex patterns
        container.innerHTML = `
            <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <!-- Multiple colorful gradients -->
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#ff00ff;stop-opacity:0.8" />
                        <stop offset="50%" style="stop-color:#ff0080;stop-opacity:0.6" />
                        <stop offset="100%" style="stop-color:#00ffff;stop-opacity:0.8" />
                    </linearGradient>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#8000ff;stop-opacity:0.7" />
                        <stop offset="50%" style="stop-color:#ff4080;stop-opacity:0.5" />
                        <stop offset="100%" style="stop-color:#0080ff;stop-opacity:0.7" />
                    </linearGradient>
                    <linearGradient id="grad3" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#ff6600;stop-opacity:0.6" />
                        <stop offset="50%" style="stop-color:#ff0066;stop-opacity:0.4" />
                        <stop offset="100%" style="stop-color:#6600ff;stop-opacity:0.6" />
                    </linearGradient>
                    <linearGradient id="grad4" x1="50%" y1="0%" x2="50%" y2="100%">
                        <stop offset="0%" style="stop-color:#00ff80;stop-opacity:0.5" />
                        <stop offset="50%" style="stop-color:#8000ff;stop-opacity:0.3" />
                        <stop offset="100%" style="stop-color:#ff8000;stop-opacity:0.5" />
                    </linearGradient>
                    <linearGradient id="grad5" x1="0%" y1="50%" x2="100%" y2="50%">
                        <stop offset="0%" style="stop-color:#ff0040;stop-opacity:0.6" />
                        <stop offset="25%" style="stop-color:#4000ff;stop-opacity:0.4" />
                        <stop offset="75%" style="stop-color:#00ff40;stop-opacity:0.4" />
                        <stop offset="100%" style="stop-color:#ff4000;stop-opacity:0.6" />
                    </linearGradient>
                </defs>
                
                <!-- Wave Layer 1 - Fast moving, top area -->
                <path fill="url(#grad1)" opacity="0.8">
                    <animate attributeName="d" dur="3s" repeatCount="indefinite" 
                        values="M0,200 Q240,100 480,200 T960,200 Q1440,100 1920,200 V0 H0 Z;
                                M0,150 Q240,250 480,150 T960,150 Q1440,250 1920,150 V0 H0 Z;
                                M0,200 Q240,100 480,200 T960,200 Q1440,100 1920,200 V0 H0 Z"/>
                </path>
                
                <!-- Wave Layer 2 - Medium speed, overlapping -->
                <path fill="url(#grad2)" opacity="0.6">
                    <animate attributeName="d" dur="4s" repeatCount="indefinite" 
                        values="M0,300 Q320,200 640,300 T1280,300 Q1600,200 1920,300 V0 H0 Z;
                                M0,350 Q320,450 640,350 T1280,350 Q1600,450 1920,350 V0 H0 Z;
                                M0,250 Q320,150 640,250 T1280,250 Q1600,150 1920,250 V0 H0 Z;
                                M0,300 Q320,200 640,300 T1280,300 Q1600,200 1920,300 V0 H0 Z"/>
                </path>
                
                <!-- Wave Layer 3 - Complex curve pattern -->
                <path fill="url(#grad3)" opacity="0.5">
                    <animate attributeName="d" dur="6s" repeatCount="indefinite" 
                        values="M0,400 Q160,300 320,400 Q480,500 640,400 Q800,300 960,400 Q1120,500 1280,400 Q1440,300 1600,400 Q1760,500 1920,400 V0 H0 Z;
                                M0,450 Q160,550 320,450 Q480,350 640,450 Q800,550 960,450 Q1120,350 1280,450 Q1440,550 1600,450 Q1760,350 1920,450 V0 H0 Z;
                                M0,380 Q160,280 320,380 Q480,480 640,380 Q800,280 960,380 Q1120,480 1280,380 Q1440,280 1600,380 Q1760,480 1920,380 V0 H0 Z;
                                M0,400 Q160,300 320,400 Q480,500 640,400 Q800,300 960,400 Q1120,500 1280,400 Q1440,300 1600,400 Q1760,500 1920,400 V0 H0 Z"/>
                </path>
                
                <!-- Wave Layer 4 - Slow, large waves -->
                <path fill="url(#grad4)" opacity="0.4">
                    <animate attributeName="d" dur="8s" repeatCount="indefinite" 
                        values="M0,500 Q480,350 960,500 T1920,500 V0 H0 Z;
                                M0,550 Q480,650 960,550 T1920,550 V0 H0 Z;
                                M0,450 Q480,300 960,450 T1920,450 V0 H0 Z;
                                M0,580 Q480,680 960,580 T1920,580 V0 H0 Z;
                                M0,500 Q480,350 960,500 T1920,500 V0 H0 Z"/>
                </path>
                
                <!-- Wave Layer 5 - Very slow, bottom layer -->
                <path fill="url(#grad5)" opacity="0.3">
                    <animate attributeName="d" dur="12s" repeatCount="indefinite" 
                        values="M0,600 Q640,450 1280,600 Q1600,700 1920,600 V0 H0 Z;
                                M0,650 Q640,800 1280,650 Q1600,550 1920,650 V0 H0 Z;
                                M0,580 Q640,420 1280,580 Q1600,680 1920,580 V0 H0 Z;
                                M0,620 Q640,770 1280,620 Q1600,520 1920,620 V0 H0 Z;
                                M0,600 Q640,450 1280,600 Q1600,700 1920,600 V0 H0 Z"/>
                </path>
                
                <!-- Additional smaller waves for complexity -->
                <path fill="url(#grad1)" opacity="0.2">
                    <animate attributeName="d" dur="2s" repeatCount="indefinite" 
                        values="M0,250 Q120,200 240,250 Q360,300 480,250 Q600,200 720,250 Q840,300 960,250 Q1080,200 1200,250 Q1320,300 1440,250 Q1560,200 1680,250 Q1800,300 1920,250 V0 H0 Z;
                                M0,280 Q120,330 240,280 Q360,230 480,280 Q600,330 720,280 Q840,230 960,280 Q1080,330 1200,280 Q1320,230 1440,280 Q1560,330 1680,280 Q1800,230 1920,280 V0 H0 Z;
                                M0,250 Q120,200 240,250 Q360,300 480,250 Q600,200 720,250 Q840,300 960,250 Q1080,200 1200,250 Q1320,300 1440,250 Q1560,200 1680,250 Q1800,300 1920,250 V0 H0 Z"/>
                </path>
                
                <!-- Final detail layer -->
                <path fill="url(#grad2)" opacity="0.15">
                    <animate attributeName="d" dur="5s" repeatCount="indefinite" 
                        values="M0,350 Q96,320 192,350 Q288,380 384,350 Q480,320 576,350 Q672,380 768,350 Q864,320 960,350 Q1056,380 1152,350 Q1248,320 1344,350 Q1440,380 1536,350 Q1632,320 1728,350 Q1824,380 1920,350 V0 H0 Z;
                                M0,370 Q96,400 192,370 Q288,340 384,370 Q480,400 576,370 Q672,340 768,370 Q864,400 960,370 Q1056,340 1152,370 Q1248,400 1344,370 Q1440,340 1536,370 Q1632,400 1728,370 Q1824,340 1920,370 V0 H0 Z;
                                M0,350 Q96,320 192,350 Q288,380 384,350 Q480,320 576,350 Q672,380 768,350 Q864,320 960,350 Q1056,380 1152,350 Q1248,320 1344,350 Q1440,380 1536,350 Q1632,320 1728,350 Q1824,380 1920,350 V0 H0 Z"/>
                </path>
            </svg>
        `;
        
        // Insert into body
        document.body.insertBefore(container, document.body.firstChild);
        
        console.log('Dynamic wave background initialized');
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();