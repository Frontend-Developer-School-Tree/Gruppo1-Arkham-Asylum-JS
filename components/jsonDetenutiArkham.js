const containerDetenuti = document.getElementById('containerDetenuti')
const containerGuardie = document.getElementById('containerGuardie')
const template = document.getElementById('detenuti')
const btnAdd = document.getElementById('cardD')

//const container3 = document.getElementById('containerContatore')
//const template3 = document.getElementById('templateDetenuti')
const btnAddDetenuto=document.getElementById('btnDetenutiAggungi')
const formAdd=document.getElementById('formAdd') ///da vericare
const modalAddDetenuto=document.getElementById('modalContainer modCont')

class Detenuti{
    static async getDetenuti(){
        const response = await fetch('https://denebvoice.com/api_gotham/gothamCity.json')
        const detenutis = await response.json();
        console.log(detenutis);
        
        
     
         //calcola la data di nascita
         function dataArresto(){
            let day=Math.floor(Math.random() *31 +1);
            let mese=Math.floor(Math.random() *12 +1);
            let anno=Math.floor(Math.random() *70 +1949);
            return day+"/"+mese+"/"+anno;
         }

         function dataScarcerazione(dataArresto){
            let day=Math.floor(Math.random() *31 +1);
            let mese=Math.floor(Math.random() *12 +1);
            let anno=Math.floor(Math.random() *20 +2020);
            return day+"/"+mese+"/"+anno;
         }
         /*tipi di reati*/
         const reati=['rapina','estorsione','omicidio','genocidio']
         function reatiCommessi(reati){
            let x=Math.floor(Math.random() *4)
            return reati[x];
         }
         const id=1;
         function idRandom(){
            let x=Math.floor(Math.random() *100000+1000000)
            return x
         }
         
         /** */

        //detenutis.push(data)
        detenutis.map(dete=>{
           // const id=1;
            //per aggiungere una nuova proprietà ad un json
            dete.Id=idRandom();
            dete.dataArresto=dataArresto();
            dete.dataScarcerazione=dataScarcerazione();
            dete.ReatoCommesso=reatiCommessi(reati);
           // console.log(dete)
            const cardDetenuti = document.importNode(detenuti.content, true);
            cardDetenuti.querySelector('h2').textContent ='Nome: '+ dete.nomePersonaggio
            cardDetenuti.querySelector('h3').textContent ='Razza: '+ dete.razza
            cardDetenuti.querySelector('strong').textContent ='Livello di pericolo: '+ dete.livelloDiPericolo
            cardDetenuti.querySelector('h4').textContent= 'caratteristiche fische: '
            cardDetenuti.getElementById('1').textContent= 'colore occhi: '+ dete.caratteristicheFisiche.coloreOcchi
            cardDetenuti.getElementById('2').textContent= 'colore capelli: '+ dete.caratteristicheFisiche.coloreCapelli
            cardDetenuti.getElementById('3').textContent= 'Altezza: '+ dete.caratteristicheFisiche.altezza
            cardDetenuti.getElementById('4').textContent= 'Peso: '+ dete.caratteristicheFisiche.peso
            cardDetenuti.getElementById('5').textContent= 'data Arresto: '+ dete.dataArresto
            cardDetenuti.getElementById('6').textContent= 'data Scarcerazione: '+ dete.dataScarcerazione
            cardDetenuti.getElementById('7').textContent= 'Reato Commesso: '+ dete.ReatoCommesso
            cardDetenuti.getElementById('8').textContent= 'Id: '+ dete.Id;
            return containerDetenuti.appendChild(cardDetenuti)
        })
    }
 
    static loadHandler(){
        Detenuti.getDetenuti()
        containerDetenuti.style.display = 'flex'
        containerGuardie.style.display = 'none'
        
        
    }

    // ContatoreDetenuti(){
    //     for (let a = 0; a < detenutis.length; a++) {
    //         let contatore = +1;
    //         console.log(contantore)
            
    //     }
        
    // }

    addDetenuto=(e)=>{
        // se i valori non sono vuoi
    
    e.preventDefault();
    console.log(e);
    if(e.submitter.id == 'btnDetenutiAggiungi'){
        if(nomeCarcerato.value !== ''
        && razza.value !== ''
        && selectLivello.value !== ''
        && altezza !== ''
        && peso !== ''
        && arresto !== ''
        && scarcerazione !== ''
        && reato !== ''
        && idDetenuto !== ''
        ){
            // aggiungo i valori di input al mio oggetto
            detenutoObj = {
                /*
                id:randomId(1,99), // todo da vedere dopo
                title: titoloValue.value,
                tema: temaValue.value,
                livello: livelloValue.value,
                img: imgValue.value*/
            }
            // stampo l'oggetto
            console.log(detenutoObj);
            // effettuo il push dell'oggetto
            // courseArray.push(detenutoObj);
            // console.log(courseArray);
            return containerDetenuti.appendChild(detenutoObj)
        }
      }  

}

}


btnAdd.addEventListener('click', Detenuti.loadHandler)

formAdd.addEventListener('submit',Detenuti.addDetenuto)