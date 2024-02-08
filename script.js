import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://champion-a8664-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const championRef = ref(database, "texts");

let btn = document.querySelector('.btn');
let text = document.querySelector('textarea');
let allMsg = document.querySelector('.allMsg');

btn.addEventListener('click', function(e) {
    if (text.value === "") {
        alert("Please fill the textarea");
    } else {
        let para = document.createElement("p");
        para.innerHTML = text.value;
        let textValue=text.value;
        allMsg.insertBefore(para, allMsg.firstChild);
        
       
        push(championRef, textValue);
        text.value = "";
        console.log(textValue)

    }
    
});
