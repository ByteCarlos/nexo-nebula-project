document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nome = form.querySelector("input[name='nome']");
    const email = form.querySelector("input[name='email']");
    const assunto = form.querySelector("input[name='assunto']");
    const mensagem = form.querySelector("textarea[name='mensagem']");
    const btnEnviar = form.querySelector(".btn-envia");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let valid = true;

        if (nome.value.trim() === "") {
            alert("O campo nome não pode ficar vazio!");
            valid = false;
        }

        if (email.value.trim() === "") {
            alert("O campo email não pode ficar vazio!");
            valid = false;
        }

        if (assunto.value.trim() === "") {
            alert("O campo assunto não pode ficar vazio!");
            valid = false;
        }

        if (mensagem.value.trim() === "") {
            alert("O campo mensagem não pode ficar vazio!");
            valid = false;
        }

        if (valid) {
            alert("Orçamento enviado com sucesso!");
            // form.submit();
        }
    });
});
