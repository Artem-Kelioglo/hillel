<!-- ---------------------------- Вычисляемые свойства и слежение---------------->
  <!-- Вычисляемые свойства -->
  <!-- bad -->
  <div id="example">
    {{ message.split('').reverse().join('') }}
  </div>
  <!-- good -->
  <div id="example">
    <p>Изначальное сообщение: «{{ message }}»</p>
    <p>Сообщение задом наперёд: «{{ reversedMessage }}»</p>
  </div>

  var vm = new Vue({
    el: '#example',
    data: {
      message: 'Привет'
    },
    computed: {
      // геттер вычисляемого значения
      reversedMessage: function () {
        // `this` указывает на экземпляр vm
        return this.message.split('').reverse().join('')
      }
    }
  })

  <!-- Кэширование вычисляемых свойств -->
  можно заметить методом
    <p>Сообщение задом наперёд: «{{ reverseMessage() }}»</p>
  // в компоненте
  methods: {
    reverseMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
  <!-- Вычисляемые свойства и слежение -->
  <div id="demo">{{ fullName }}</div>

  var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
  })
  <!-- Сеттеры вычисляемых свойств -->
  computed: {
  fullName: {
    // геттер:
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // сеттер:
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
  }Теперь запись vm.fullName = 'Иван Иванов' вызовет сеттер, и vm.firstName и vm.lastName будут соответствующим образом обновлены.
  
