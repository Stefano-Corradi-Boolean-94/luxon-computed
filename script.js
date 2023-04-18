const { createApp } = Vue;

// inizializzo un oggetto globale luxon
const dt = luxon.DateTime

createApp({

  data(){
    return{
      title:'Luxon',
      clock: null,
      seconds: null,
      saluto: 'ciao',
      tasks:[
        {
          text: 'Comprare la pappa di Artù',
          done: false
        },
        {
          text: 'Pagare la bolletta',
          done: true
        },
        {
          text: 'Ripassare Vue',
          done: false
        },
        {
          text: 'Ripassare CSS',
          done: true
        }
      ]
    }
  },
  methods: {
    printClock(){
      this.clock = dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS);
      this.seconds = dt.now().toFormat('s')
    },
    startClock(){
      setInterval(() => {
        this.printClock()
      },1000)
    }
  },
  computed: {
    // le computed non accettano parametri perché lavorano soltanto al variare dei data
    eveOddSeconds(){
      // le computed devo avere un return
      return (this.seconds % 2) ? 'dispari' : 'pari';
    },

    salutoMaiuscolo(){
      return this.saluto.toUpperCase();
    },

    taskFatti(){
      return this.tasks.filter( t => t.done)
    },

    taskDaFare(){
      return this.tasks.filter( t => !t.done)
    }
  },
  mounted() {
    this.printClock()
    this.startClock()
  },

}).mount('#app')