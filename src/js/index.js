const initialText = document.getElementById('initial-text');
const scrambleLetter = document.getElementById('scramble-letter');
const redactSymbols = document.getElementById('redact-symbols');
const scrambleValue = document.getElementById('scramble-value');
const redactBtn = document.getElementById('redact-btn');

//SCRAMBLE TEXT
function scrambleString(inputString, scrambleLetters, redactSymbols) {
    const scrambled = [];
   
    for (let i = 0; i < inputString.length; i++) {
       const letter = inputString[i];
       if (scrambleLetters.includes(letter)) {
         const randomIndex = Math.floor(Math.random() * redactSymbols.length);
         scrambled.push(redactSymbols[randomIndex]);
       } else {
         scrambled.push(letter);
       }
    }
    scrambleValue.innerHTML = scrambled.join('');
}



// Redact Button Action
redactBtn.addEventListener('click', e=>{
    e.preventDefault();
    scrambleString(
        initialText.value,
        scrambleLetter.value.split(','),
        redactSymbols.value.split(',')
    );
});

//Copy to clipboard
const clipboard = new ClipboardJS('#copy');
clipboard.on('success', function(e){
    console.info('Action', e.action);
    console.info('Text', e.text);
    console.info('Trigger', e.trigger);

    e.clearSelection();
});
clipboard.on('error', function(e){
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});