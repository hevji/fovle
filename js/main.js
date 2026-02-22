// main.js - Handles core layout functions and background canvas
document.addEventListener('DOMContentLoaded', () => {
    initGridCanvas();
});

function initGridCanvas() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let time = 0; // Time variable for the pulse effect

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    let mouseX = width / 2;
    let mouseY = height / 2;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function draw() {
        ctx.clearRect(0, 0, width, height);
        time += 0.015; // Speed of the pulse
        
        const gridSize = 45;
        
        // Calculate a sine wave pulse between 0.1 and 0.4 opacity
        const pulseOpacity = 0.1 + (Math.abs(Math.sin(time)) * 0.3);
        
        // Dark crimson grid color (#4B0000 converted to RGBA)
        ctx.strokeStyle = `rgba(75, 0, 0, ${pulseOpacity})`; 
        ctx.lineWidth = 1;

        // Draw Grid
        for (let x = 0; x < width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }

        for (let y = 0; y < height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }

        // Draw active tracking glow near mouse
        const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 350);
        gradient.addColorStop(0, 'rgba(139, 0, 0, 0.15)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        requestAnimationFrame(draw);
    }

    draw();
}
