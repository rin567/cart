<script setup lang="ts">
interface IItem {
	id: number
	name: string
	price: number
	image: string
	type: string
	article: string
	count: number
	about: string
}
defineProps<{
	item: IItem
}>()
</script>
<template>
	<swiper-slide>
		<img height="245" width="245" :src="item.image" :alt="item.name" />
		<div class="swiperItem__info">
			<div class="swiperItem__text">
				<h3 class="swiperItem__header">{{ item.name }}</h3>
				<p>{{ item.about }}</p>
			</div>
			<div class="swiperItem__about">
				<div class="swiperItem__price">
					<div class="swiperItem__priceRub">6 848 ₽ – 56 584 ₽</div>
					<div class="swiperItem__priceEur">77.60 € – 643.86 €</div>
				</div>
				<button class="swiperItem__button">Подробнее</button>
			</div>
		</div>
	</swiper-slide>
</template>
