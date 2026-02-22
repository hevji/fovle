// demo.js - Handles the interactive Roblox GUI simulation
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.gui-btn');
    const consoleOutput = document.getElementById('demo-console');
    const activePlayer = document.querySelector('.player-list .active').textContent;

    if (!buttons || !consoleOutput) return;

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const action = e.target.getAttribute('data-action');
            executeMockCommand(action, activePlayer);
        });
    });

    function executeMockCommand(action, target) {
        // Append input to console
        appendLog(`> Executing: ${action}(${target})`, '#fff');

        // Simulate processing delay
        setTimeout(() => {
            let responseText = "";
            let responseColor = "#4af626"; // Green success

            switch(action) {
                case 'Kick':
                    responseText = `Success: ${target} was removed from the server.`;
                    break;
                case 'Ban':
                    responseText = `Success: ${target} data updated in BanDataStore.`;
                    break;
                case 'Teleport':
                    responseText = `Success: Teleported to ${target}.`;
                    break;
                case 'Set Rank':
                    responseText = `Update: Rank permissions modified for ${target}.`;
                    responseColor = "#ffbd2e"; // Yellow update
                    break;
            }

            appendLog(`> ${responseText}`, responseColor);
        }, 600);
    }

    function appendLog(text, color) {
        const span = document.createElement('span');
        span.textContent = text;
        span.style.color = color;
        consoleOutput.appendChild(span);
        
        // Auto-scroll to bottom
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }
});
