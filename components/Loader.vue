<template>
    <div :class="['loader', { 'dark': dark }, { 'big': big }]">
        <div class="outline opacity-25"></div>
        <div class="highlight">
            <div class="outline"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Loader',
    props: {
        dark: {
            type: Boolean,
            default: false
        },
        big: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
.loader {
    @apply inline-block align-middle relative animate-spin;
    animation-duration: .5s;

    .outline {
        @apply h-4 w-4 rounded-full border-2 border-white;
    }

    .highlight {
        @apply absolute top-0 h-2 w-2 overflow-hidden;
    }

    &.dark {
        .outline {
            border-color: #1782FF;
        }
    }

    &.big {
        .outline {
            @apply w-6 h-6 border-4;
        }

        .highlight {
            @apply w-3 h-3;
        }

        @screen sm {
            .outline {
                @apply w-8 h-8;
            }

            .highlight {
                @apply w-4 h-4;
            }
        }
    }
}</style>