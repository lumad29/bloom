<template>
  <v-app-bar
    app
    elevation="0"
    color="transparent"
  >
    <v-app-bar-nav-icon
      aria-label="Toggle Navigation Drawer"
      @click="drawer = !drawer"
    />
    <v-toolbar-title
      class="font-weight-bold mx-15"
      style="font-size: 170%"
    >
      <span>Bloom</span>
    </v-toolbar-title>

    <dropdown />
  </v-app-bar>
</template>

<script>
  // Utilities
  import { sync } from 'vuex-pathify'
  import Dropdown from '../components/Dropdown.vue'

  export default {
    name: 'DefaultAppBar',
    components: {
      Dropdown,
    },
    computed: { 
      ...sync('app', ['drawer', 'navIconsAppBar']),
    },  
  }
</script>

