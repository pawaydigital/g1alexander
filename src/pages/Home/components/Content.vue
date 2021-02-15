<template>
  <div id="content">
    <v-container>
      <v-row align="center" style="height: 85vh;">
        <v-col cols="12" lg="4" class="order-lg-2 offset-1">
          <v-img
            lazy-src="@/assets/images/blog/comment-01.jpg"
            height="285"
            width="285"
            src="@/assets/images/blog/comment-01.jpg"
            class="rounded-circle"
          ></v-img>
        </v-col>
        <v-col cols="12" lg="5" class="offset-1">
          <h1>
            Hola, Soy Alexander G Desarrollador web Frontend
          </h1>
          <p class="secundary mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque arcu
            a amet augue morbi vitae. Dui urna, aliquet nibh congue volutpat Dui
            urna, aliquet nibh congue volutpat
          </p>
          <v-list-item
            class="d-inline-block px-0"
            href="https://google.com/"
            target="_blank"
            ><v-btn class="primary">Descargar CV</v-btn></v-list-item
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
