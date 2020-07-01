var inputText = [];
//recommendation input
document.getElementById('fever').addEventListener('click', () => {
    inputText.push('Fever');
    console.log(inputText);
    inputPrint();
});
document.getElementById('vomit').addEventListener('click', () => {
    inputText.push('Vomiting');
    console.log(inputText);
    inputPrint();
});
document.getElementById('rest').addEventListener('click', () => {
    inputText.push('Restlessness');
    console.log(inputText);
    inputPrint();
});
document.getElementById('nausea').addEventListener('click', () => {
    inputText.push('Nausea');
    console.log(inputText);
    inputPrint();
});
document.getElementById('nose').addEventListener('click', () => {
    inputText.push('Runny Nose');
    console.log(inputText);
    inputPrint();
});

var inputPrint = () => {
    document.querySelector('.medInput').value = inputText;
};