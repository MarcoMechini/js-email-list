const albumEmail = document.querySelector(".album-email")
const buttonNewEmail = document.querySelector("button")


const getEmail = () => {

    albumEmail.innerHTML = '';
    for (let i = 1; i <= 10; i++) {

        axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp) => {
            const email = resp.data.response;
            albumEmail.innerHTML += `<li>${email}</li>`

        });
    }
}

getEmail();
buttonNewEmail.addEventListener("click", getEmail);

