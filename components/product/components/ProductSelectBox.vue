<template>
    <div
        :class="{
                  'hs-product-select-box': true,
                  'active': (this.$store.state.active_product.sku === product.sku)
        }"
    >
        <div
            v-on:click="update"
            class="hs-product-select-box_container"
        >
          <div class="hs-product-select-box_image-container">
            <img
                :src="product.image.src"
                :alt="product.image.alt"
                class="hs-product-select-box_image"
            />
          </div>
          <div class="hs-product-select-box_button">
            <div class="hs-product-select-box_button-text">{{ product.name }}</div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductSelectBox",
        props: {
            product: {
                type: Object
            }
        },
        methods: {
            update: function() {
                this.$store.dispatch("updateProduct", { product: this.product })
            }
        }
    }
</script>