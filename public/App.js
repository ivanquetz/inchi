// src/components/App.js
import user from './user.js'
export default {
  name: 'App',
  components: {user},
  template: `
    <div class="container mx-auto p-4">
      <h1> Hello World</h1>
      <user dops="!!!"/>
    </div>
  `,
  data () {
    return {
      name: 'OLEG'
    }
  },
  mounted () {
    console.log('App mounted!')
  }
};