<template lang="pug">
  section.hero.is-success
    .hero-head
      header.navbar
        .container
          .navbar-start
              .navbar-item
                router-link.navbar-item(to="/") 
                  strong 📻 Platzi Music
          .navbar-end
            router-link.navbar-item(to="search") Buscar
            router-link.navbar-item(to="about")  Nosotros

    .hero-body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitle Canciones que están Vue-nísimas
        pm-player 
</template>

<script>
import PmPlayer from '~/components/shared/Player.vue'
export default {
  components : {PmPlayer}
}
</script>
