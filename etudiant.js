new Vue({
  el: '#app',
  data: {
    name: 'ABIOLA Adéchina',
    course: 'Web Engineer Course',
    acceptancePeriod: 'January 2019',
    defaultLastId: 2,
    etudiants: [
      { id: 1, name: 'IBRAHIMA Hadi', course: 'Machine learning course', acceptancePeriod: 'April 2021' },

    ]
  },
  methods: {
    addetudiant: function() {
      this.etudiants.push({
        id: this.defaultLastId++,
        name: this.name,
        course: this.course,
        acceptancePeriod: this.acceptancePeriod,

      });

      this.name = '';
      this.course = '';
      this.acceptancePeriod ='';

    }
  }
})
