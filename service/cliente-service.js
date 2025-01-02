async function listaClientes() {
    try {
        const resposta = await fetch(`http://localhost:3000/profile`);
        return resposta.json();
    } catch {
        window.location.href = '../telas/erro.html';
    }
}

async function criaCliente(nome, email) {
    try {
        const resposta = await fetch(`http://localhost:3000/profile`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                email: email
            })
        });
        return resposta.body;
    } catch(error) {
        throw new Error('Não foi possível cadastrar novo cliente.');
    }
}

async function excluirCliente(id) {
    try {
        const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
            method: 'DELETE'
        })
    } catch(error) {
        throw new Error('Não foi possível excluir o cadastro do cliente.');
    }
};

async function detalhaCliente(id) {
    try {
        const resposta = await fetch(`http://localhost:3000/profile/${id}`);
        return resposta.json();
    } catch(error) {
        throw new Error('Não foi possível listar os dados do cliente.');
    }
}

async function atualizaCliente(id, nome, email) {
    try {
        const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify ({
                nome: nome,
                email: email
            })
        })
        return resposta.json();
    } catch(error) {
        throw new Error('Não foi possível atualizar os dados do cliente.');
    }
}

export const clienteService = {
    listaClientes,
    criaCliente,
    excluirCliente,
    detalhaCliente,
    atualizaCliente
}
