try {
    // executa un cod care poate genera erori
    console.log(a)
} catch (error) {
    // trateaza eroarea aparuta
    console.log('There was an error: ' + error.message)
}

function sum(a, b)
{
    // guard clause
    if (!Number.isInteger(a)) {
        throw 'a must be an integer'
    }
    // guard clause
    if (!Number.isInteger(b)) {
        throw 'b must be an integer'
    }
    return a + b
}

console.log('hello from here')