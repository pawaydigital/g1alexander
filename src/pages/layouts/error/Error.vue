<template>
  <v-app id="error" class="bg">
    <v-container class="py-1">
      <v-row class="align-center" style="height: 100vh">
        <v-col cols="12" sm="12" md="12" class="error__title">
          <p class="text-uppercase">404 not found</p>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <img
            src="@/assets/images/error/error.png"
            class="error__image"
            height="480"
            width="540"
            alt="error-image"
          />
        </v-col>
        <v-col cols="12" sm="12" md="6" class="error__content">
          <h1>Tengo malas noticias para ti</h1>
          <p class="mt-lg-5 mb-lg-7">
            La página que buscas podría estar eliminada o no estar disponible
            temporalmente
          </p>
          <router-link to="/" class="text-decoration-none">
            <v-btn large class="btn btntext--text">Volver</v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
#error .error__title p {
  font-size: 24px;
}
#error .error__content h1 {
  font-size: 50px;
}
#error .error__content p {
  width: 60%;
}

@media screen and (max-width: 768px) {
  #error {
    text-align: center;
  }
  #error .error__content p {
    width: 100%;
    margin-bottom: 2em;
    margin-top: 1em;
  }
  #error .error__image {
    max-height: 560px;
    max-width: 100%;
  }
}
@media screen and (max-width: 411px) {
  #error .error__content h1 {
    font-size: 30px;
  }
  #error .error__content p {
    font-size: 15px;
    margin-top: 1em;
    margin-bottom: 1em;
  }
  #error .error__image {
    max-height: 238px;
    max-width: 238px;
  }
}
</style>
