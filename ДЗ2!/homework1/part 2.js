user1 = prompt('Введите возраст') + ' ' + prompt('Введите имя') + ' ' + prompt('Введите фамилию');
user2 = prompt('Введите возраст') + ' ' + prompt('Введите имя') + ' ' + prompt('Введите фамилию');
user3 = prompt('Введите возраст') + ' ' + prompt('Введите имя') + ' ' + prompt('Введите фамилию');

console.log('**************\n\nСписок студентов зарегестрировавшихся на вебинар:\n\n1. ' +
  user1 + '\n\n2. ' + user2 + '\n\n3. ' + user3 + '\n\n-------------- Средний возраст студента: ' +
  ((user1 = parseInt(user1)) + (user2 = parseInt(user2)) + (user3 = parseInt(user3))) / 3 +
  'лет --------------\n\n**************');