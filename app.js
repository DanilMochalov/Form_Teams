const form = document.getElementById('form');
const teams = ['Государственные перфекционисты', 'Департамент дел и докладов', 'Казначеи и казначейства', 'Бюрократические братья', 'государственные шаманы', 'Департамент дерзости и душевности', 'Команда бюрократических гуру'];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const surnameInput = document.getElementById('surname');
    const name = nameInput.value;
    const surname = surnameInput.value;
    const team = teams[Math.floor(Math.random() * teams.length)];
    const resultElement = document.getElementById('result');
    resultElement.textContent = `${surname} ${name}, вы назначены в ${team}`;
    form.style.display = 'none';
    resultElement.style.display = 'block';
});



