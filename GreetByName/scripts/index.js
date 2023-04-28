function init()
{
    const greetBtn = document.getElementById("greetBtn");
    greetBtn.onclick = onGreetBtnClicked;
}

function onGreetBtnClicked()
{
    const nameField = document.getElementById("nameField");
    alert(`Hi there ${nameField.value}`);
}

window.onload = init;
