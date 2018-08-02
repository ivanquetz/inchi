export default {
  name: 'user',
  props: [
    'dops'
  ],
  data () {
    return {
      name: 'Mike'
    }
  },
  template: `
    <h3>{{name}}{{dops || 'mmm'}}</h3>
  `,
  mounted () {
    // console.log(this.$mmm)
    this.$mmm.hello()
  }
}
