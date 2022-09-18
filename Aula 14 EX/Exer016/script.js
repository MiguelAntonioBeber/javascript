function contar() {
    var i = document.getElementById('txti')
    var f = document.getElementById('txtf')
    var p = document.getElementById('txtp')
    var r = document.getElementById('res')

    if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0){
        r.innerHTML = 'impossível contar.'
        //alert('Verifique se você colocou os dados corretamente.')
    } else {
        r.innerHTML = 'Contando: <br>'
        var i1 = Number(i.value)
        var f1 = Number(f.value)
        var p1 = Number(p.value)
        if (p1 <= 0) {
            alert('Passo inválido. Considerando PASSO 1')
            p1 = 1
        }
        if (i1 < f1) {
            for(var c = i1; c <= f1; c += p1) {
                r.innerHTML += ` ${c}\u{1f449} `
            }
        } else {
            for(var c = i1; c >= f1; c-= p1) {
                r.innerHTML += ` ${c}\u{1f449} `
            }
        }
        r.innerHTML += `\u{1f3c1}`
    }
}