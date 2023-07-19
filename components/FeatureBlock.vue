<template>
    <div :class="['feature-block', `feature-${direction}`]">
        <div class="feature-image">
            <img :src="image" :alt="title" />
        </div>
        <div class="feature-content">
            <h3 class="feature-title md:w-96">{{ title }}</h3>
            <p class="feature-description">{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FeatureBlock',
    props: {
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: ''
        },
        direction: {
            type: String,
            default: 'row'
        }
    }
}
</script>

<style lang="scss" scoped>
.feature-block {
    @apply rounded-4xl overflow-hidden flex items-center justify-evenly bg-sun-gray-200 w-full;

    &.feature-row {
        @apply md:flex-row flex-col justify-evenly;
        .feature-content {
                @apply w-full md:w-1/3 md:max-w-md p-8 lg:p-20 pt-0 md:pl-0 lg:pl-0 md:ml-10;
            }

            .feature-image {
                @apply w-full md:w-2/3 flex justify-end items-center overflow-hidden lg:h-100 md:h-96 h-80 mb-10 md:mb-0 p-8 pb-0 md:pb-8 sm:pl-0 lg:py-20 ;
                img {
                    @apply h-full max-w-none inline-block;
                }
            }
    }

    &.feature-col {
        @apply flex-col p-8 lg:p-20;
        .feature-content {
                @apply w-full;
            }

        .feature-image {
            @apply mb-10 h-full flex justify-center items-center;
            img {
                @apply inline-block;
            }
        }
    }
   
}
</style>