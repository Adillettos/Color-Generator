const refreshBtn = document.querySelector('.refresh-btn');
const container = document.querySelector('.container')

const maxPaletteBoxes = 8;

const generatePalitre = () => {
    container.innerHTML = '';

    for(let i = 0; i < maxPaletteBoxes; i++){
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, '0')}`

        const color = document.createElement('li');
        color.classList.add('color')
        color.innerHTML = `<div class='rect-box' style='background-color: ${randomHex};'></div>
                            <span class='hex-value'>${randomHex}</span>`;
        color.addEventListener('click', () => copyColor(color, randomHex))
        container.appendChild(color);
    }
}

const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector('.hex-value');
    navigator.clipboard.writeText(hexVal).then(()=> {
        colorElement.innerText = 'Copied';
        setTimeout(() => {
            colorElement.innerText = hexVal; 
        }, 1000)
    }).catch(()=> alert('Failed to copy the color code!'))

}

refreshBtn.addEventListener('click', generatePalitre);


const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('change', function() {
    if(this.checked){
        document.body.classList.add('dark')
    }else {
        document.body.classList.remove('dark')
    }
})