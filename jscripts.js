document.getElementById('agendamentoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coletando dados do formulário
    const nomePaciente = document.getElementById('nomePaciente').value;
    const dataAgendamento = document.getElementById('dataAgendamento').value;
    const horario = document.getElementById('horario').value;

    // Adicionando um novo agendamento (ou editando)
    if (editandoIndex === null) {
        const agendamento = { nomePaciente, dataAgendamento, horario };
        agendamentos.push(agendamento);
    } else {
        agendamentos[editandoIndex] = { nomePaciente, dataAgendamento, horario };
        editandoIndex = null;
    }

    // Limpar o formulário
    document.getElementById('agendamentoForm').reset();

    // Redirecionar para a página de cadastro de viagem com os dados do paciente
    window.location.href = `cadastro_viagem.html?nomePaciente=${encodeURIComponent(nomePaciente)}&dataAgendamento=${encodeURIComponent(dataAgendamento)}&horario=${encodeURIComponent(horario)}`;
});
