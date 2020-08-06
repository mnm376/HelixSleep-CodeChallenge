<template>
    <nav
        class="hs-header"
        v-bind:class="{ active: showMobileMenu }"
    >
      <div id="hs-header_nav" class="hs-header_nav">
        <div
            class="hs-header_hamburger"
            v-on:click="showMobileMenu = !showMobileMenu"
            v-bind:class="{ 'open': showMobileMenu }"
        >
          <span class="hs-header_hamburger-icon"></span>
          <span class="hs-header_hamburger-icon"></span>
          <span class="hs-header_hamburger-icon"></span>
        </div>
        <div class="hs-header_mobile-image">
          <img src="/images/global/logo/logo.svg" alt="Allsleep Logo">
        </div>
        <div class="hs-header_nav-items">
          <img src="/images/global/logo/logo.svg" alt="Allsleep Logo" class="hs-header_nav-logo">
          <a href=# class="hs-header_nav-item">{{ title }}</a>
          <a href=# class="hs-header_nav-item">Reviews</a>
          <a href=# class="hs-header_nav-item">About Us</a>
          <a href=# class="hs-header_nav-item">Showroom</a>
          <a href=# class="hs-header_nav-item">Swatches</a>
        </div>
      </div>
    </nav>
</template>

<script>
    export default {
        name: "Header",
        props: {
            title: {
                type: String,
                default: "Default Title"
            }
        },
        data() {
          return {
            showMobileMenu: false
          }
        },
        methods: {
          openNav: function() {
            document.getElementById("hs-header_nav").style.width = "100%";
          }
        }
  }
</script>