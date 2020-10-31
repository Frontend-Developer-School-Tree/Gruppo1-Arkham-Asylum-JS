/*
dichiarazione costanti e variabili
*/
const users = [{username:'admin',password:'admin', nome:'admin', cognome: 'admin'},
                {username: 'Domenico', password:'admin',nome:'Domenico',cognome:'admin'},
                {username:'Francesco',password:'admin',nome:'Francesco',cognome:'Coscarella'},
                {username:'Luca',password:'admin',nome:'Luca',cognome:'admin'},
                {username:'Salvatore',password:'admin',nome:'Salvatore',cognome:'admin'}
]
const btnOpenModal = document.querySelector('#btnLogin');
const btnCloseModal= document.querySelector('#btnClose');
const btnSubmitModal = document.querySelector('#login');
const btnSubmit = document.querySelector('#loginBtn');
const contCard = document.querySelector('#containerCard')
const tit = document.querySelector('#titlePage')
/// mia parte
const usernameModal = document.getElementById('username')
const pswModal = document.getElementById('pwd')
const openModal=document.querySelector('#modalContainer')
const pwdField=document.querySelector('#pwd')
const inField=document.querySelector('#username')

const headCont = document.getElementById('headerContainer')
const inLogin = document.getElementById('#invLogin')



class Form{
    constructor(username,password){
        this.username= username;
        this.password= password;
    }    

    
}

const handleOpenModal= (e) =>{   
    openModal.classList.add('modalVisible');
    e.preventDefault();
    console.log(e)
    //load();
}

  const  loginSubmit=(e)=>{
        e.preventDefault();
        //console.log(e);
        //modalLogin.classList.add('modalVisible');
        if(e.submitter.id == 'loginBtn'){
             if(usernameModal.value !== ''
             && pswModal.value !== '')
             {
                // aggiungo i valori di input al mio oggetto
                loginObj = {
                     user: usernameModal.value,
                     pwd: pswModal.value
                    }
            //stampo l'oggetto
           // console.log(loginObj);
                let bool1=false;
                users.forEach(elem =>{
                    if((elem.username==loginObj.user)&&(elem.password==loginObj.pwd)){
                               bool1=true;
                    }
                })
                if(bool1==true){
                    console.log("accesso eseguito correttamente");
                    
                    openModal.remove();
                    btnOpenModal.remove();
                    tit.remove();
                    contCard.classList.add('modalVisible')
                    headCont.appendChild(contCard)
                }
                else{
                    console.log("errore")
                    handleClearField();
                    inField.classList.add('inputError');
                    pwdField.classList.add('inputError');
                    inLogin.classList.add('visible');
                }
                //   if((elem.username==loginObj.user)&&(elem.password==loginObj.pwd)){
                //       console.log("accesso eseguito correttamente");
 
                //   }
                // if((users.includes((loginObj.user)))&&(users.includes((loginObj.pwd)))){
                //     console.log("accesso eseguito")
                // }
                    //console.log(loginObj.user)
          
                } 
                
    }
  }

//   closeModal=()=>{
//       modalLogin.remove();
//   }

//   closeModalBack=()=>{
//       modalLogin.remove()
//   }

const removeBtn = e => {
    e.preventDefault();
    e.target.addEventListener('click',openModal.remove())
}

  // fa la pulizia 
const handleClearField = () => {
    usernameModal.value = "";
    pswModal.value = "";
}



//
const load= () =>{
    //btnSubmitModal.addEventListener('click',handleOpenModal)
    openModal.addEventListener('submit',loginSubmit);
    btnOpenModal.addEventListener('click',handleOpenModal)
    //add event close login when click button x
    btnCloseModal.addEventListener('click',removeBtn);
}
load();



