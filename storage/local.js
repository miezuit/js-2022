document.querySelector('#send').addEventListener('click', saveSettingsAndShowWelcome)
document.querySelector('#reset').addEventListener('click', reset)

// load este evenimentul de incarcare a paginii
window.addEventListener('load', init)

const storageKey = 'myapp_settings'

function init() {
    // iau din local storage si decodez JSON-ul
    // daca nu exista in local storage, returneaza null
    let settings = JSON.parse(localStorage.getItem(storageKey))

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
    localStorage.setItem(storageKey, JSON.stringify(settings))

    showWelcome(settings.name)
}

function showWelcome(name) {
    document.querySelector('#welcome').innerText = `Hello, ${name}!`
    document.querySelector('#question').remove()
}

function reset() {
    localStorage.removeItem(storageKey)
    // face un reload pentru pagina
    location.reload()
}