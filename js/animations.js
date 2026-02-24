document.addEventListener('DOMContentLoaded', () => {
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
    .from(".code-box", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out"
    }, "-=0.3");
console.log("Typing started");

function typeTerminalText() {
    const lines = [
        "import ghostv3", 
        "> [Ghost] Starting Ghost v3...",
        "> [Ghost] Loading modules...",
        "> [Ghost] Ghost v3 fully loaded — all modules OK"
    ];
    
    const container = document.getElementById('hero-terminal-text');
    const codeBox = document.querySelector('.code-box');
    if(codeBox) codeBox.style.opacity = 0; // hide initially
    
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
                setTimeout(typeLine, 30);
            } else {
                lineIndex++;
                charIndex = 0;
                setTimeout(typeLine, 400);
            }
        } else {
            // Animate code box in
            if(codeBox) {
                gsap.to(codeBox, {opacity: 1, y: -10, duration: 0.8, ease: "power3.out"});
            }
        }
    }
    typeLine();
}
