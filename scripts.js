// Get references to the terminal elements
const commandInput = document.getElementById('command-input');
const terminalOutput = document.getElementById('terminal-output');

// Function to handle commands
function processCommand(command) {
    let output = document.createElement('p');
    
    // Simulate pages using simple commands
    switch(command.toLowerCase()) {
        case 'home':
            output.textContent = "Welcome to the Home page!";
            break;
        case 'about':
            output.textContent = "This is the About page. Here's more info about me.";
            break;
        case 'projects':
            output.textContent = "Here are my projects...";
            break;
        case 'socials':
            output.textContent = "Here are my social media handles...";
            break;
        case 'other':
            output.textContent = "Here's something else...";
            break;
        default:
            output.textContent = "Command not recognized. Try 'home', 'about', 'projects', 'socials', or 'other'.";
    }
    
    // Append the output to the terminal
    terminalOutput.appendChild(output);
    
    // Scroll to the bottom of the terminal output
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

// Listen for Enter key press on the command input
commandInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const command = commandInput.value;
        processCommand(command);
        commandInput.value = ''; // Clear the input
    }
});

// Add click events to the command links
document.querySelectorAll('a[data-command]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent link from navigating
        processCommand(link.getAttribute('data-command')); // Process the command
    });
});

function processCommand(command) {
    switch(command.toLowerCase()) {
        case 'home':
            window.location.href = 'home.html';
            break;
        case 'about':
            window.location.href = 'about.html';
            break;
        case 'projects':
            window.location.href = 'project.html';
            break;
        case 'socials':
            window.location.href = 'social.html';
            break;
        case 'other':
            window.location.href = 'other.html';
            break;
        default:
            output.innerHTML = "<p>Command not recognized. Try 'home', 'about', 'projects', 'socials', or 'other'.</p>";
    }
}

