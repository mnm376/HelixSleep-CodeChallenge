<template>
    <div class="hs-product-title">
        <div class="hs-product-title_container">
            <div class="hs-product-title_title-text">
                {{ title }}
            </div>
            <div class="hs-product-title_description">
                {{ description }}
            </div>
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