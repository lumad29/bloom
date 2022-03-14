<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    color="rgb(166,170,166)"
  >
    <v-list>
      <v-list-item
        v-for="(icon, i) in navIconsDrawer"
        :key="i"
        link
        dark
        @click="$router.push({name:icon.path})"
      >
        <v-list-item-icon>
          <v-icon>{{ icon.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ icon.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import { sync } from 'vuex-pathify'

  export default {
    name: 'DefaultDrawer',
    data: () => ({

    }),
    computed: {
      ...sync('app', ['drawer', 'navIconsDrawer']),
    },
  }

</script>


