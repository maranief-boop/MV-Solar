// =============================================
// UTILITÁRIOS COMPARTILHADOS
// =============================================

function formatCurrency(value) {
  return 'R$ ' + Number(value).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatDate(timestamp) {
  if (!timestamp) return '—';
  const d = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return d.toLocaleDateString('pt-BR') + ' ' + d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

function formatDateShort(timestamp) {
  if (!timestamp) return '—';
  const d = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return d.toLocaleDateString('pt-BR');
}

function getStatusBadge(status) {
  const map = {
    novo: 'badge-info',
    contatado: 'badge-warning',
    negociando: 'badge-primary',
    fechado: 'badge-success',
    perdido: 'badge-danger'
  };
  const labels = {
    novo: 'Novo',
    contatado: 'Contatado',
    negociando: 'Negociando',
    fechado: 'Fechado',
    perdido: 'Perdido'
  };
  return `<span class="badge ${map[status] || 'badge-info'}">${labels[status] || status}</span>`;
}

function getProposalStatusBadge(status) {
  const map = {
    enviada: 'badge-warning',
    aprovada: 'badge-success',
    rejeitada: 'badge-danger'
  };
  const labels = {
    enviada: 'Enviada',
    aprovada: 'Aprovada',
    rejeitada: 'Rejeitada'
  };
  return `<span class="badge ${map[status] || 'badge-warning'}">${labels[status] || status}</span>`;
}

// Máscara de telefone
function maskPhone(input) {
  let v = input.value.replace(/\D/g, '');
  if (v.length <= 2) input.value = '(' + v;
  else if (v.length <= 7) input.value = '(' + v.slice(0,2) + ') ' + v.slice(2);
  else input.value = '(' + v.slice(0,2) + ') ' + v.slice(2,7) + '-' + v.slice(7,11);
}

// =============================================
// NAVBAR HIGHLIGHT
// =============================================
document.querySelectorAll('.sidebar a').forEach(link => {
  if (link.href && window.location.href.includes(link.getAttribute('href'))) {
    link.classList.add('active');
  }
});
