// animations.js - Handles GSAP ScrollTrigger and typing effects
document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Hero Animations
    const heroTl = gsap.timeline();
    
    heroTl.from(".hero-title", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    })
    .from(".hero-subtitle", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
    }, "-=0.4")
    .from(".hero-actions", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
    }, "-=0.4")
    .from(".terminal-mockup", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        onComplete: typeTerminalText
    }, "-=0.2");

    // Feature Cards Stagger Animation
    gsap.from(".feature-card", {
        scrollTrigger: {
            trigger: ".features",
            start: "top 75%",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out"
    });

    // Demo Section Reveal
    gsap.from(".demo-container", {
        scrollTrigger: {
            trigger: ".demo",
            start: "top 70%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });

    // Terminal Typing Effect logic
    function typeTerminalText() {
        const lines = [
            "require(game.ServerScriptService.UAP_Core).Init()",
            "> Booting Universal Admin Panel v2.4.1...",
            "> Loading Modules: [Moderation, Ranks, Logging]",
            "> Success: Framework initialized securely.",
            "> Awaiting input..."
        ];
        
        const container = document.getElementById('hero-terminal-text');
        if(!container) return;
        
        let lineIndex = 0;
        let charIndex = 0;

        function typeLine() {
            if (lineIndex < lines.length) {
                if (charIndex === 0) {
                    const p = document.createElement('div');
                    container.appendChild(p);
                }
                
                const currentLineElement = container.lastChild;
                currentLineElement.innerHTML = lines[lineIndex].substring(0, charIndex + 1);
                charIndex++;

                if (charIndex < lines[lineIndex].length) {
                    setTimeout(typeLine, 30); // Typing speed
                } else {
                    lineIndex++;
                    charIndex = 0;
                    setTimeout(typeLine, 400); // Delay between lines
                }
            }
        }
        typeLine();
    }
});
