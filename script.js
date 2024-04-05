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
            output = "Perintah tersedia: <br> - help: Menampilkan list perintah <br> - about: Tentang saya <br> - clear: Membersihkan terminal";
            break;
        case 'about':
            output = "<div style='display: flex; align-items: center;'><img src='assets/yarham.jpg' alt='Your Image' style='max-width: 30%; margin-top: 20px;'><p style='margin-left: 20px;'>I'm a Software Engineer</p></div>";
            break;
        case 'clear':
            // Hapus semua output kecuali teks awal dan teks di pre-terminal-output
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
    // Tambahkan output hanya jika bukan perintah 'clear'
    if (command !== 'clear') {
        const outputElement = document.createElement('p');
        outputElement.classList.add('terminal-output');
        outputElement.innerHTML = `[root@yarhamalfatih]# ${command}<br>${output}`;
        terminalBody.appendChild(outputElement);
    }
}
