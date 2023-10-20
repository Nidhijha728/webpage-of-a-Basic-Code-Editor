const copyButton = document.getElementById('copy-button');
const saveButton = document.getElementById('save-button');
const lockButton = document.getElementById('lock-button');
const codeDisplay = document.querySelector('.code-display');

let isLocked = false;

// Copy button functionality
copyButton.addEventListener('click', () => {
    const codeToCopy = codeDisplay.innerText;
    navigator.clipboard.writeText(codeToCopy)
        .then(() => {
            alert('Code copied to clipboard!');
        })
        .catch((error) => {
            console.error('Copy failed: ', error);
        });
});

// Save button functionality (for demonstration, you can save it to localStorage)
saveButton.addEventListener('click', () => {
    const codeToSave = codeDisplay.innerText;
    localStorage.setItem('savedCode', codeToSave);
    alert('Code saved to local storage!');
});

// Lock/Unlock button functionality
lockButton.addEventListener('click', () => {
    isLocked = !isLocked;
    if (isLocked) {
        codeDisplay.setAttribute('contenteditable', 'false');
        lockButton.innerText = 'Unlock';
    } else {
        codeDisplay.setAttribute('contenteditable', 'true');
        lockButton.innerText = 'Lock';
    }
});

// Load previously saved code if available
const savedCode = localStorage.getItem('savedCode');
if (savedCode) {
    codeDisplay.innerText = savedCode;
}
