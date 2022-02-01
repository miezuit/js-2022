var dr = document.querySelector('#dreptunghi')
var cerc = document.querySelector('#cerc')

dr.addEventListener('click', minimize)
cerc.addEventListener('click', move)

async function minimize() {
    for(let i = 10; i >= 0; i--) {
        // asteptam 20 de ms:
        await new Promise(r => setTimeout(r, 20))
        dr.style.height = i + 'em'
    }
}

async function move() {
    for(let i = 10; i <= 200; i++) {
        // asteptam 20 de ms:
        await new Promise(r => setTimeout(r, 20))
        cerc.style.top = cerc.style.left = i + 'px'
    }
    cerc.removeEventListener('click', move)
}