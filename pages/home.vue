<template>
  <v-app id="inspire">
    <v-content>
      <v-parallax height="700" src="https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&h=650&w=940">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <vs-popup class="" style="font-family: 'Arial'"  title="Upload Photos" :active.sync="popupActive">
              <h3> Click choose file and upload a photo of your clothing! </h3>
              <vs-input v-if="popupActive" type="file" @change="onFileSelected"></vs-input>
            </vs-popup>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Welcome to Salvation Solver!</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip right>
                  <v-btn slot="activator" icon large href="https://codepen.io/johnjleider/pen/wyYVVj" target="_blank">
                    <v-icon large>mdi-codepen</v-icon>
                  </v-btn>
                  <span>Codepen</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-img id="image" src="https://raw.githubusercontent.com/Ahmedmo7/salvation_sorter/master/Ss_final_resize.jpg"/>
              </v-card-text>
              <v-card-actions>
                <v-btn @click="uploadPhoto" color="primary">Upload Photos</v-btn>
                <v-spacer></v-spacer>
                <v-btn @click="capturePhoto" color="primary">Capture Photo</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      </v-parallax>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      popupActive: false
    }),
    methods: {
      // Make sure these methods work
      uploadPhoto() {
        this.popupActive = true;
      },
      capturePhoto() {
        this.popupActive = true;
      }
    },
    props: {
      source: String
    }
  }
</script>

<style scoped>
</style>
