let moleculeInput = "";
document.addEventListener('keydown', function (e) {
    allowedCharsRegex = /^[a-zA-Z0-9=\-]$/;
    movementRegex = /^[wasdf]$/i;
    if (allowedCharsRegex.test(e.key) && !movementRegex.test(e.key)) {
        console.log("Key:", e.key);
        moleculeInput += e.key;
    }
    if (e.key === 'Backspace') {
        if (moleculeInput.length > 0) {
            moleculeInput = moleculeInput.slice(0, moleculeInput.length - 1);
        }
    }
    if (e.key === 'Enter') {
        console.log("Enter:", moleculeInput);
    }
    console.log("Molecule Input:", moleculeInput);
    document.getElementById('keyboard').setAttribute('super-keyboard', { value: moleculeInput });
});

