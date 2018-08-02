console.log('hello from main.js')
import App from './App.js'
// vue plugins
Vue.prototype.$mmm = {
  hello: () => {
    console.log('mmm hello')
  }
}

new Vue({
  render: h => h(App),
}).$mount(`#app`)
