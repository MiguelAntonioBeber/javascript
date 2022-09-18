function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    }else {
        var n = Number(num.value)
        tab.innerHTML = ''
        for(var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.setAttribute('id', 'restab')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}
function somar() {
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.querySelector('input#txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = `Resultado: A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`

}
function Vezes() {
    var tn3 = window.document.getElementById('txtn3')
    var tn4 = window.document.querySelector('input#txtn4')
    var res = window.document.getElementById('res2')
    var n3 = Number(tn3.value)
    var n4 = Number(tn4.value)
    var m = n3 * n4
    res.innerHTML = `Resultado: A multiplicação de ${n3} e ${n4} é igual a <strong>${m}</strong>`

}
function Dividir() {
    var tn5 = window.document.getElementById('txtn5')
    var tn6 = window.document.querySelector('input#txtn6')
    var res = window.document.getElementById('res3')
    var n5 = Number(tn5.value)
    var n6 = Number(tn6.value)
    var d = n5 / n6
    res.innerHTML = `Resultado: A divisão de ${n5} por ${n6} é igual a <strong>${d}</strong>`

}

var num = document.querySelector('input#fnum')
var list = document.querySelector('select#flista')
var res = document.querySelector('div#res4')
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
        var item1 = document.createElement('option')
        item1.setAttribute('id', 'resana')
        item1.text = `Valor ${num.value} adicionado.`
        list.appendChild(item1)
        res4.innerHTML = ''
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
        res4.innerHTML = ''
        res4.innerHTML += `<p>Ao todo, temos <strong>${tot}</strong> números cadastrados.</p>`
        res4.innerHTML += `<p>O maior valor é: <strong>${bigger}</strong>.</p>`
        res4.innerHTML += `<p>O menor número é: <strong>${smaller}</strong>.</p>`
        res4.innerHTML += `<p>Soamando todos os valores, temos: <strong>${sum}.</strong></p>`
        res4.innerHTML += `<p>A média dos valores é: <strong>${med}</strong></p>`
        res4.setAttribute('id', 'resp')

    }
}