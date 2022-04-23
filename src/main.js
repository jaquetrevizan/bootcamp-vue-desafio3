import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const app = createApp(App)

// eslint-disable-next-line
app.component('Button', Button)
app.component('InputText', InputText)
app.use(PrimeVue)

app.mount('#app')
