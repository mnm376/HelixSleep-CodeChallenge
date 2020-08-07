# HelixSleep-CodeChallenge

## Build Setup
**Requires Node.js 12.16+**
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

## Completed Pages
The Sofa: http://localhost:3000/product/the-sofa

## Tech
* [Nuxt](https://nuxtjs.org/) 
    * Server-side rendered application
        * Since this challenge was to replicate an e-commerce product page, a server-side rendered app would be helpful for SEO purposes
    * Simple page structure that meet the requirements of the site
    * Nuxt goes hand in hand with the Vue Framework
* [Vue](https://vuejs.org/)
    * Javascript framework
    * Reasons I went with Vue:
        * State
            * Clicking a select box would update the primary image, so a state would be beneficial (Vuex)
        * Markup looked like it could be componentized
        * Site design felt like pages could be templatized (Product Page)
        * Had exposure to Vue for a past [project](https://www.panasonic.aero/) (note: site has seemed to have removed functionalities after handoff)
        * Interact with Vue time to time in current project: [Samsung Newsroom](https://news.samsung.com/us/)
        * Wanted to demonstrate Vue knowledge since Helix requirements mentioned it
        
## TODO
Future features/fixes include (note: some todos are mentioned in the files if not here):
* Nuxt/Vue
    * Pages
        * Have the products load dynamically through an `_id.vue` page
    * Data
        * Have the json data be more db oriented if the site demands multiple products
        * Have the configurator be an array of configurations instead of a single fabric object
    * Static
        * Remove unused static images
    * Store
        * Properly store an initial state
    * Assets
        * Rename style names to prevent repeating "product" so much
        * Rename font variables
    * Components
        * Would be an in-person conversation
    * Misc
        * Handle condition/style when there is no discount
        * Discuss UI setbacks
        * Redo nav (rushed due to time)
        * Redo resizing of feature icons
        * Have payment option/classes dynamic (klarna classname hardcoded due to time)
        * Get clarification of add to cart component styling (not obtainable via figma)
        * Need transparent images, images provided do not match design (edited manually to replicate)
        * Clarify Raleway font looking different from figma's Raleway
