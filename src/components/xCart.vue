<template>
  <div class="content-cart">
    <h3 class="subtitle">{{ titlePanel }} <span v-show="qtdeProducts">({{ qtdeProducts }} itens)</span></h3>

	<div v-if="qtdeProducts" class="cart-products">
		<div class="content">
			<ul>
				<li v-for="(product, i) in listProductsCart" :key="i">
					<div>
						<div class="content-img">
							<img :src="product.image" :alt="product.name">
						</div>
						<div class="product-info">
							<strong class="subtitle">{{ product.name }}</strong>
							<span class="product-price">R$ {{ product.price }}</span>
							<a @click="removeProductCart(product.id)" class="btn-remove-product" href="javascript:void(0);">x</a>
						</div>						
					</div>
				</li>
			</ul>
			<span class="title-value subtotal-cart">subtotal <strong>R$ {{ parseFloat(subtotalCart).toFixed(2) }}</strong></span>
			<span class="title-value frete-cart">frete <strong>R$ {{ freteValue.toFixed(2) }}</strong></span>
			<span class="title-value total-cart">total <strong>R$ {{ parseFloat(totalCart).toFixed(2) }}</strong></span>
		</div>
		<button class="button is-info">finalizar compra</button>
	</div>
	<div v-else class="cart-message">
		<img src="icons/cart-icon.svg"/>
		<p>Até o momento, <br>o seu carrinho está vazio</p>
	</div>
  </div>
</template>

<script>
export default {
	name: 'xCart',
	props: {
		titlePanel: {
			type: String,
			required: true
		},
		listProductsCart: {
			require: true
		},
		qtdeProducts: {
			type: Number,
			required: true,
			default: 0
		},
		subtotalCart: {
			type: Number,
			required: true,
			default: 0.00
		},
		freteValue: {
			type: Number,
			required: true,
			default: 0.00
		},
		totalCart: {
			type: Number,
			required: true,
			default: 0.00
		}
	},
	methods: {
		removeProductCart (idProductCart) {
			this.$emit('removeProduct', idProductCart);
		}
	}
}
</script>

<style scoped>
.cart-message {
	text-align: center;
	margin-top: 50px;
}

.cart-message p {
	color:#717171;
	margin-top: 15px;
	font-size: 15px;
	line-height: 120%;
}

.content-cart {
	border: 1px solid #dbdbdb;
	border-radius: 5px;
	padding: 12px;
	margin-top: 12px;
	min-height: 315px;
}

.cart-products {
	clear: both;
    display: table;
    overflow: hidden;
	width: 100%;
}
.cart-products .content {
	padding: 0 7px;
}

.content-cart h3 {
	margin: 10px 0 20px;
	color:#423B3B;
	font-weight: bold;
	padding: 0 5px;
	font-size: 16px;
}

.content-cart h3 span {
	font-size: 14px;
	color: #AAA3A3;
	display: inline-block;
	margin-left: 3px;
	font-weight: normal;
}

.content-cart ul {
	padding: 0;
	clear: both;
	margin: 0;
}

.content-cart li {
	list-style: none;
	margin-bottom: 20px;
	display: table;
	width: 100%;
}

.content-cart li:hover .btn-remove-product {
	opacity: 1;
	filter: alpha(opacity=100);
}

.content-img {
	width: 60px;
	height: 53px;
	background: #eee;
	padding: 5px 2px;
	margin-right: 10px;
	float: left;
	border-radius: 4px;
}

.content-img img {
	height: 100%;
	display: block;
	margin: 0 auto;
}

.content-cart .product-info {
    position: relative;
    float: left;
    width: 160px;
    height: 100%;
}

.product-info strong {
	font-size: 16px;
	color: #d1d1d1;
	font-weight: normal;
	display: block;
	margin-bottom: 0;
	padding-right: 15px;
}

.product-price {
	color: #333;
	font-size: 14px;
	font-weight: bold;
	display: block;
}

.btn-remove-product {
	position: absolute;
	right: 0;
	top: 15px;
	border-radius: 50px;
	background: #54A3FF;
	width: 15px;
	height: 15px;
	text-indent: 0;
	overflow: hidden;
	opacity: 0;
	filter: alpha(opacity=0);
	transition: all .2s ease-in-out;
    text-align: center;
    line-height: 15px;
    font-size: 10px;
    font-weight: bold;
	color:#fff;
}

.button.is-info {
	width: 100%;
	background: #54A3FF;
	height: 50px;
	font-weight: bold;
}

.title-value {
	display: block;
	color: #AAA3A3;
	width: 100%;
	font-size: 15px;
	margin-bottom: 15px;
}

.title-value strong {
	float: right;
}

.total-cart strong {
	font-size: 19px;
}

</style>
