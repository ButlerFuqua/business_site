import Vue from 'vue'
import MenuIcon from '~/components/icons/MenuIcon'


const components = { MenuIcon }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})