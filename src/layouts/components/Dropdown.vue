<template>
  <div class="text-center">
    <v-menu
      v-for="(btn, index) in navIconsAppBar" 
      :key="index"
      offset-y
      open-on-hover
    >
      <template
        v-slot:activator="{ on, attrs }"
      >
        <v-btn
          v-if="btn.isMenuDropDown"
          color="transparent"
          elevation="0"
          v-bind="attrs"
          v-on="on"
        >
          {{ btn.name }}
          <v-icon
            size="28"
            class="mr-n1"
            color="grey darken-1"
           
            @click.stop
          >
            mdi-chevron-down
          </v-icon> 
        </v-btn>
        <v-btn
          v-else
          color="transparent"
          elevation="0"
          v-bind="attrs"
          @click="$router.push({name:btn.path})"
        >
          {{ btn.name }}
        </v-btn>
      </template>
  
      <v-list
        v-if="btn.isMenuDropDown"
        color="rgb(166,170,166)"
        dark
      >
        <v-list-item
          v-for="(item, indexDropDown) in btn.menuDropDownItems"
          :key="indexDropDown"
          link
          @click="$router.push({name:item.path})"
        >
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
  import { sync } from 'vuex-pathify'
  export default {
    name: 'DropDown',
    data: () => ({
      
    }),
    computed: {
      ...sync('app', ['drawer', 'navIconsAppBar']),
    },
  }
</script>

   