<script setup lang="ts">
const cartStore = useCartStore()
</script>
<template>
	<div class="cartTotal">
		<h2>Итого</h2>
		<div>
			<div>
				<span>Сумма заказа</span>
				<span>{{ cartStore.getTotalPrice }}</span>
			</div>
			<div>
				<span>Количество</span>
				<span>{{ cartStore.getTotalCount }}</span>
			</div>
			<div>
				<span>Установка</span>
				<span>{{ cartStore.install ? 'Да' : 'Нет' }}</span>
			</div>
		</div>
		<div>
			<span>Стоимость товаров</span>
			<span>total</span>
		</div>
		<button>Оформить заказ</button>
		<button>Купить в 1 клик</button>
	</div>
</template>
