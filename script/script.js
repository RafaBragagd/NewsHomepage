let MenuButton = document.getElementById("MenuButton")
let CloseButton = document.getElementById("CloseButton")
let Menu = document.getElementById("Menu")

MenuButton.addEventListener("click", function () {
    Menu.classList.add('Ativo')
    Menu.classList.remove('NAtivo')
})
CloseButton.addEventListener("click", function () {
    Menu.classList.remove('Ativo')
    Menu.classList.add('NAtivo')
})
