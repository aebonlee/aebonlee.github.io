// Wave Animation Background
(function() {
    'use strict';
    
    // Create canvas element
    const canvas = document.createElement('canvas');
    canvas.id = 'wave-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    
    // Insert canvas as first element in body
    document.body.insertBefore(canvas, document.body.firstChild);
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Wave configuration
    const waves = [
        {
            y: canvas.height * 0.5,
            length: 0.01,
            amplitude: 50,
            frequency: 0.01,
            speed: 0.02,
            color: { r: 102, g: 126, b: 234 } // #667eea
        },
        {
            y: canvas.height * 0.6,
            length: 0.015,
            amplitude: 40,
            frequency: 0.015,
            speed: 0.025,
            color: { r: 118, g: 75, b: 162 } // #764ba2
        },
        {
            y: canvas.height * 0.7,
            length: 0.02,
            amplitude: 30,
            frequency: 0.02,
            speed: 0.03,
            color: { r: 134, g: 96, b: 194 } // Mixed color
        }
    ];
    
    let increment = 0;
    
    // Animation function
    function animate() {
        requestAnimationFrame(animate);
        
        // Clear canvas with gradient background
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, 'rgba(102, 126, 234, 0.1)');
        gradient.addColorStop(0.5, 'rgba(118, 75, 162, 0.1)');
        gradient.addColorStop(1, 'rgba(134, 96, 194, 0.1)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw waves
        waves.forEach((wave, index) => {
            ctx.beginPath();
            ctx.moveTo(0, canvas.height);
            
            // Calculate wave points
            for (let i = 0; i <= canvas.width; i++) {
                const y = wave.y + 
                    Math.sin(i * wave.length + increment) * wave.amplitude * 
                    Math.sin(increment * wave.frequency);
                
                if (i === 0) {
                    ctx.moveTo(i, y);
                } else {
                    ctx.lineTo(i, y);
                }
            }
            
            // Close path and fill
            ctx.lineTo(canvas.width, canvas.height);
            ctx.lineTo(0, canvas.height);
            ctx.closePath();
            
            // Create gradient for each wave
            const waveGradient = ctx.createLinearGradient(0, wave.y - wave.amplitude, 0, canvas.height);
            const opacity = 0.3 - (index * 0.05);
            waveGradient.addColorStop(0, `rgba(${wave.color.r}, ${wave.color.g}, ${wave.color.b}, ${opacity})`);
            waveGradient.addColorStop(0.5, `rgba(${wave.color.r}, ${wave.color.g}, ${wave.color.b}, ${opacity * 0.5})`);
            waveGradient.addColorStop(1, `rgba(${wave.color.r}, ${wave.color.g}, ${wave.color.b}, 0)`);
            
            ctx.fillStyle = waveGradient;
            ctx.fill();
            
            // Update wave position
            wave.y = canvas.height * (0.5 + index * 0.1) + Math.sin(increment * 0.5) * 20;
        });
        
        increment += 0.02;
    }
    
    // Particle system for additional visual effect
    const particles = [];
    const particleCount = 50;
    
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5;
            this.fadeSpeed = Math.random() * 0.01 + 0.005;
            this.growing = true;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.growing) {
                this.opacity += this.fadeSpeed;
                if (this.opacity >= 0.5) {
                    this.growing = false;
                }
            } else {
                this.opacity -= this.fadeSpeed;
                if (this.opacity <= 0) {
                    this.reset();
                }
            }
            
            // Wrap around screen
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.fill();
        }
    }
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    // Enhanced animation with particles
    function animateWithParticles() {
        requestAnimationFrame(animateWithParticles);
        
        // Clear and draw gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, 'rgba(102, 126, 234, 0.9)');
        gradient.addColorStop(0.5, 'rgba(118, 75, 162, 0.9)');
        gradient.addColorStop(1, 'rgba(134, 96, 194, 0.9)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw waves
        waves.forEach((wave, index) => {
            ctx.beginPath();
            
            for (let i = 0; i <= canvas.width; i += 5) {
                const y = wave.y + 
                    Math.sin(i * wave.length + increment) * wave.amplitude * 
                    Math.sin(increment * wave.frequency);
                
                if (i === 0) {
                    ctx.moveTo(i, y);
                } else {
                    ctx.lineTo(i, y);
                }
            }
            
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 - index * 0.05})`;
            ctx.lineWidth = 2;
            ctx.stroke();
            
            wave.y = canvas.height * (0.5 + index * 0.1) + Math.sin(increment * 0.5) * 20;
        });
        
        // Update and draw particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        increment += 0.015;
    }
    
    // Start animation
    animateWithParticles();
})();