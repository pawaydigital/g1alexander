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
            ><v-btn class="btntext--text btn">Descargar CV</v-btn></v-list-item
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
