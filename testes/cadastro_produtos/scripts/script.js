var produto = document.getElementById('iprodutos')
var tabela = document.getElementById('itab')
var res = document.getElementById('ires')

function Cadastrar(){
    if(produto.value.length == 0 ){
        alert('[ERRO] Insira um produto"')
    } else{
        let item = document.createElement('option')
        item.text = `${produto.value}`
        tabela.appendChild(item)
        produto.value = ''
        produto.focus()
    }
}

function Limpar(){
    tabela.innerHTML = '' 
}