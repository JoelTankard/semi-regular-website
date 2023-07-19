<template>
    <video :class="{ 'small-video' : !hero }"  v-sync-location v-on-intersect="{topOffset: loadOffset, bottomOffset: loadOffset}" ref="video" preload="none" @loadeddata="loaded = true" @play="playing = true" @pause="playing = false" autoplay playsinline loop muted>
        <source :src="src" type="video/mp4"/>
    </video>
</template>

<script>
export default {
    name: 'preVideo',
    props: {
        hero: {
            type: Boolean,
            default: false
        },
        loadOffset: {
            default: '50%', 
            type: String
        },
        src: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isVisible: null,
            isIntersecting: null,
            loaded: false,
            playing: false
        }
    },
    watch: {
        loaded(isLoaded) {
            if (isLoaded) {
                this.$emit('loaded')
            }
        },
        isVisible(isVisible, wasVisible) {
        // when out of view pause video
            if (wasVisible && this.playing) {
                this.$refs.video.pause()
            } else if (isVisible && !this.playing && this.loaded) {
                this.$refs.video.play()
            }
        },
        isIntersecting(isIntersecting, wasIntersecting) {
            // load if video is intersecting
            if (isIntersecting && !this.loaded) {
                this.$refs.video.load()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.small-video {
    max-height: 600px;
    margin-left: auto;
    margin-right: auto;
}
</style>