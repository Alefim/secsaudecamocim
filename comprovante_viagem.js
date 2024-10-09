// Função para obter os parâmetros da URL
function obterParametroURL(nome) {
    const params = new URLSearchParams(window.location.search);
    return params.get(nome);
}

// Exibindo os dados da viagem no comprovante
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('nomePaciente').textContent = obterParametroURL('nomePaciente');
    document.getElementById('dataAgendamento').textContent = obterParametroURL('dataAgendamento');
    document.getElementById('horario').textContent = obterParametroURL('horario');
    document.getElementById('motorista').textContent = obterParametroURL('motorista');
    document.getElementById('especialidade').textContent = obterParametroURL('especialidade');
    document.getElementById('tipoCarro').textContent = obterParametroURL('tipoCarro');
    document.getElementById('local').textContent = obterParametroURL('local');
});
