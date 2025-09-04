// SVG Wave Background Animation
(function() {
    'use strict';
    
    // Create SVG element
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.id = 'wave-background';
    svg.style.position = 'fixed';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.zIndex = '-1';
    svg.style.pointerEvents = 'none';
    
    // Set SVG attributes
    svg.setAttribute('viewBox', '0 0 1920 800');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    
    // Create linear gradient
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.id = 'wave-gradient';
    gradient.setAttribute('x1', '0');
    gradient.setAttribute('y1', '0');
    gradient.setAttribute('x2', '1');
    gradient.setAttribute('y2', '0');
    
    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0');
    stop1.setAttribute('stop-color', '#ff00ff');
    
    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '1');
    stop2.setAttribute('stop-color', '#00ffff');
    
    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    svg.appendChild(defs);
    
    // Create wave paths
    const wavePaths = [
        "M 0 0 L 0 558.793 Q 192 515.045 384 475.466 T 768 495.077 T 1152 418.429 T 1536 293.619 T 1920 362.73 L 1920 0 Z",
        "M 0 0 L 0 561.123 Q 192 533.87 384 512.364 T 768 557.517 T 1152 486.471 T 1536 384.961 T 1920 359.033 L 1920 0 Z",
        "M 0 0 L 0 706.762 Q 192 611.512 384 568.987 T 768 543.425 T 1152 499.679 T 1536 346.93 T 1920 295.467 L 1920 0 Z",
        "M 0 0 L 0 598.536 Q 192 563.596 384 537.696 T 768 415.302 T 1152 437.876 T 1536 378.223 T 1920 235.81 L 1920 0 Z",
        "M 0 0 L 0 642.712 Q 192 620.558 384 590.664 T 768 482.853 T 1152 374.021 T 1536 329.105 T 1920 312.818 L 1920 0 Z"
    ];
    
    const paths = [];
    
    // Create animated wave paths
    wavePaths.forEach((pathData, index) => {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathData);
        path.setAttribute('fill', 'url(#wave-gradient)');
        path.setAttribute('opacity', '0.4');
        path.style.transformOrigin = 'center';
        
        // Add animation
        const animateTransform = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
        animateTransform.setAttribute('attributeName', 'transform');
        animateTransform.setAttribute('type', 'translate');
        animateTransform.setAttribute('values', `0,0; ${10 + index * 5},${5 + index * 2}; 0,0`);
        animateTransform.setAttribute('dur', `${8 + index * 2}s`);
        animateTransform.setAttribute('repeatCount', 'indefinite');
        
        const animateOpacity = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animateOpacity.setAttribute('attributeName', 'opacity');
        animateOpacity.setAttribute('values', '0.4; 0.6; 0.4');
        animateOpacity.setAttribute('dur', `${6 + index * 1.5}s`);
        animateOpacity.setAttribute('repeatCount', 'indefinite');
        
        path.appendChild(animateTransform);
        path.appendChild(animateOpacity);
        
        paths.push(path);
        svg.appendChild(path);
    });
    
    // Insert SVG as first element in body
    document.body.insertBefore(svg, document.body.firstChild);
    
    // Handle window resize
    function handleResize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        svg.setAttribute('viewBox', `0 0 ${Math.max(1920, width)} ${Math.max(800, height)}`);
    }
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    
    // Optional: Add mouse interaction
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        paths.forEach((path, index) => {
            const offset = (mouseX - 0.5) * 20 + (mouseY - 0.5) * 10;
            path.style.transform = `translateX(${offset * (index + 1)}px)`;
        });
    });
    
})();