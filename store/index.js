import Vuex from 'vuex'

//switch to modules mode since classic is being deprecated soon, using for the purposes of assignment
const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            active_product: {
                name: "Red",
                sku: "180375193",
                compare_price: 1450,
                price: 1250,
                image: {
                    src: "/images/products/the-sofa/sofa-red.png",
                    alt: "alt-text"
                }
            }
        }),
        mutations: {
            mutateCurrentProduct: function (state, payload) {
                const product = payload.product;
                state.active_product.name = product.name;
                state.active_product.sku = product.sku;
                state.active_product.price = product.price;
                state.active_product.compare_price = product.compare_price;
                state.active_product.image.src = product.image.src;
                state.active_product.image.alt = product.image.alt;
            }
        },
        actions: {
            updateProduct: function ({commit}, payload) {
                commit('mutateCurrentProduct', payload);
            }
        }
    })
}

export default createStore