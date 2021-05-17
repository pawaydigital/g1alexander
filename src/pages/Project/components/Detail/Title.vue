<template>
  <div id="title" class="text-center mt-4">
    <h2>{{ title }}</h2>
    <div class="mt-3">
      <span
        v-if="this.status === 'Terminado'"
        class="detail--text mr-3 subtitle-2 font-weight-black"
      >
        <v-icon class="mr-1" medium color="detail darken-2">
          {{ mdiCheckboxMarked }} </v-icon
        >{{ status }}
      </span>
      <span v-else class="detail--text mr-3 subtitle-2 font-weight-black">
        <v-icon class="mr-1" medium color="detail darken-2">
          {{ mdiCheckboxBlankOutline }} </v-icon
        >{{ status }}
      </span>
      <span class="detail--text subtitle-2 font-weight-black">
        <v-icon class="mr-2" medium color="detail darken-2">{{
          mdiCalendarClock
        }}</v-icon
        >{{ date }}
      </span>
    </div>
  </div>
</template>
<script>
import {
  mdiCalendarClock,
  mdiCheckboxBlankOutline,
  mdiCheckboxMarked,
} from "@mdi/js";
export default {
  data() {
    return {
      mdiCalendarClock,
      mdiCheckboxBlankOutline,
      mdiCheckboxMarked,
    };
  },
  props: {
    title: String,
    date: String,
    status: String,
  },
};
</script>
