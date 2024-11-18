const albumEmail = document.querySelector(".album-email")



for (let i = 1; i <= 10; i++) {

    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp) => {
        const email = resp.data.response;
        albumEmail.innerHTML += `<li>${i} ${email}</li>`

    });

}
