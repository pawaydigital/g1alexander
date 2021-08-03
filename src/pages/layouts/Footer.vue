<template>
  <footer id="footer" class="pt-16">
    <v-container>
      <v-row class="footer text-center" align="center">
        <v-col cols="12" class="pb-0">
          <v-list-item
            class="d-inline-block mr-2"
            href="https://co.linkedin.com/in/g1alexander/"
            rel="noopener"
            target="_blank"
            ><v-icon large color="linkedin darken-2">
              {{ mdiLinkedin }}
            </v-icon></v-list-item
          >
          <v-list-item
            class="d-inline-block mr-2"
            href="https://www.github.com/g1alexander/"
            rel="noopener"
            target="_blank"
            ><v-icon large color="github darken-2">
              {{ mdiGithub }}
            </v-icon></v-list-item
          >
          <v-list-item
            class="d-inline-block mr-2"
            href="https://www.twitter.com/g1alexander_/"
            rel="noopener"
            target="_blank"
            ><v-icon large color="twitter darken-2">
              {{ mdiTwitter }}
            </v-icon></v-list-item
          >
          <v-list-item
            class="d-inline-block"
            href="https://www.instagram.com/g1alexander/"
            rel="noopener"
            target="_blank"
          >
            <v-icon large color="instagram darken-2">
              {{ mdiInstagram }}
            </v-icon></v-list-item
          >
        </v-col>
        <v-col cols="12" class="pt-0">
          Copyright &copy; 2021 All rights reserved
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script>
import { mdiLinkedin, mdiGithub, mdiTwitter, mdiInstagram } from "@mdi/js";
export default {
  data() {
    return {
      mdiLinkedin,
      mdiGithub,
      mdiTwitter,
      mdiInstagram,
    };
  },
};
</script>

<style>
.footer {
  height: 150px;
}
.v-list-item {
  min-height: 0 !important;
  padding: 0 3px;
}
</style>
