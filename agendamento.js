// Array para armazenar os agendamentos
let appointments = [];

// Função para exibir os agendamentos na console
function displayAppointments() {
  console.log('Agendamentos:');
  appointments.forEach((appointment, index) => {
    console.log(`${index + 1}. Nome: ${appointment.name} - Data: ${appointment.date} - Hora: ${appointment.time}`);
  });
}

// Função para agendar um compromisso
function scheduleAppointment(name, date, time) {
  const newAppointment = {
    name,
    date,
    time
  };
  appointments.push(newAppointment);
  console.log('Novo agendamento feito:');
  console.log(`Nome: ${name} - Data: ${date} - Hora: ${time}`);
}

// Exemplo de uso:
scheduleAppointment('João', '2023-12-15', '10:00');
scheduleAppointment('Maria', '2023-12-20', '15:30');
scheduleAppointment('Pedro', '2023-12-22', '11:45');

// Exibindo os agendamentos na console
displayAppointments();
