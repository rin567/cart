<script setup lang="ts">
const cartStore = useCartStore()
const numberFormat = new Intl.NumberFormat('ru-RU')
</script>
<template>
	<div class="yourCart">
		<img src="~/assets/cart.svg" alt="cart" />
		<div class="yourCart__info">
			<h3 class="yourCart__header">Ваша корзина</h3>
			<div class="yourCart__total">
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
			<div>{{ `${numberFormat.format(cartStore.getTotalPrice)} ₽` }}</div>
		</div>
	</div>
</template>
