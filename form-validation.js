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
            alert("O campo Nome é obrigatório.");
            valid = false;
        }

        if (email.value.trim() === "") {
            alert("O campo E-mail é obrigatório.");
            valid = false;
        }

        if (assunto.value.trim() === "") {
            alert("O campo Assunto é obrigatório.");
            valid = false;
        }

        if (mensagem.value.trim() === "") {
            alert("O campo Mensagem é obrigatório.");
            valid = false;
        }

        if (valid) {
            alert("Orçamento enviado com sucesso!");
            form.submit();
        }
    });
});
