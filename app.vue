<script setup lang="ts">
const cartStore = useCartStore()
const viewedStore = useViewedStore()
cartStore.getCartList()
viewedStore.getViewedList()
</script>
<template>
	<NuxtLayout>
		<section class="cartHeader">
			<div class="cartHeader__header">
				<h1>Ваша корзина</h1>
				<div class="cartHeader__total">
					{{
						`${cartStore.getTotalCount} товар${
							cartStore.getTotalCount > 4 || cartStore.getTotalCount === 0
								? 'ов'
								: cartStore.getTotalCount > 1
								? 'а'
								: ''
						}`
					}}
				</div>
			</div>
			<button
				v-if="cartStore.getTotalCount"
				@click="cartStore.deleteAll()"
				class="cartHeader__button"
			>
				Очистить корзину
			</button>
		</section>
		<section v-if="cartStore.getTotalCount" class="cart">
			<div class="cart__cart">
				<CartList />
				<Checkbox></Checkbox>
			</div>
			<CartTotal />
		</section>
		<section class="empty" v-else>
			<p>Добавьте товары в корзину</p>
		</section>
	</NuxtLayout>
</template>
