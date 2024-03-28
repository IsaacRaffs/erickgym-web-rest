const API_URL = 'https://erickgym-web-rest.onrender.com/alunos/'

const cx_nome = document.getElementById('cx-nome')
const cx_sexo = document.getElementById('cx-sexo')
const cx_dt_nasc = document.getElementById('cx-dt_nasc')
const cx_telefone = document.getElementById('cx-telefone')
const cx_cpf = document.getElementById('cx-cpf')
const btn_cadastro = document.getElementById('btncadastro')

function main(){
    carregar_alunos()
}
async function iniciarModificarAluno(id) {
    console.log(id)
    let response = await fetch(`${API_URL}${id}`)
    if (response.status === 200) {

        const aluno = await response.json()

        const nome = aluno.nome 
        const sexo = aluno.sexo
        const dt_nasc = aluno.dt_nasc
        const telefone = aluno.telefone
        const cpf = aluno.cpf

        cx_nome.value = nome
        cx_sexo.value = sexo
        cx_dt_nasc.value = dt_nasc
        cx_telefone.value = telefone
        cx_cpf.value = cpf
        
        btn_cadastro.innerText = 'Atualizar'
        btn_cadastro.value = 'Atualizar Aluno'

        btn_cadastro.setAttribute('onclick', `modificarAluno(${id})`)

    }
    else {
        alert(`Erro ${response.status}`)
    }
}

async function modificarAluno(id) {
    const nome = cx_nome.value
    const sexo = cx_sexo.value
    const dt_nasc = cx_dt_nasc.value
    const telefone = cx_telefone.value
    const cpf = cx_cpf.value

    const dados = { nome, sexo, dt_nasc, telefone, cpf }
    console.log(dados)
    alert('sucesso')

    const options = {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados),
    }


    await fetch(`${API_URL}${id}`, options).then(response => {
        if (response.status >= 200 && response.status < 300){

            window.location.href = 'listar_alunos.html'
        }
        else{
            console.log(response.status)
        }
    })
        .catch(error => console.log)
}


async function apagarAluno(id){
    const config = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'applications/json'
        }
    }

    await fetch(`${API_URL}${id}`, config).then(response => {
        if (response.status >=200 && response.status <= 300){
            alert('Deletado com sucesso')
        }
        else{
            alert(`${response.status} erro ao deletar`)
        }
    })
}

async function carregar_alunos(){
    const response = await fetch(API_URL)
    const alunos = await response.json()
    for(aluno of alunos){
        adicionar_aluno_lista(aluno)
    }
}

function adicionar_aluno_lista(aluno){
    const lst_alunos = document.getElementById('tabela')
    const lst = document.createElement('tr')

    const modificar = document.createElement('td')
    const deletar = document.createElement('td')

    const item1 = document.createElement('td')
    const item2 = document.createElement('td')
    const item3 = document.createElement('td')
    const item4 = document.createElement('td')
    const item5 = document.createElement('td')

    item1.textContent = aluno.nome
    item2.textContent = aluno.sexo
    item3.textContent = aluno.dt_nasc
    item4.textContent = aluno.telefone
    item5.textContent = aluno.cpf

    modificar.innerHTML = `<button class="btn btn-warning" onclick="iniciarModificarAluno(${aluno.id})"><i class="fa-solid fa-pen-to-square"></i></button>`
    deletar.innerHTML = `<button class="btn btn-danger" onclick="apagarAluno(${aluno.id})"><i class="fa-solid fa-trash"></i></button>`

    modificar.onclick = function(){
        var display = document.getElementById('formulario').style.display;
            if(display == "none")
                document.getElementById('formulario').style.display = 'block';
            else
                document.getElementById('formulario').style.display = 'none';}

    lst.appendChild(item1)
    lst.appendChild(item2)
    lst.appendChild(item3)
    lst.appendChild(item4)
    lst.appendChild(item5)

    lst.appendChild(modificar)
    lst.appendChild(deletar)

    lst_alunos.append(lst)
}
main()