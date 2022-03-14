// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
  drawer: null,
  navIconsDrawer: [ 
    {icon:'mdi-home', name:'Home',path:'Default'},
    {icon:'mdi-account-box', name:'Contact',path:'contact'},
  ],

  navIconsAppBar: [

    { name: 'Plants', path: 'plants', isMenuDropDown: false, menuDropDownItems:[] },
    {
      name: 'Care', path: '', isMenuDropDown: true, menuDropDownItems: [
        { name: 'Plant care', path: 'plantCare'},
        { name: 'Care tools', path: 'tools' },
      
      ],
    },

  ],
}

const mutations = make.mutations(state)

const actions = make.actions(state)

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}


