<script setup lang="ts">
const cartStore = useCartStore()
const numberFormat = new Intl.NumberFormat('ru-RU')

const sendTotal = list => {
	$fetch('/api/cart', {
		method: 'POST',
		body: list,
	})
	alert('Заказ оформлен.')
}
</script>
<template>
	<div class="cartTotal">
		<h2>Итого</h2>
		<div class="cartTotal__info">
			<div class="cartTotal__row">
				<span>Сумма заказа</span>
				<span>{{ `${numberFormat.format(cartStore.getTotalPrice)} ₽` }}</span>
			</div>
			<div class="cartTotal__row">
				<span>Количество</span>
				<span>{{ `${cartStore.getTotalCount} шт` }}</span>
			</div>
			<div class="cartTotal__row">
				<span>Установка</span>
				<span>{{ cartStore.install ? 'Да' : 'Нет' }}</span>
			</div>
		</div>
		<hr />
		<div class="cartTotal__row">
			<span class="cartTotal__priceTitle">Стоимость товаров</span>
			<span class="cartTotal__price">{{
				`${numberFormat.format(cartStore.getTotalPrice)} ₽`
			}}</span>
		</div>
		<div class="cartTotal__btnContainer">
			<button
				@click="
					sendTotal({
						install: cartStore.install,
						cartList: { ...cartStore.cartList },
					})
				"
				class="cartTotal__buttonBlue"
			>
				Оформить заказ
			</button>
			<button class="cartTotal__buttonWhite">Купить в 1 клик</button>
		</div>
	</div>
</template>
