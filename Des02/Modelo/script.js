var num = document.querySelector('input#fnum')
var list = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var val = []

function isNum(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlist(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        false
    }
}

function add() {
    if(isNum(num.value) && !inlist(num.value, val)) {
        val.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Inválido ou já adicionado à lista.')
    }
    num.value = ''
    num.focus()
}

function end() {
    if (val.length == 0) {
        alert('a')
    } else {
        var tot = val.length
        var bigger = val[0]
        var smaller = val[0]
        var sum = 0
        var med = 0
        for(var pos in val) {
            sum += val[pos]
            if (val[pos] > bigger)
                bigger = val[pos]
            if (val[pos] < smaller)
                smaller = val[pos]
        }
        med = sum / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos <strong>${tot}</strong> números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor é: <strong>${bigger}</strong>.</p>`
        res.innerHTML += `<p>O menor número é: <strong>${smaller}</strong>.</p>`
        res.innerHTML += `<p>Soamando todos os valores, temos: <strong>${sum}.</strong></p>`
        res.innerHTML += `<p>A média dos valores é: <strong>${med}</strong></p>`

    }
}