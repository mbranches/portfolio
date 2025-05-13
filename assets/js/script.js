document.querySelectorAll(".menu-link").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("close-menu").checked = false;
    });
});

const form = document.getElementById('form-contatos');
const statusMsg = document.getElementById('status-msg');

form.addEventListener('submit', async (event) => {
    event.preventDefault(); 

    const formData = new FormData(form);

    try {
        const response = await fetch("https://formspree.io/f/xblozyjn", {
            method: "POST",
            headers: { 'Accept': 'application/json' },
            body: formData
        });

        if (response.ok) {
            form.reset();

            showSuccessMessage();
        } else {
            showErrorMessage();
        }   
    } catch (error) {
        showErrorMessage();
    }
});

function showSuccessMessage() {
    statusMsg.innerHTML = "Mensagem enviada com sucesso!";
    statusMsg.classList.add("success-submission");

    setTimeout(() => {
        statusMsg.style.display = "none";
    }, 5000)
}

function showErrorMessage() {
    statusMsg.innerHTML = "Ocorreu um erro ao enviar sua mensagem.";
    statusMsg.classList.add("error-submission");

    setTimeout(() => {
        statusMsg.style.display = "none";
    }, 5000)
}