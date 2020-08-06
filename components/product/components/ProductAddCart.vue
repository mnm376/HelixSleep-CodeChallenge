<!--TODO: A condition  where the price and compare price are the same-->
<template>
    <div class="hs-product-add-cart">
      <div class="hs-product-add-cart_container">
        <div class="hs-product-add-cart_price-container">
          <div class="hs-product-add-cart_buy">
            <p class="hs-product-add-cart_buy-text">Pay Now</p>
            <p class="hs-product-add-cart_buy-price">${{ formatPrice(price) }}</p>
            <p class="hs-product-add-cart_buy-compare">${{ formatPrice(compare_price) }}</p>
            <p class="hs-product-add-cart_buy-discount">${{ formatPrice(discount) }} OFF with code</p>
          </div>
          <div class="hs-product-add-cart_klarna">
            <p class="hs-product-add-cart_klarna-text">Pay as low as</p>
            <div class="hs-product-add-cart_klarna-box">
              <p class="hs-product-add-cart_klarna-price">$25<span class="hs-product-add-cart_klarna-month">/month</span></p>
            </div>
            <p class="hs-product-add-cart_klarna-second-text">with Klarna</p>
            <a href="#" class="hs-product-add-cart_klarna-learn-more">Learn More</a>
          </div>
        </div>
        <button class="hs-product-add-cart_button">Add to Cart</button>
        <div class="hs-product-add-cart_save">
          <a href="#" class="hs-product-add-cart_save-text">Save Design for Later</a>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ProductAddCart",
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
      methods: {
          formatPrice(num) {
            return num.toLocaleString();
          }
      }
    }
</script>