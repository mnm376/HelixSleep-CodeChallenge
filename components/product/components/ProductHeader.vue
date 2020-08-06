<template>
    <div class="hs-product-header">
        <div class="hs-product-header_checkout">
          <span class="hs-product-header_checkout-text">Secure Checkout</span>
        </div>
        <div class="hs-product-header_availability">
            <div class="hs-product-header_availability-text">{{ availability }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductHeader",
        props: {
            availability: {
                type: String,
                default: "Available"
            }
        }
    }
</script>