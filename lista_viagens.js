// Função para obter os dados do Google Sheets
function obterDadosGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'; // Substitua pelo URL do seu Web App
    return fetch(scriptURL)
        .then(response => response.json())
        .then(dados => dados)
        .catch(error => console.error('Erro ao buscar dados:', error));
}

// Função para filtrar viagens com base nas datas
function filtrarViagens() {
    const dataInicio = new Date(document.getElementById('dataInicio').value);
    const dataFim = new Date(document.getElementById('dataFim').value);

    if (!dataInicio || !dataFim) {
        alert('Por favor, insira ambas as datas.');
        return;
    }

    // Obter os dados do Google Sheets
    obterDadosGoogleSheets().then(viagens => {
        const viagensFiltradas = viagens.filter(viagem => {
            const dataAgendamento = new Date(viagem.dataAgendamento);
            return dataAgendamento >= dataInicio && dataAgendamento <= dataFim;
        });

        // Exibir as viagens filtradas
        exibirViagens(viagensFiltradas);
    });
}

// Função para exibir os dados na tabela
function exibirViagens(viagens) {
    const tabela = document.getElementById('tabelaViagens').getElementsByTagName('tbody')[0];
    tabela.innerHTML = ''; // Limpar tabela

    viagens.forEach(viagem => {
        const novaLinha = tabela.insertRow();

        // Adicionar dados na linha da tabela
        novaLinha.insertCell().textContent = viagem.nomePaciente;
        novaLinha.insertCell().textContent = viagem.dataAgendamento;
        novaLinha.insertCell().textContent = viagem.horario;
        novaLinha.insertCell().textContent = viagem.motorista;
        novaLinha.insertCell().textContent = viagem.especialidade;
        novaLinha.insertCell().textContent = viagem.tipoCarro;
        novaLinha.insertCell().textContent = viagem.local;
    });
}
