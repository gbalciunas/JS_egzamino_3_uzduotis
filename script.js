/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
"use strict"

const ENDPOINT = 'https://api.github.com/users';

/* function getUrl(){
    return fetch(ENDPOINT).then(resp => resp.json())
}
    function showUsers(data){
        console.log(data)
}

getUrl()
.then(showUsers)
.catch(e => console.log(e)) */

// Pavyzdys:
/* fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(e => console.log(e.message)) */

  // Async wait
  async function getUrl(){
    try {
        const response = await fetch(ENDPOINT)
        const data = await response.json()
     // loadLogin(data)
       
     //  loadAvatar(data)
        console.log(data)
       } catch(e){
            console.log(e)
        }
   
        const element = document.getElementById("btn");
        element.addEventListener("click", myFunction);

        function myFunction() {
         document.getElementById("output").innerText = "Hello World";
} 

    /*    function loadLogin(data) {
       var output = document.getElementById("output")
        output.innerText = data.login 
} 
*/


  /*  function loadLogin(data){
        var output = document.getElementById("output")
        output.innerText = data.login 
}
*/



  }
  getUrl()