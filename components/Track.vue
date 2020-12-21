<template lang="pug">
  .card(v-if="track && track.album")
    .card-image
        figure.image.is-1by1
            img(:src="track.album.images[0].url")
    
    .card-content
        .media 
            .media-left
                figure.image.is-48x48
                    img(:src="track.album.images[0].url")
            .media-content
                p.title.is-6
                    strong {{ track.name }}
                p.subtitle.is-6 {{ track.artists[0].name }}
        
        .content
            small {{ track.duration_ms }}
            nav.level
                .level-left
                    button.level-item.button.is-primary
                        span.icon.is-small(@click="selectTrack") ▶
                    button.level-item.button.is-warning
                        span.icon.is-small(@click="goToTrack") 🌎
</template>

<script>
import trackMixin from "~/plugins/Mixins/track";

export default {
  mixins: [trackMixin],
  props: {
    track: { type: Object, required: true }
  },
  methods: {
    goToTrack() {
      if (!this.track.preview_url) {
        return;
      }
      this.$router.push(`track/${this.track.id}`);
    }
  }
};
</script>

<style></style>
