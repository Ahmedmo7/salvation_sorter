<template>
  <v-app id="inspire">
    <v-content>
      <v-parallax height="700" src="https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <vs-popup class="" style="font-family: 'Arial'"  title="Upload Photos" :active.sync="popupActive">
              <h3> Click choose file and upload a photo of your clothing! </h3>
              <vs-input v-if="popupActive" ref="fileInput" type="file" accept="image/gif, image/jpeg, image/png" @change="onFileSelected"></vs-input>
            </vs-popup>
            <v-card class="elevation-12" color="red darken-4">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Welcome to Salvation Solver!</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-img id="image" :src="src"/>
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
  import { mapState } from 'vuex'
  export default {
    data: () => ({
      selectedFile: null,
      drawer: null,
      popupActive: false,
      src: "https://raw.githubusercontent.com/Ahmedmo7/salvation_sorter/master/Ss_final_resize.jpg"
    }),
    methods: {
      // Make sure these methods work
      uploadPhoto() {
        this.popupActive = true;
      },
      capturePhoto() {
        this.popupActive = true;
      },
      onFileSelected(event) {
        const file = event.target.files[0];
        this.$store.commit('addImage', event.target.files[0]);
        console.log(this.$store.state.images[0]);
        /*function getBase64(file) {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
          });
        }
        function postData(url = ``, data) {
          // Default options are marked with *
          return fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
              //"Content-Type": "application/json; charset=utf-8",
              "Authorization": "Bearer ya29.c.ElpfBgmtB9iXqW0dcqMRqwDai12Pm8BX6hphw6-6Izp1BslTX0y3EitvL301Cj5o6HdvpIVTd2ViPigDTeI1PcmyFuJI_pmtCSYv96xeC69miG6cK8GQZjpy0gU",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "x-requested-with",
              "Access-Control-Allow-Methods": "POST",
              "Access-Control-Request-Headers": "x-requested-with",
              "Content-Type": "application/json"
              // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
          })
            .then(response => response); // parses response to JSON
        }
        //const modelFullId = client.modelPath(projectId, computeRegion, modelId);
        getBase64(event.target.files[0]).then(
          data => {
            //const automl = require('@google-cloud/automl').v1beta1;
            //const client = new automl.PredictionServiceClient();
            /**
             * TODO(developer): Uncomment the following line before running the sample.
             */
              // const projectId = `The GCLOUD_PROJECT string, e.g. "my-gcloud-project"`;
              // const computeRegion = `region-name, e.g. "us-central1"`;
              // const modelId = `id of the model, e.g. “ICN12345”`;
              // const filePath = `local text file path of content to be classified, e.g. "./resources/test.txt"`;
              // const scoreThreshold = `value between 0.0 and 1.0, e.g. "0.5"';
      /*
            var base64Encoding = data.split(",")[1];
            // Make POST requests for API calls -- equivalent to CURL post requests
            postData("https://automl.googleapis.com/v1beta1/Clothing_v20181124224313:predict", {
              "payload": {
                "image": {
                  "imageBytes": base64Encoding
                }
              }
            }
          ).then(res => console.log(res))}
        );

        //getBase64(event.target.files[0]);
        //console.log(Buffer.from(event.target.files[0]).toString('base64'));
        //var imageFile = fs.readFileSync();
        //fetch('https://automl.googleapis.com/v1beta1/projects/salvationsorter/locations/us-central1/models')*/
      },
      onUpload() {

      }
    },
    props: {
      source: String
    }
  }
</script>

<style scoped>
</style>
