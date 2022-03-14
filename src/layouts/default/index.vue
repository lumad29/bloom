<template>
  <v-app>
    <default-app-bar />

    <default-drawer />

    <default-view />
  </v-app>
</template>

<script>
  export default {
    name: 'DefaultLayout',

    components: {
      DefaultAppBar: () => import('./AppBar'),
      DefaultView: () => import('./Drawer'),
      DefaultDrawer: () => import('./View'),
    },
  }
</script>
