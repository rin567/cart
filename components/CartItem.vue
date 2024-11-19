<script setup lang="ts">
interface IItem {
	id: number
	name: string
	price: number
	image: string
	type: string
	article: string
	count: number
}
defineProps<{
	cartItem: IItem
}>()
const cartStore = useCartStore()
</script>
<template>
	<li class="cartList__item">
		<img height="100" width="100" :src="cartItem.image" :alt="cartItem.name" />
		<div class="item__text">
			<h2 class="item__name">{{ `${cartItem.type} ${cartItem.name}` }}</h2>
			<p class="item__des">
				12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия
			</p>
			<p class="item__art">Aртикул: {{ cartItem.article }}</p>
		</div>
		<div class="item__counter">
			<button
				@click="cartStore.decrement(cartItem.id)"
				class="item__buttonLeft"
			>
				-
			</button>
			<div class="item__count">{{ cartItem.count }}</div>
			<button
				@click="cartStore.increment(cartItem.id)"
				class="item__buttonRight"
			>
				+
			</button>
		</div>
		<div>{{ `${cartItem.price * cartItem.count} ₽` }}</div>
		<button
			@click="cartStore.deleteItem(cartItem.id)"
			class="item__delete"
		></button>
	</li>
</template>
