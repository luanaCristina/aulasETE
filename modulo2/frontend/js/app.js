/**
 * App Front-End — Comunicação com a API via Fetch
 * =================================================
 * 
 * Módulo II — ETE Advogado José David Gil Rodrigues
 * 
 * Este arquivo demonstra como o front-end se comunica
 * com o back-end (Flask) usando Fetch API (ES6+).
 * 
 * TODO para o aluno:
 * 1. Adicionar botão de "Concluir" para cada agendamento
 * 2. Implementar filtro por data na lista
 * 3. Adicionar formulário para cadastrar novo cliente
 * 4. Melhorar feedback visual (loading spinner)
 */

'use strict';

// ==================== CONFIGURAÇÃO ====================

const API_BASE_URL = 'http://localhost:5000/api';

// ==================== CARREGAR DADOS NOS SELECTS ====================

async function carregarClientes() {
    try {
        const response = await fetch(`${API_BASE_URL}/clientes`);
        const clientes = await response.json();

        const select = document.getElementById('cliente');
        clientes.forEach(cliente => {
            const option = document.createElement('option');
            option.value = cliente.id;
            option.textContent = `${cliente.nome} — ${cliente.telefone}`;
            select.appendChild(option);
        });
    } catch (error) {
        console.error('Erro ao carregar clientes:', error);
    }
}

async function carregarProfissionais() {
    try {
        const response = await fetch(`${API_BASE_URL}/profissionais`);
        const profissionais = await response.json();

        const select = document.getElementById('profissional');
        profissionais.forEach(prof => {
            const option = document.createElement('option');
            option.value = prof.id;
            option.textContent = `${prof.nome} (${prof.especialidade})`;
            select.appendChild(option);
        });
    } catch (error) {
        console.error('Erro ao carregar profissionais:', error);
    }
}

async function carregarServicos() {
    try {
        const response = await fetch(`${API_BASE_URL}/servicos`);
        const servicos = await response.json();

        const select = document.getElementById('servico');
        servicos.forEach(servico => {
            const option = document.createElement('option');
            option.value = servico.id;
            option.textContent = `${servico.nome} (${servico.duracao_min}min — R$ ${Number(servico.preco).toFixed(2)})`;
            select.appendChild(option);
        });
    } catch (error) {
        console.error('Erro ao carregar serviços:', error);
    }
}

// ==================== LISTAR AGENDAMENTOS ====================

async function carregarAgendamentos() {
    const container = document.getElementById('lista-agendamentos');
    container.innerHTML = '<p class="loading">Carregando...</p>';

    try {
        const response = await fetch(`${API_BASE_URL}/agendamentos`);
        const agendamentos = await response.json();

        if (agendamentos.length === 0) {
            container.innerHTML = '<p>Nenhum agendamento encontrado.</p>';
            return;
        }

        // Criar tabela HTML com os resultados
        let html = `
            <table>
                <thead>
                    <tr>
                        <th>Data/Hora</th>
                        <th>Cliente</th>
                        <th>Profissional</th>
                        <th>Serviço</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
        `;

        agendamentos.forEach(ag => {
            const dataFormatada = new Date(ag.data_hora).toLocaleString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });

            const statusClass = `status-${ag.status}`;
            const podeCancelar = ag.status === 'confirmado';

            html += `
                <tr>
                    <td>${dataFormatada}</td>
                    <td>${ag.cliente_nome}</td>
                    <td>${ag.profissional_nome}</td>
                    <td>${ag.servico_nome} (${ag.duracao_min}min)</td>
                    <td><span class="badge ${statusClass}">${ag.status}</span></td>
                    <td>
                        ${podeCancelar
                            ? `<button class="btn btn-danger btn-sm" onclick="cancelarAgendamento(${ag.id})">Cancelar</button>`
                            : '—'
                        }
                    </td>
                </tr>
            `;
        });

        html += '</tbody></table>';
        container.innerHTML = html;

    } catch (error) {
        container.innerHTML = `<p class="error">Erro ao carregar agendamentos: ${error.message}</p>`;
    }
}

// ==================== CRIAR AGENDAMENTO ====================

async function criarAgendamento(event) {
    event.preventDefault();

    const dados = {
        cliente_id: parseInt(document.getElementById('cliente').value),
        profissional_id: parseInt(document.getElementById('profissional').value),
        servico_id: parseInt(document.getElementById('servico').value),
        data_hora: document.getElementById('data-hora').value + ':00',
        observacoes: document.getElementById('observacoes').value || null
    };

    // Validar campos
    if (!dados.cliente_id || !dados.profissional_id || !dados.servico_id || !dados.data_hora) {
        mostrarFeedback('error', 'Preencha todos os campos obrigatórios!');
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/agendamentos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });

        const resultado = await response.json();

        if (response.ok) {
            mostrarFeedback('success', '✅ ' + resultado.message);
            document.getElementById('form-agendamento').reset();
            carregarAgendamentos(); // Atualiza a lista
        } else {
            mostrarFeedback('error', '❌ ' + resultado.error);
        }

    } catch (error) {
        mostrarFeedback('error', '❌ Erro de conexão com o servidor: ' + error.message);
    }
}

// ==================== CANCELAR AGENDAMENTO ====================

async function cancelarAgendamento(id) {
    if (!confirm(`Deseja realmente cancelar o agendamento #${id}?`)) {
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/agendamentos/${id}/cancelar`, {
            method: 'PATCH'
        });

        const resultado = await response.json();

        if (response.ok) {
            mostrarFeedback('success', '✅ ' + resultado.message);
            carregarAgendamentos();
        } else {
            mostrarFeedback('error', '❌ ' + resultado.error);
        }
    } catch (error) {
        mostrarFeedback('error', '❌ Erro: ' + error.message);
    }
}

// ==================== FEEDBACK ====================

function mostrarFeedback(tipo, mensagem) {
    const feedback = document.getElementById('feedback');
    feedback.hidden = false;
    feedback.className = `feedback feedback-${tipo}`;
    feedback.textContent = mensagem;

    setTimeout(() => {
        feedback.hidden = true;
    }, 5000);
}

// ==================== INICIALIZAÇÃO ====================

document.addEventListener('DOMContentLoaded', () => {
    // Carregar dados nos selects
    carregarClientes();
    carregarProfissionais();
    carregarServicos();

    // Carregar lista de agendamentos
    carregarAgendamentos();

    // Listener do formulário
    document.getElementById('form-agendamento').addEventListener('submit', criarAgendamento);
});
