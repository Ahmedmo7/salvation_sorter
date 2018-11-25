<template>
  <v-app id="inspire">
    <vs-sidebar parent="body" default-index="1"  color="dark" class="sidebarx" spacer v-model="drawer">
      <vs-sidebar-item index="1" icon="home" to="/home">
        Home
      </vs-sidebar-item>
      <vs-sidebar-item index="2" icon="home" to="/inspire">
        Quality
      </vs-sidebar-item>

      <vs-sidebar-item index="3" icon="gavel" to="/soiled">
        Soiled
      </vs-sidebar-item>
      <vs-sidebar-item index="3" icon="search" to="/main">
        Denim
      </vs-sidebar-item>

    </vs-sidebar>
    <v-toolbar app fixed clipped-left color="red darken-4">
      <v-toolbar-side-icon class="white--text" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Dashboard</v-toolbar-title>
    </v-toolbar>
    <router-view></router-view>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [{
        title: 'Title',
        text: 'dashboard'
      }, {
        title: 'Title',
        text: 'settings'
      }]
    }),
    props: {
      source: String
    }
  }
</script>
<style>
  vs-sidebar-item {
    font-size: 40px;
  }
</style>
