interface IItem {
	id: number
	name: string
	price: number
	image: string
	type: string
	article: string
	count: number
}

const cartListDefautValue: Array<IItem> = [
	{
		id: 1,
		name: 'G2H',
		price: 12644,
		image: '~/assets/G2H.svg',
		article: 'G2H1065',
		type: 'Вытяжное устройство',
		count: 1,
	},
	{
		id: 2,
		name: 'BXC',
		price: 12644,
		image: '~/assets/BXC.svg',
		article: 'G2H1065',
		type: 'Вытяжное устройство',
		count: 1,
	},
	{
		id: 3,
		name: 'GHN',
		price: 12644,
		image: 'kjjj',
		article: 'G2H1065',
		type: 'Вытяжное устройство',
		count: 1,
	},
]
export const useCartStore = defineStore('cartStore', () => {
	const cartList = ref(cartListDefautValue)
	const install = ref(false)

	const deleteAll = () => {
		cartList.value = []
	}

	const deleteItem = (id: number) => {
		cartList.value = cartList.value.filter(el => el.id !== id)
	}

	const increment = (id: number) => {
		cartList.value = cartList.value.map(item => {
			if (item.id === id) item.count += 1
			return item
		})
	}
	const decrement = (id: number) => {
		cartList.value = cartList.value.map(item => {
			if (item.id === id) item.count -= 1
			return item
		})
	}

	const getTotalCount = computed(() => {
		let totalCount = 0
		cartList.value.forEach(item => {
			totalCount += item.count
		})
		return totalCount
	})
	const getTotalPrice = computed(() => {
		let totalPrice = 0
		cartList.value.forEach(item => {
			totalPrice += item.count * item.price
		})
		return totalPrice
	})

	return {
		install,
		cartList,
		deleteItem,
		getTotalCount,
		getTotalPrice,
		deleteAll,
		increment,
		decrement,
	}
})
