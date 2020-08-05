<template>
    <div class="hs-add-to-cart">
        Price: {{ price }} Compare Price: {{ compare_price }} Discount: {{ discount }}
    </div>
</template>

<script>
    export default {
        name: "ProductAddToCart",
        computed: {
            price() {
                return this.$store.state.active_product.price;
            },
            compare_price() {
                return this.$store.state.active_product.compare_price;
            },
            discount() {
                var price = this.price;
                var compare_price = this.compare_price;
                return (compare_price - price)
            }
        },
    }
</script>