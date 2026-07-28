'use strict';
const API = '/api';

async function load(sel, url, fmt) {
  const r = await fetch(url); const d = await r.json();
  const s = document.getElementById(sel);
  d.forEach(i => { s.innerHTML += `<option value="${i.id}">${fmt(i)}</option>`; });
}

async function carregarAgendamentos() {
  const c = document.getElementById('lista'); c.innerHTML = '<p>...</p>';
  const r = await fetch(`${API}/agendamentos`); const d = await r.json();
  if (!d.length) { c.innerHTML = '<p>Nenhum.</p>'; return; }
  let h = '<table><thead><tr><th>Data</th><th>Cliente</th><th>Prof.</th><th>Serviço</th><th>Status</th><th></th></tr></thead><tbody>';
  d.forEach(a => {
    const dt = new Date(a.data_hora).toLocaleString('pt-BR');
    const btn = a.status === 'confirmado' ? `<button class="btn btn-danger btn-sm" onclick="cancelar(${a.id})">Cancelar</button>` : '';
    h += `<tr><td>${dt}</td><td>${a.cliente_nome}</td><td>${a.profissional_nome}</td><td>${a.servico_nome}</td><td><span class="badge status-${a.status}">${a.status}</span></td><td>${btn}</td></tr>`;
  });
  c.innerHTML = h + '</tbody></table>';
}

async function cancelar(id) {
  if (!confirm('Cancelar?')) return;
  const r = await fetch(`${API}/agendamentos/${id}/cancelar`, {method:'PATCH'});
  const d = await r.json(); alert(r.ok ? d.message : d.error); carregarAgendamentos();
}

document.addEventListener('DOMContentLoaded', () => {
  load('cliente', `${API}/clientes`, c => c.nome);
  load('profissional', `${API}/profissionais`, p => `${p.nome} (${p.especialidade})`);
  load('servico', `${API}/servicos`, s => `${s.nome} (${s.duracao_min}min)`);
  carregarAgendamentos();

  document.getElementById('form-agendamento').addEventListener('submit', async e => {
    e.preventDefault();
    const body = {
      clienteId: +document.getElementById('cliente').value,
      profissionalId: +document.getElementById('profissional').value,
      servicoId: +document.getElementById('servico').value,
      dataHora: document.getElementById('data-hora').value,
      observacoes: document.getElementById('obs').value || null,
    };
    const r = await fetch(`${API}/agendamentos`, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(body) });
    const d = await r.json();
    const fb = document.getElementById('feedback');
    fb.hidden = false;
    fb.className = `feedback feedback-${r.ok ? 'success' : 'error'}`;
    fb.textContent = r.ok ? `✅ ${d.message}` : `❌ ${d.error}`;
    if (r.ok) { e.target.reset(); carregarAgendamentos(); }
    setTimeout(() => fb.hidden = true, 4000);
  });
});
