<script setup lang="ts">
const containerRef = ref(null)
const viewedStore = useViewedStore()
const swiper = useSwiper(containerRef, {
	slidesPerView: 4,
	spaceBetween: 10,
	slidesPerGroup: 4,
	pagination: {
		type: 'fraction',
	},
})
</script>

<template>
	<div class="footer__header">
		<h2 class="footer__title">Просмотренные товары</h2>
		<div class="pagination">
			<button class="pagination__left" @click="swiper.prev()"></button>
			<button class="pagination__right" @click="swiper.next()"></button>
		</div>
	</div>
	<swiper-container class="swiper" ref="containerRef">
		<Slide
			v-for="item in viewedStore.viewedList"
			:key="item.id"
			:item="item"
		></Slide>
	</swiper-container>
</template>

<style lang="css">
swiper-slide {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	height: 20vh;
	font-size: 4rem;
	font-weight: bold;
	font-family: 'Roboto', sans-serif;
}
</style>
