let User = {
    username: "sevincmehmet",
    oldPassword: "Mehmet123",
    mail: "sevincmehmetali716",
    email: function() {
        return this.mail+ "@gmail.com"
    } 
}

let usernameDOM = document.querySelector('#InputUsername');
let passwordDOM = document.querySelector('#InputPassword');
let btnDOM = document.querySelector('#btn');


let sayac = 0;

btnDOM.addEventListener('click', yazdir)

function yazdir() {
    if(usernameDOM.value == User.username && passwordDOM.value == User.oldPassword) {
        document.write("Giriş Yapıldı")
    }else { 
        alert("Kullanıcı adı veya şifresi yanlıs")
    }
}
/**************************NEW*PASSWORD************************* */

let replayBtnDOM = document.querySelector('#newPasswordBtn');
let mailDOM = document.querySelector('#ınputMail')
let newpasswordDOM = document.querySelector('ınputNewPassword')

