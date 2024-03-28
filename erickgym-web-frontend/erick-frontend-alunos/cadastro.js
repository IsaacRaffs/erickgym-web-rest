const API_URL = 'http://127.0.0.1:8000/alunos/'

function main(){
    const btn_salvar = document.getElementById('btnsalvar')
    btn_salvar.onclick = salvar_alunos
}

async function salvar_alunos(e){
    e.preventDefault()
    const cx_nome = document.getElementById('cx-nome')
    const cx_sexo = document.getElementById('cx-sexo')
    const cx_dt_nasc = document.getElementById('cx-dt_nasc')
    const cx_telefone = document.getElementById('cx-telefone')
    const cx_cpf = document.getElementById('cx-cpf')

    const nome = cx_nome.value
    const sexo = cx_sexo.value
    const dt_nasc = cx_dt_nasc.value
    const telefone = cx_telefone.value
    const cpf = cx_cpf.value

    const dados = {nome, sexo, dt_nasc, telefone, cpf}

    const init = {
        method: 'post',
        body: JSON.stringify(dados),
        headers: {
            "Content-Type": "application/json"
        }
    }
    const response = await fetch(API_URL, init)
    console.log(response.status)
    if(response.status===201){
        cx_nome.value = ''
        alert('deu certo')
    }else{
        alert('deu errado')
    }

}

main()