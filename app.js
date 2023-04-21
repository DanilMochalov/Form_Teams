const form = document.getElementById('form');
const teams = [
  { name: "Государственные перфекционисты", link: "https://vk.me/join/vyfPk6Q1apqAcEeXZCxMJtgCvsIrIyhHwDg=" },
  { name: "Департамент дел и докладов", link: "https://vk.me/join/CCeLXOLzHkpVbFfk_ZXxQvB_KL/o95OKSPU=" },
  { name: "Казначеи и казначейства", link: "https://vk.me/join/nsXNnkIuDe8kadzh8UaHH3iTMPxmcmGTDKk=" },
  { name: "Муниципальные гениальные умы", link: "https://vk.me/join/qFoeCD573IuJXYdVnsL5XGLq2cS4Eq2iDrw=" },
  { name: "Правительственные знатоки", link: "https://vk.me/join/cEyPtWLhkuaMCzeIKymnTlMkbVW5FV/cPmA=" },
];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const surnameInput = document.getElementById('surname');
    const name = nameInput.value;
    const surname = surnameInput.value;
  
    let assignedTeam = JSON.parse(localStorage.getItem('assignedTeam'));
    if (assignedTeam) {
      const resultElement = document.getElementById('result');
      resultElement.innerHTML = `Вы уже были назначены в команду <a href="${assignedTeam.link}">${assignedTeam.name}</a>`;
      form.style.display = 'none';
      resultElement.style.display = 'block';
      return;
    }
  
    const team = teams[Math.floor(Math.random() * teams.length)];
    localStorage.setItem('assignedTeam', JSON.stringify(team));
  
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `${surname} ${name}, вы назначены в команду <a href="${team.link}">${team.name}</a>`;
    form.style.display = 'none';
    resultElement.style.display = 'block';
  });



