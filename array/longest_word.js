document.getElementById('check').addEventListener('click', findLogestWord)

function findLogestWord() {
    let text = document.getElementById('text').value

    // 0. elinam toate caracterele speciale in afara de spatii (semne de punctuatie)
    // 1. gasim cuvintele si punem intr-un array
    // 2. gasim cel mai lung cuvant din array (sort/reduce)

    let words = text
                .replaceAll(/[,.+-]/ig,'')
                .split(' ')

    let logest = words.reduce((w1, w2) => w1.length > w2.length ? w1 : w2)

    document.write(logest)
}