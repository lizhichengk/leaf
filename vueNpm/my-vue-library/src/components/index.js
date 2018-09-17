import Vue from 'vue'
import Banner from './Banner'
import Li from './Li'
const Components = {
    Banner,
    Li
}
Object.keys(Components).forEach(name =>{
    Vue.component(name,Components[name])
})
export default Components