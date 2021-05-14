Начало работы
<!-- версия для разработки, отображает полезные предупреждения в консоли -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<!-- production-версия, оптимизированная для размера и скорости -->
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>



<!-- Декларативная отрисовка -->
<div id="app">
  {{ message }}
</div>

var app = new Vue({
  el: '#app',
  data: {
    message: 'Привет, Vue!'
  }
})

<!-- связывать атрибуты элементов: -->
<div id="app-2">
  <span v-bind:title="message">
    Наведи на меня курсор на пару секунд,
    чтобы увидеть динамически связанное значение title!
  </span>
</div>

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
  }
})



<!-- Условия и циклы -->
<div id="app-3">
  <span v-if="seen">Сейчас меня видно</span>
</div>

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

<div id="app-4">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Изучить JavaScript' },
      { text: 'Изучить Vue' },
      { text: 'Создать что-нибудь классное' }
    ]
  }
})


<!-- Работа с пользовательским вводом -->
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Перевернуть сообщение</button>
</div>

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Привет, Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
<!-- v-model -->
<div id="app-6">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Привет, Vue!'
  }
})



<!-- Разбиение приложения на компоненты -->
Vue.component('todo-item', {
  template: '<li>Это одна задача в списке</li>'
})
var app = new Vue(...)

<ol>
  <todo-item></todo-item>
</ol>
    <!-- работа с входнымипараметрами -->
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Овощи' },
      { id: 1, text: 'Сыр' },
      { id: 2, text: 'Что там ещё люди едят?' }
    ]
  }
})
<div id="app-7">
  <ol>
    <todo-item
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id"
    ></todo-item>
  </ol>
</div>



<!-- экземпляры Vue предоставляют ряд служебных свойств и методов экземпляра. Их имена начинаются с префикса $ -->
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch — это метод экземпляра
vm.$watch('a', function (newValue, oldValue) {
  // Этот коллбэк будет вызван, когда изменится `vm.a`
})



<!-- Хуки жизненного цикла экземпляра -->
Каждый экземпляр Vue при создании проходит через последовательность шагов инициализации — например, настраивает наблюдение за данными, компилирует шаблон, монтирует экземпляр в DOM, обновляет DOM при изменении данных. Между этими шагами вызываются функции, называемые хуками жизненного цикла, с помощью которых можно выполнять свой код на определённых этапах.
new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` указывает на экземпляр vm
    console.log('Значение a: ' + this.a)
  }
})
// => "Значение a: 1"


<!-- ------------------ -------------Синтаксис шаблонов------------------------>

<!-- Интерполяции -->
  <!-- Текст -->
  <span>Сообщение: {{ msg }}</span>
  Возможно также выполнение интерполяции однократно, которая не обновится при изменении данных — с помощью директивы v-once
  <span v-once>Это сообщение никогда не изменится: {{ msg }}</span>
  <!-- Сырой HTML -->
  <p>Директива v-html: <span v-html="rawHtml"></span></p>
  <!--Атрибуты  -->
  <div v-bind:id="dynamicId"></div>
  При использовании с булевыми атрибутами (когда их наличие уже означает true) v-bind работает немного иначе. В этом примере:
  <button v-bind:disabled="isButtonDisabled">Кнопка</button>
  Если значением isButtonDisabled будет null, undefined или false, то атрибут disabled не добавится в элемент <button>.
  <!-- Использование выражений JavaScript -->
  {{ number + 1 }}
  {{ ok ? 'YES' : 'NO' }}
  {{ message.split('').reverse().join('') }}
  <div v-bind:id="'list-' + id"></div>
<!-- Директивы -->
  <!-- Аргументы -->
  <a v-bind:href="url"> ... </a>
  <a v-on:click="doSomething"> ... </a>
  <!-- Динамические аргументы -->
  <a v-bind:[attributeName]="url"> ... </a> attributeName, значение которого равно "href", то это будет эквивалентно привязке v-bind:href.
  <a v-on:[eventName]="doSomething"> ... </a>
  <!-- Модификаторы -->
  <form v-on:submit.prevent="onSubmit"> ... </form>.prevent говорит директиве v-on вызвать event.preventDefault()