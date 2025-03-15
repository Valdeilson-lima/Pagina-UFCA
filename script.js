document.getElementById("add-name-button").addEventListener("click", function () {
    const nameContainer = document.getElementById("name-container");

    // Cria o campo de texto
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.placeholder = "Digite seu nome";
    inputField.id = "name-input";

    // Cria o botão "OK"
    const okButton = document.createElement("button");
    okButton.textContent = "OK";
    okButton.id = "ok-button";

    // Adiciona o campo de texto e o botão ao container
    nameContainer.innerHTML = ""; // Limpa o container antes de adicionar novos elementos
    nameContainer.appendChild(inputField);
    nameContainer.appendChild(okButton);

    // Adiciona evento ao botão "OK"
    okButton.addEventListener("click", function () {
        const nameInput = document.getElementById("name-input").value;

        if (nameInput.trim() !== "") {
            // Atualiza a saudação com o nome do usuário
            const greeting = document.querySelector("main h1");
            greeting.textContent = `Bem vindo à UFCA, ${nameInput}!`;

            // Remove o campo de texto e o botão "OK"
            nameContainer.innerHTML = "";
        } else {
            alert("Por favor, insira um nome válido");
        }
    });
});