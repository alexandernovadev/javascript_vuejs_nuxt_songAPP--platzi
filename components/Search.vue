<template lang="pug"> 
  main
    transition(name="move")
      PmNotification(v-show="showNotification")
        p(slot="body") No se encontraron resultados

 
    section.section
      nav.navbar
        .field.has-addons
          .control.is-expanded
            input.input(
              type="text"
              placeholder="Buscar canciones"
              v-model="searchQuery",
              @keyup.enter="search")
          .control
            button.button.is-info(@click="search") Buscar
          .control
            button.button.is-danger &times;
          .control
            button.button
              span.is-size-7 Encontrados: {{ searchMessage }}

      transition(name="move")
          pmLoader(v-show="isLoading")

      .container.custom(v-show="!isLoading")
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks") 
            pmTrack(
            
              :class="{'is-active': t.id === selectedTrack}"
              :track="t",
              @select="setSelectedTrack")

</template>

<script>
import trackService from "~/plugins/services/track";
import PmTrack from "~/components/Track";
import PmLoader from "~/components/shared/Loader";
import PmNotification from "~/components/shared/Notification";


export default {

  components:{
    PmTrack,
    PmLoader,
    PmNotification
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      searchQuery: "",
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotification: false
    };
  },
  watch: {
    showNotification() {
      if( this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000);
      }
    }
  },
  methods: {
    search() {
      if (this.searchQuery.length > 1) {
        this.isLoading = true
        trackService.search(this.searchQuery).then(res => {
          console.log(res);
          this.showNotification = res.tracks.total === 0
  
          this.tracks = res.tracks.items;
          this.isLoading = false

        });
        console.log("Mi search es ", this.searchQuery);
      }
    },
    setSelectedTrack(id) {
      this.selectedTrack = id
    }
  },
  computed: {
    searchMessage() {
      return `${this.tracks.length}`;
    }
  }
};
</script>

<style lang="scss">
.custom {
  margin-top: 30px;
}
// reslatar elemet selected
.is-active {
  border: 3px #23d160 solid;
}
.move-enter-active, .move-leave-active{
  transform: translateX(0);
  transition: all .3s linear;
} 

.move-enter, .move-leave-to {
  transform: translateX(100%);
}
</style>
