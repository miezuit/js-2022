document.querySelector('#send').addEventListener('click', saveSettingsAndShowWelcome)
document.querySelector('#reset').addEventListener('click', reset)

// load este evenimentul de incarcare a paginii
window.addEventListener('load', init)

function init() {
    // iau din local storage si decodez JSON-ul
    // daca nu exista in local storage, returneaza null
    let settings = JSON.parse(localStorage.getItem('myapp_settings'))

    if (settings) {
        showWelcome(settings.name)
    }
}

function saveSettingsAndShowWelcome() {

    let settings = {
        name: document.querySelector('#name').value,
        color: document.querySelector('#color').value
    }

    // salvam in local storage ca JSON
    localStorage.setItem('myapp_settings', JSON.stringify(settings))

    showWelcome(settings.name)
}

function showWelcome(name) {
    document.querySelector('#welcome').innerText = `Hello, ${name}!`
    document.querySelector('#question').remove()
}

function reset() {
    localStorage.removeItem('myapp_settings')
    // face un reload pentru pagina
    location.reload()
}