<template>
    <div class="hs-product-title">
        <div class="hs-product-title_container">
            <div class="hs-product-title_text">{{ title }}</div>
            <span
                class="hs-product-title_description"
                v-html="description"
            >
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductTitle",
        props: {
            title: {
                type: String
            },
            description: {
                type: String
            }
        }
    }
</script>