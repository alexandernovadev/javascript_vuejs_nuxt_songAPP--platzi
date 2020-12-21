<template lang="pug">
.container(v-if="track && track.id")
    .columns
        .column.is-3.has-text-centered
            figure.media-left
                p.image
                    img(:src="track.album.images[0].url")
                p.button-bar
                    a.button.is-primary.is-large
                        span.icon(@click="selectTrack") ▶️

        .column.is-8
            .panel
                .panel.heading
                    h1.title {{getTitle}}
                .pnale-block
                    article.media
                        .media-content
                            .content
                                ul(v-for="(v,t) in track")
                                    li
                                        strong {{ t }}: &nbsp;
                                        span {{ v }}
                        
                        nav.level
                            .level-left
                                a.level-item

</template>

<script>
import { mapActions, mapState, mapGetters} from 'vuex'
import trackService from '~/plugins/services/track'
import trackMixin from '~/plugins/Mixins/track'

export default {
  mixins: [ trackMixin],
  components: {},

  computed: {
    ...mapState(['track']),
    ...mapGetters(['getTitle'])
  },
  head(){
    return {
      title: this.track.name
    }
  },

  asyncData({params}) {
    
    const id = params.id;

      return trackService.getById(id)
        .then(res=>{
          console.log('Track Loaded ...');
          return { track: res}
        })
    
  },

  methods: {
    ...mapActions(['getTrackByID'])
  },

};
</script>

<style lang="scss" scoped>
.columns {
  margin: 20px;
}
.button-bar {
  margin-top: 20px;
}
</style>
