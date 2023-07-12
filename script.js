function generate() {
    let length = parseInt(document.getElementById('length').value);
    let quantity = parseInt(document.getElementById('quantity').value);
    let output = document.getElementById('output');
    let downloadLink = document.getElementById('downloadLink');

    let maxCombinations = Math.pow(36, length);
    if (quantity > maxCombinations) {
        output.innerText = `Error: The quantity requested (${quantity}) exceeds the number of possible combinations (${maxCombinations}).`;
        return;
    }

    let strings = new Set();

    while (strings.size < quantity) {
        let randomString = Math.random().toString(36).substring(2, 2 + length);
        if (!strings.has(randomString)) {
            strings.add(randomString);
        }
    }

    let text = Array.from(strings).join('\n');
    output.innerText = text;

    let file = new Blob([text], { type: 'text/plain' });
    downloadLink.href = URL.createObjectURL(file);
    downloadLink.download = 'strings.txt';
    downloadLink.style.display = 'block';
}
