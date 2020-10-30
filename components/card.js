
const containerCard = document.querySelector('containerCard')
function createElementMain(){}
const guardia = document.createElement('img')
const anchorG = document.createElement('a')
anchorG.appendChild(guardia)
guardia.classList.add('det')
const detenuto = document.createElement('img')
detenuto.classList.add('guard')
const anchorD = document.createElement('a')
anchorD.appendChild(detenuto)

containerCard.appendChild(anchorG)
containerCard.appendChild(anchorD)


const load = () => {
    guardia.addEventListener('click', )
}

load();