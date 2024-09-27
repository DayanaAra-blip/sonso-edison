const siButton = document.getElementById('si');
const noButton = document.getElementById('no');
const respuestaDiv = document.getElementById('respuesta');
const corazonesDiv = document.getElementById('corazones');
const saposDiv = document.getElementById('sapos');

let noCounter = 0;

function crearCorazon() {
    const corazon = document.createElement('div');
    corazon.innerHTML = '❤';
    corazon.style.left = Math.random() * 100 + 'vw';
    corazon.style.animationDuration = (Math.random() * 5 + 2) + 's';
    corazonesDiv.appendChild(corazon);
    setTimeout(() => corazonesDiv.removeChild(corazon), 7000);
}

siButton.addEventListener('click', () => {
    respuestaDiv.innerHTML = 'Ya mrd mucha wbda digo sisi tamo!';
    saposDiv.innerHTML = '🐸🐸';
    saposDiv.style.display = 'block';
    for (let i = 0; i < 20; i++) {
        crearCorazon();
    }
});

noButton.addEventListener('click', () => {
    noCounter++;
    switch (noCounter) {
        case 1:
            respuestaDiv.innerHTML = 'No vamos a arreglar?';
            break;
        case 2:
            respuestaDiv.innerHTML = 'Xfiii arreglemos';
            break;
        case 3:
            respuestaDiv.innerHTML = 'OE concha, arreglemos mrd';
            break;
        case 4:
            respuestaDiv.innerHTML = 'Ya mrd, arreglamos';
            break;
        default:
            noCounter = 0; // Resetear si se llega al cuarto no
            respuestaDiv.innerHTML = '';
    }
});