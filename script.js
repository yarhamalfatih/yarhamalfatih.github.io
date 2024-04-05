const terminalBody = document.getElementById('terminalBody');
const inputField = document.getElementById('inputField');

inputField.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const command = inputField.value.trim();
        executeCommand(command);
        inputField.value = '';
    }
});

function executeCommand(command) {
    let output = '';
    switch (command) {
        case 'help':
            output = "Perintah tersedia: <br> 'about': Menampilkan tentang saya <br> 'skills': Menampilkan skill saya <br> 'instagram': Mengunjungi profil Instagram saya <br> 'clear': Membersihkan terminal";
            break;
        case 'about':
            output = "<div style='display: flex; align-items: center;'><img src='assets/yarham.jpg' alt='Your Image' style='max-width: 50%; margin-top: 20px;'><p style='margin-left: 45px;'>I'm a Software Engineer</p></div>";
            break;
        case 'skills':
            output = "Skill saya:<br>- HTML<br>- CSS<br>- C#<br>- Java<br>- JavaScript<br>- Python<br>- PHP";
            break;
        case 'instagram':
            window.open('https://www.instagram.com/yarhamalfatih/', '_blank');
            output = "Mengarahkan Anda ke profil Instagram saya...";
            break;
        case 'clear':
            const terminalOutputs = document.querySelectorAll('.terminal-output');
            terminalOutputs.forEach(output => {
                if (!output.classList.contains('pre-terminal-output') && output.innerHTML !== '[root@yarhamalfatih:~]# start https://yarhamalfatih.github.io' && output.innerHTML !== '[root@yarhamalfatih:~]# Ketik \'help\' untuk melihat list perintah') {
                    output.remove();
                }
            });
            break;
        default:
            output = `Perintah ${command} tidak tersedia`;
            break;
    }

    if (command !== 'clear') {
        const outputElement = document.createElement('p');
        outputElement.classList.add('terminal-output');
        outputElement.innerHTML = `[root@yarhamalfatih]# ${command}<br>${output}`;
        terminalBody.appendChild(outputElement);
    }
}