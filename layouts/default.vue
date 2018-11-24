<template>
  <v-app id="inspire" red>
    <vs-sidebar parent="body" default-index="1"  color="dark" class="sidebarx" spacer v-model="drawer">

      <vs-sidebar-item index="1" icon="home">
        Quality
      </vs-sidebar-item>

      <vs-sidebar-item index="2" icon="gavel">
        Soiled
      </vs-sidebar-item>

    </vs-sidebar>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <v-card>
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                aspect-ratio="2.75"
              ></v-img>

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                  <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn flat color="orange">Share</v-btn>
                <v-btn flat color="orange">Explore</v-btn>
              </v-card-actions>
            </v-card>
            <v-tooltip right>
              <v-btn slot="activator" icon large href="https://codepen.io/johnjleider/pen/qxQWda" target="_blank">
                <v-icon large>mdi-codepen</v-icon>
              </v-btn>
              <span>Codepen</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
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
