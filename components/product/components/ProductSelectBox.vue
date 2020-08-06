<template>
    <div class="hs-product-select-box">
        <div
            v-on:click="update"
            class="hs-product-select-box_container"
        >
          <img
              :src="product.image.src"
              :alt="product.image.alt"
              class="hs-product-select-box_image"
          />
          <div class="hs-product-select-box_button">
            <div class="hs-product-select-box_button-text">{{ product.name }}</div>
<!--            <div v-if="this.$store.state.active_product.sku===product.sku">Active</div>-->
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