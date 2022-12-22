// CHIEDO ALL'UTENTE LA SUA MAIL
const mail = prompt("Qual è la sua mail?");
console.log ("La mail dell'utente è: " + mail );

// ELENCO MAIL
const mailList = ["luca@gmail.com", "marco@gmail.com", "paolo@gmail.com", "andrea@gmail.com"];
console.log("queste sono le mail inserite: " + mailList);

// FACCIO UN CICLO
for (let i=0; i < mailList.length; i++){
    console.log ('i', i , typeof i);

    if (mail == mailList[i]){
        console.log("la tua mail è corretta!");
        i = mailList.length;
        break;
    }
    else if (i == mailList.length - 1){
        console.log("la tua mail non è corretta");
    }   
}




