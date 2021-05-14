<!-- --------------------------Работа с классами и стилями--------------- -->
  <!-- Связывание CSS-классов -->
  <div v-bind:class="{ active: isActive }"></div>
  <div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
  ></div>
  data: {
  isActive: true,
  hasError: false
  }
  <div v-bind:class="classObject"></div>
  data: {
    classObject: {
      active: true,
      'text-danger': false
    }
  }
  <div v-bind:class="classObject"></div>
  data: {
    isActive: true,
    error: null
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
  <!-- Использование массивов -->       
  <div v-bind:class="[activeClass, errorClass]"></div>
  data: {
    activeClass: 'active',
    errorClass: 'text-danger'
  }В результате получим:
  <div class="active text-danger"></div>

  <div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
  <!-- Использование с компонентами -->
  Vue.component('my-component', {
  template: '<p class="foo bar">Привет</p>'
  })
  <my-component class="baz boo"></my-component>=><p class="foo bar baz boo">Привет</p>


  <!-- Связывание inline-стилей -->
  <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
  data: {
  activeColor: 'red',
  fontSize: 30
  }

  Можно выносить объект стилей из шаблона, чтобы сделать код чище:
  <div v-bind:style="styleObject"></div>
  data: {
    styleObject: {
      color: 'red',
      fontSize: '13px'
    }
  }
  <!-- Использование массивов -->
  Запись v-bind:style с массивом позволяет применить несколько объектов стилей к одному и тому же элементу:
  <div v-bind:style="[baseStyles, overridingStyles]"></div>

  