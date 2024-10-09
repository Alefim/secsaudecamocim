document.getElementById('cadastroViagemForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coletando dados da viagem
    const nomePaciente = obterParametroURL('nomePaciente');
    const dataAgendamento = obterParametroURL('dataAgendamento');
    const horario = obterParametroURL('horario');
    const motorista = document.getElementById('motorista').value;
    const especialidade = document.getElementById('especialidade').value;
    const tipoCarro = document.getElementById('tipoCarro').value;
    const local = document.getElementById('local').value;

    // Redirecionar para a página de comprovante com os dados da viagem
    const url = `comprovante_viagem.html?nomePaciente=${encodeURIComponent(nomePaciente)}&dataAgendamento=${encodeURIComponent(dataAgendamento)}&horario=${encodeURIComponent(horario)}&motorista=${encodeURIComponent(motorista)}&especialidade=${encodeURIComponent(especialidade)}&tipoCarro=${encodeURIComponent(tipoCarro)}&local=${encodeURIComponent(local)}`;
    window.location.href = url;
});
