<template>
  <div id="app">
    <div class="container">
      <div class="columns">
        <div class="column is-three-quarters">
          <xHeaderPanel 
            :titlePanel="'Games'"
            v-on:filteredProducts="filterProducts"
          />
          <div class="columns is-multiline">
            <xCard v-for="(item, i) in listProducts" :key="i"
              :card_id="item.id"
              :card_name="item.name" 
              :card_price="item.price"
              :card_score="item.score"
              :card_image="item.image"
              v-on:addCartProduct="addProductCart"
              class="column is-one-third"
            />
          </div>
        </div>

        <div class="column">
          <xCart 
            :titlePanel="'Carrinho'"
            :listProductsCart="listProductsCart"
            :qtdeProducts="qtdeProducts"
            :subtotalCart="subtotalCart"
            :freteValue="freteValue"
            :totalCart="totalCart"
            v-on:removeProduct="removeProductCart"
          />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import store from './vuex'
import xHeaderPanel from './components/xHeaderPanel.vue'
import xCard from './components/xCard.vue'
import xCart from './components/xCart.vue'

export default {
  name: 'app',
  components: {
    xHeaderPanel,
    xCard,
    xCart
  },
  data () {
    return {
      listProducts: {},
      listProductsCart: {},
      qtdeProducts: 0,
      subtotalCart: 0,
      freteValue: 0,
      totalCart: 0
    }
  },
  mounted () {
    this.listProducts = this.$store.getters.listProducts;
    this.listProductsCart = this.$store.getters.listProductsCart;
    this.filterProducts(1);
  },
  methods: {
    filterProducts (idCategory) {
      let listFilters = this.listProducts;

      if (idCategory == 1) {
        this.$store.dispatch('filterByScore', listFilters);
      } else if (idCategory == 2) {
        this.$store.dispatch('filterByPrice', listFilters);
      } else {
        this.$store.dispatch('filterByName', listFilters);
      }
    },
    addProductCart (idProduct) {
      this.listProductsCart = this.$store.getters.listProductsCart;
      let productAdd = this.listProducts.filter((product) => {
        if (product.id === idProduct) return product;
      });
      this.listProductsCart.push(productAdd[0]);
      this.$store.dispatch('updateListProductCard', this.listProductsCart);
      this.updateCartValue(this.listProductsCart);
    },
    updateCartValue (listProducts) {
      let subtotalCart = 0,
          freteValue = 0;
      this.qtdeProducts = Object.keys(listProducts).length;

      listProducts.forEach(product => {
        subtotalCart += product.price
      });

      this.subtotalCart = subtotalCart;
      freteValue = this.qtdeProducts * 10;
      if (subtotalCart.toFixed() > 250) {
        freteValue = 0;
      }
      this.freteValue = freteValue;
      this.totalCart = subtotalCart + freteValue;
    },
    removeProductCart (idProductCart) {
      this.listProductsCart = this.listProductsCart.filter((product) => {
        if (product.id != idProductCart) return product;
      });
      this.$store.dispatch('updateListProductCard', this.listProductsCart);
      this.updateCartValue(this.listProductsCart)
    }
  },
  store
}
</script>

<style style="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
@import '../node_modules/bulma/css/bulma.css';

#app {
  font-family: 'Open Sans', sans-serif;
  padding-top: 50px;
}

.panel {
  float: left;
}

.panel-left {
  width: 75%;
}

.panel-right {
  width: 25%;
}
</style>
