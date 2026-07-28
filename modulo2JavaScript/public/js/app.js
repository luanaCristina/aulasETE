'use strict';

const API = '/api';

// ==================== CARREGAR SELECTS ====================

async function carregarClientes() {
    const res = await fetch(`${API}/clientes`);
    const clientes = await res.json();
    const select = document.getElementById('cliente');
    clientes.forEach(c => {
        select.innerHTML += `<option value="${c.id}">${c.nome}</option>`;
    });
}

async function carregarProfissionais() {
    const res = await fetch(`${API}/profissionais`);
    const profissionais = await res.json();
    const select = document.getElementById('profissional');
    profissionais.forEach(p => {
        select.innerHTML += `<option value="${p.id}">${p.nome} (${p.especialidade})</option>`;
    });
}

async function carregarServicos() {
    const res = await fetch(`${API}/servicos`);
    const servicos = await res.json();
    const select = document.getElementById('servico');
    servicos.forEach(s => {
        select.innerHTML += `<option value="${s.id}">${s.nome} (${s.duracao_min}min — R$${Number(s.preco).toFixed(2)})</option>`;
    });
}

// ==================== LISTAR AGENDAMENTOS ====================

async function carregarAgendamentos() {
    const container = document.getElementById('lista-agendamentos');
    container.innerHTML = '<p>Carregando...</p>';

    const res = await fetch(`${API}/agendamentos`);
    const agendamentos = await res.json();

    if (!agendamentos.length) {
        container.innerHTML = '<p>Nenhum agendamento.</p>';
        return;
    }

    let html = `<table><thead><tr>
        <th>Data</th><th>Cliente</th><th>Profissional</th><th>Serviço</th><th>Status</th><th>Ações</th>
    </tr></thead><tbody>`;

    agendamentos.forEach(ag => {
        const data = new Date(ag.data_hora).toLocaleString('pt-BR');
        const badge = `<span class="badge status-${ag.status}">${ag.status}</span>`;
        const acoes = ag.status === 'confirmado'
            ? `<button class="btn btn-danger btn-sm" onclick="cancelar(${ag.id})">Cancelar</button>`
            : '—';
        html += `<tr><td>${data}</td><td>${ag.cliente_nome}</td><td>${ag.profissional_nome}</td><td>${ag.servico_nome}</td><td>${badge}</td><td>${acoes}</td></tr>`;
    });

    html += '</tbody></table>';
    container.innerHTML = html;
}

// ==================== CRIAR / CANCELAR ====================

async function criarAgendamento(e) {
    e.preventDefault();
    const body = {
        clienteId: +document.getElementById('cliente').value,
        profissionalId: +document.getElementById('profissional').value,
        servicoId: +document.getElementById('servico').value,
        dataHora: document.getElementById('data-hora').value,
        observacoes: document.getElementById('observacoes').value || null,
    };

    const res = await fetch(`${API}/agendamentos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });
    const data = await res.json();

    const fb = document.getElementById('feedback');
    fb.hidden = false;
    fb.className = res.ok ? 'feedback feedback-success' : 'feedback feedback-error';
    fb.textContent = res.ok ? `✅ ${data.message}` : `❌ ${data.error}`;

    if (res.ok) { document.getElementById('form-agendamento').reset(); carregarAgendamentos(); }
    setTimeout(() => fb.hidden = true, 4000);
}

async function cancelar(id) {
    if (!confirm(`Cancelar agendamento #${id}?`)) return;
    const res = await fetch(`${API}/agendamentos/${id}/cancelar`, { method: 'PATCH' });
    const data = await res.json();
    alert(res.ok ? data.message : data.error);
    carregarAgendamentos();
}

// ==================== INIT ====================

document.addEventListener('DOMContentLoaded', () => {
    carregarClientes();
    carregarProfissionais();
    carregarServicos();
    carregarAgendamentos();
    document.getElementById('form-agendamento').addEventListener('submit', criarAgendamento);
});
