<script setup lang="ts">
const cartStore = useCartStore()
</script>
<template>
	<NuxtLayout>
		<section class="cartHeader">
			<div class="cartHeader__header">
				<h1>Ваша корзина</h1>
				<div class="cartHeader__total">
					{{
						`${cartStore.getTotalCount} товар${
							cartStore.getTotalCount > 4
								? 'ов'
								: cartStore.getTotalCount > 1
								? 'а'
								: ''
						}`
					}}
				</div>
			</div>
			<button @click="cartStore.deleteAll()" class="cartHeader__button">
				Очистить корзину
			</button>
		</section>
		<section class="cart">
			<div class="cart__cart">
				<CartList />
				<Checkbox></Checkbox>
			</div>
			<CartTotal />
		</section>
	</NuxtLayout>
</template>
