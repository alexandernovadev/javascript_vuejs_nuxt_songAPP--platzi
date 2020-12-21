<template lang="pug">
  .media(v-if="track && track.album")
    .media-left
        p
            figure.image.is-128x128
                img(:src="track.album.images[0].url")
    p.title.is-4
        strong {{ track.name }} &nbsp;
        small [{{track.duration_ms }}] 
        br
        br
        audio(controls, :src="track.preview_url")

</template>

<script>
import { mapState } from 'vuex';
export default {
       computed : {
        ...mapState(['track'])
    }
}
</script>

<style>
audio{
    outline: none;
}
</style>