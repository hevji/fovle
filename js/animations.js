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

    function typeTerminalText() {
        const lines = [
            "loadstring(game:HttpGet("https://fovle.online/GhostV3.txt"))()",
            "> [Ghost] Starting Ghost v3...",
            "> [Ghost] Rayfield loaded",
            "> [Ghost] Ghost v3 fully loaded — all modules OK"
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
                    setTimeout(typeLine, 30);
                } else {
                    lineIndex++;
                    charIndex = 0;
                    setTimeout(typeLine, 400);
                }
            }
        }
        typeLine();
    }
});
