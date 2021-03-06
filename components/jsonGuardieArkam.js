const containerGuard = document.getElementById('containerGuardie')
const containerDet = document.getElementById('containerDetenuti')
const template1 = document.getElementById('guardie')
const btnAdd1 = document.getElementById('cardG')

class Guardie{
    static async getGuardie(){

        const response = await fetch('json/jsonGuardie.json');
        const guardie = await response.json();
        //return guardie
         console.log(guardie); 
        
        guardie.map(guardia =>{
            const cardGuardia = document.importNode(template1.content, true);
            //console.log(.querySelector('.textContainer'))
            cardGuardia.querySelector('h2').textContent = 'Nome: ' + guardia.nome;
            cardGuardia.querySelector('h3').textContent = 'Cognome: ' + guardia.cognome;
            cardGuardia.querySelector('strong').textContent = 'Data Nascita: ' + guardia.dataNascita;
            return containerGuard.appendChild(cardGuardia)
            
        })
        
    }

    
    static loadHandler1(){
        Guardie.getGuardie()
        containerDet.style.display = 'none'
        containerGuard.style.display = 'flex'
    }

}

//Guardie.getGuardie().then(res => console.log(res));

btnAdd1.addEventListener('click',Guardie.loadHandler1)
