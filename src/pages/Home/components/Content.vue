<template>
  <div id="content">
    <v-container>
      <v-row align="center" class="content-row" style="height: 85vh;">
        <v-col
          cols="12"
          lg="4"
          class="order-lg-2 offset-lg-1 text-sm-center p-content p-sm-0"
        >
          <img
            src="@/assets/images/me/profile.jpg"
            class="rounded-circle image-content"
            alt="profile-alex"
            height="285"
            width="285"
          />
        </v-col>
        <v-col
          cols="12"
          lg="5"
          class="offset-lg-1 text-sm-center text-md-start text-content pt-sm-0 pb-sm-0"
        >
          <h1>
            Hola, Soy Alexander G Desarrollador web
          </h1>
          <p class="secundary mt-5">
            Durante mi aprendizaje en el desarrollo de software he tenido la
            posibilidad de trabajar en proyectos web tanto en la parte frontend
            como backend, encontrando en ellos un mundo maravilloso en el cual
            se pueden crear soluciones y dar vida a sitios y páginas web a
            partir de un prototipo.
          </p>
          <v-list-item
            class="d-inline-block px-0"
            href="https://google.com/"
            target="_blank"
            ><v-btn class="btntext--text btn">Descargar CV</v-btn></v-list-item
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
