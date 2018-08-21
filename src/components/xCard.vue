<template>
  <div class="card-item" @click="addCart(card_id)">
    <figure class="card-product-image">
      <picture>
        <a href="javascript:void(0);" :title="card_name">
          <img :src="card_image" :alt="card_name"/>
        </a>
      </picture>
    </figure>
    <div class="card-product-details">
      <strong class="subtitle card-product-name hide-it">
        <a href="javascript:void(0);">{{ card_name }}</a>
      </strong>
      <div class="card-product-price hide-it">
        <span class="value">R$ {{ card_price }}</span>
      </div>
      <span class="card-hover">
        <a href="javascript:void(0);" title="Adicionar ao carrinho">
          adicionar ao carrinho
        </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xCard',
  props: {
    card_id: {
      type: Number,
      required: true
    },
    card_name: {
      type: String,
      required: true
    },
    card_price: {
      type: Number,
      required: true
    },
    card_score: {
      type: Number,
      required: true
    },
    card_image: {
      type: String,
      required: true
    }
  },
  methods: {
    addCart (idProduct) {
      this.$emit('addCartProduct', idProduct);
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.card-item {
  margin-bottom: 40px;
  text-align: center;
  position: relative;
}

.hide-it {
  transition: 0.2s ease-in-out;
}

.card-item:hover .card-hover {
  opacity: 1;
  filter: alpha(opacity=100);
}

.card-item:hover .hide-it {
  opacity: 0;
  filter: alpha(opacity=0);
}

.card-product-image {
  display: block;
  padding: 25px 0;
  background: #EEE;
  border-radius: 4px;
}

.card-product-image img {
  display: block;
  margin: 0 auto;
  background: #EEE; 
}

.card-product-details {
  position: relative;
  margin-top: 15px;
}

.card-product-name.subtitle {
  display: block;
  font-size: 16px;
  margin-bottom: 10px;
}

.card-product-name a {
  color: #9A9393;
}

.card-product-price {
  margin-top: 10px;
  text-align: center;
}

.card-product-price span {
  display: inline;
  color:#3486E6;
  font-weight: bold;
}

.card-hover {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #3486E6;
  opacity: 0;
  transition: opacity .2s ease-in-out;
  height: 54px;
  line-height: 54px;
  background: #fff;
  filter: alpha(opacity=0);
}
</style>
