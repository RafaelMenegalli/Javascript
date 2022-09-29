function gerar(){
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0 ){
        alert('[ERRO] revise as Infomrações')
    } else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }   
    }
}