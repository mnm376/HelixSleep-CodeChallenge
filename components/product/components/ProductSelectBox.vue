<template>
    <div class="hs-product-select-box">
        <button v-on:click="update"></button>
        <div>
            <p>{{ product.name }}</p>
            <div v-if="this.$store.state.active_product.name===product.name">Active</div>
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