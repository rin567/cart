<script setup lang="ts">
const cartStore = useCartStore()
</script>
<template>
	<NuxtLayout>
		<section class="cartHeader">
			<h1>Ваша корзина</h1>
			<span>{{ cartStore.getTotalCount }}товар</span>
			<button @click="cartStore.deleteAll()" class="cartHeader__button">
				Очистить корзину
			</button>
		</section>
		<section class="cart">
			<div>
				<CartList />
				<Checkbox></Checkbox>
			</div>
			<CartTotal />
		</section>
	</NuxtLayout>
</template>
