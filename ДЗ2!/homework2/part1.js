let user = prompt("Кто  пришёл?");
if (user == "Админ") {
  let password = prompt("Пароль?");
  if (password == "Чёрный Властелин") {
    alert("Добро пожаловать")
  } else if (password == null || password == "") {
    alert("Вход отменён");
  } else {
    alert("Пароль неверен");
  }
} else if (user == null || user == "") {
  alert("Вход отменён");
} else {
  alert("Я не знаю вас");
}