// CHIEDO ALL'UTENTE LA SUA MAIL
const userEmail = prompt("Qual è la sua mail?");
console.log("La mail dell'utente è: " + userEmail, typeof userEmail);

const mailList = [
    "luca@gmail.com",
    "marco@gmail.com",
    "paolo@gmail.com",
    "andrea@gmail.com",
    "mirco@gmail.com"
];

let validEmail = true;
if (validEmail == true) {

    let canAccess = false;

    for(let i = 0; i < mailList.length; i++ ) {

        console.log('mailList[i]', i , mailList[i],typeof mailList[i]);

        if(mailList[i] == userEmail){
            canAccess = true;
        }
        // else{
        //     message = 'Non puoi entrare';
        // }
    }

    if (canAccess == true){
        alert('Puoi entrare')
    }
    else {
        alert('Non puoi entrare')
    }

}
else {
    alert('Email non valida')
}
