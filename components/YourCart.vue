<script setup lang="ts">
const cartStore = useCartStore()
</script>
<template>
	<div class="yourCart">
		<img src="~/assets/cart.svg" alt="cart" />
		<div class="yourCart__info">
			<h3 class="yourCart__header">Ваша корзина</h3>
			<div class="yourCart__total">
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
			<div>{{ `${cartStore.getTotalPrice} ₽` }}</div>
		</div>
	</div>
</template>
