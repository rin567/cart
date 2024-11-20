interface IItem {
	id: number
	name: string
	price: number
	image: string
	type: string
	article: string
	count: number
	about?: string
}

const cartListDefautValue: Array<IItem> = [
	{
		id: 1,
		name: 'G2H',
		price: 12644,
		image:
			'https://s3-alpha-sig.figma.com/img/9dcd/2a6e/6e52f0e3db978e2972974a05e2cab1f7?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nilxpoYbI6upTHVr497ZyZ51jiiXsh-T1AebPhLgysMHeAYw8AzNUigAgLuzHfvCiCxtK1WSLn42UDk5T6xz7w0yanTMlcENQhXa-bayLfSCWQ~n13xWkd88Lx66LTyXioZj8zjJC0zMhY-EqeOmbKnNaRFO~Hb8PDNMVAVNT5tKHRPHb7~quiF3N4FCSPMYvclsEFBexQVP2jLY0~ugsDtSPFoj2QQMP~5oFhhQIwmfDlWHtVsLsUOEj~INA~5IONNNoFRxbka9Fl5EsFMBn7bY0gi12tLBDOzdtK6d5AzVRc4k~wArJbv2q9zhS0FuZGtWDVhYEsAB-8ZnnniIbA__',
		article: 'G2H1065',
		type: 'Вытяжное устройство',
		count: 1,
	},
	{
		id: 2,
		name: 'BXC',
		price: 12644,
		image:
			'https://s3-alpha-sig.figma.com/img/c16c/179f/01e10420cfedd1db0ccc213f53f48ab7?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SyDhVnbR~nmFvTVdOmGaYfyKjb0oM2lBM1DyidXrdlCvpMfqGQXx9yq9tDTfJ4DQGwsi45BntK5pBdTw75gwq36mGU1kVqpbk2p80HEa9NXPWqUoUFaODkzl~BUQaVH6Jhe0MulEsaP80Y2BB0VGWCsWVWHB01McfkF1RYGfsIuoDxEg3-GuS6xcN6lfIbbshihcteDPdqWPnXO-WDmzowVsO8dQtPQXPLtIE-ktqpO-bgwMPBMs0G4LATFqd8ehpENMwG2r0axsjp3vpLRl1JXMMgPIIPc09JqAWhQ5tHaucAP3KLvKyzsdlJbB-xNxzayMbnaYlsrBEWv6WbcOxQ__',
		article: 'G2H1065',
		type: 'Вытяжное устройство',
		count: 1,
	},
	{
		id: 3,
		name: 'GHN',
		price: 12644,
		image:
			'https://s3-alpha-sig.figma.com/img/2268/b19f/a3325353a0e1c66b734515429be5faca?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KpCr-xPFcLJuHC6QyG67KjtXhdL3I6P64L81vW4CjttMGc9AERJH5tAKWIEnNJtwa9GKARA5KqDfOEZNtcoMqNoZwb4rKlG0EXo~5VUiyR9G3ogG1T11I9vFZxjVPzGb25diVX0gici4x~48Z6jlRTMkJ8oJEzVyyMQ-SwaSZ12PbkCRLzEs1-BIHaU7Cw67DOxShFck-~vT5QpCpymthVIrhbABP42Qa3RkNsJpMqPZPqA0oRRqbMt5XGjFx1PxEQqAOM0xfOilhL8UQ5BP1Vkj~Uxq1hxvtt4IOWalwU-JB46L0s8s-zoLuwX67EKAJ71eyd02kvm82AAydLWbTw__',
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
	const decrement = (id: number, count: number) => {
		if (count === 1) {
			deleteItem(id)
		} else {
			cartList.value = cartList.value.map(item => {
				if (item.id === id) item.count -= 1
				return item
			})
		}
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

export const useViewedStore = defineStore('viewedStore', () => {
	const viewedList: Array<IItem> = [
		{
			id: 1,
			name: 'G2H',
			price: 12644,
			image:
				'https://s3-alpha-sig.figma.com/img/9dcd/2a6e/6e52f0e3db978e2972974a05e2cab1f7?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nilxpoYbI6upTHVr497ZyZ51jiiXsh-T1AebPhLgysMHeAYw8AzNUigAgLuzHfvCiCxtK1WSLn42UDk5T6xz7w0yanTMlcENQhXa-bayLfSCWQ~n13xWkd88Lx66LTyXioZj8zjJC0zMhY-EqeOmbKnNaRFO~Hb8PDNMVAVNT5tKHRPHb7~quiF3N4FCSPMYvclsEFBexQVP2jLY0~ugsDtSPFoj2QQMP~5oFhhQIwmfDlWHtVsLsUOEj~INA~5IONNNoFRxbka9Fl5EsFMBn7bY0gi12tLBDOzdtK6d5AzVRc4k~wArJbv2q9zhS0FuZGtWDVhYEsAB-8ZnnniIbA__',
			article: 'G2H1065',
			type: 'Вытяжное устройство',
			count: 1,
			about:
				'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
		},
		{
			id: 2,
			name: 'BXC',
			price: 12644,
			image:
				'https://s3-alpha-sig.figma.com/img/c16c/179f/01e10420cfedd1db0ccc213f53f48ab7?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SyDhVnbR~nmFvTVdOmGaYfyKjb0oM2lBM1DyidXrdlCvpMfqGQXx9yq9tDTfJ4DQGwsi45BntK5pBdTw75gwq36mGU1kVqpbk2p80HEa9NXPWqUoUFaODkzl~BUQaVH6Jhe0MulEsaP80Y2BB0VGWCsWVWHB01McfkF1RYGfsIuoDxEg3-GuS6xcN6lfIbbshihcteDPdqWPnXO-WDmzowVsO8dQtPQXPLtIE-ktqpO-bgwMPBMs0G4LATFqd8ehpENMwG2r0axsjp3vpLRl1JXMMgPIIPc09JqAWhQ5tHaucAP3KLvKyzsdlJbB-xNxzayMbnaYlsrBEWv6WbcOxQ__',
			article: 'G2H1065',
			type: 'Вытяжное устройство',
			count: 1,
			about: 'Вытяжное устройство для механической системы вентиляции',
		},
		{
			id: 3,
			name: 'GHN',
			price: 12644,
			image:
				'https://s3-alpha-sig.figma.com/img/2268/b19f/a3325353a0e1c66b734515429be5faca?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KpCr-xPFcLJuHC6QyG67KjtXhdL3I6P64L81vW4CjttMGc9AERJH5tAKWIEnNJtwa9GKARA5KqDfOEZNtcoMqNoZwb4rKlG0EXo~5VUiyR9G3ogG1T11I9vFZxjVPzGb25diVX0gici4x~48Z6jlRTMkJ8oJEzVyyMQ-SwaSZ12PbkCRLzEs1-BIHaU7Cw67DOxShFck-~vT5QpCpymthVIrhbABP42Qa3RkNsJpMqPZPqA0oRRqbMt5XGjFx1PxEQqAOM0xfOilhL8UQ5BP1Vkj~Uxq1hxvtt4IOWalwU-JB46L0s8s-zoLuwX67EKAJ71eyd02kvm82AAydLWbTw__',
			article: 'G2H1065',
			type: 'Вытяжное устройство',
			count: 1,
			about: 'Вытяжное устройство с датчиком присутствия',
		},
		{
			id: 4,
			name: 'TDA',
			price: 12644,
			image:
				'https://s3-alpha-sig.figma.com/img/2c71/a2f1/2fbef512ec9d08b390ffc1a8a895c69a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WjS61hq1L-91qOVcnC8WEOvpmvYKrA4aBmPnFcWtza1X37E5IVCxmcOwLRWzUb1U6nblWNGEqL5nUjJdA3PoCVNd5cUq-BHEl7Cx2jB0mhjj1RRlBy~lukptUivPH~~r9XEIVzfZoILOquizC8evjN8zRxafv34HrvRQjAdNJtmeUk6K3WWCy4AIohTcVyXLxxMYufeQQeHPMYMkfAs3AwkpSlVG4hrPP6zb5RTzrSgItD0GOjkrzij9KARruhruFbeeJq9cSyzIPJwq-8oyQMu6HF46uiAI3qfnVU2CZaCg8H8PtKzRA2slf5X-7-FcItmdFl-l2MvMVL66adYkHQ__',
			article: 'G2H1065',
			type: 'Вытяжное устройство',
			count: 1,
			about: 'Вытяжное устройство с датчиком присутствия',
		},
		{
			id: 5,
			name: 'G2H',
			price: 12644,
			image:
				'https://s3-alpha-sig.figma.com/img/9dcd/2a6e/6e52f0e3db978e2972974a05e2cab1f7?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nilxpoYbI6upTHVr497ZyZ51jiiXsh-T1AebPhLgysMHeAYw8AzNUigAgLuzHfvCiCxtK1WSLn42UDk5T6xz7w0yanTMlcENQhXa-bayLfSCWQ~n13xWkd88Lx66LTyXioZj8zjJC0zMhY-EqeOmbKnNaRFO~Hb8PDNMVAVNT5tKHRPHb7~quiF3N4FCSPMYvclsEFBexQVP2jLY0~ugsDtSPFoj2QQMP~5oFhhQIwmfDlWHtVsLsUOEj~INA~5IONNNoFRxbka9Fl5EsFMBn7bY0gi12tLBDOzdtK6d5AzVRc4k~wArJbv2q9zhS0FuZGtWDVhYEsAB-8ZnnniIbA__',
			article: 'G2H1065',
			type: 'Вытяжное устройство',
			count: 1,
			about:
				'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
		},
		{
			id: 6,
			name: 'BXC',
			price: 12644,
			image:
				'https://s3-alpha-sig.figma.com/img/c16c/179f/01e10420cfedd1db0ccc213f53f48ab7?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SyDhVnbR~nmFvTVdOmGaYfyKjb0oM2lBM1DyidXrdlCvpMfqGQXx9yq9tDTfJ4DQGwsi45BntK5pBdTw75gwq36mGU1kVqpbk2p80HEa9NXPWqUoUFaODkzl~BUQaVH6Jhe0MulEsaP80Y2BB0VGWCsWVWHB01McfkF1RYGfsIuoDxEg3-GuS6xcN6lfIbbshihcteDPdqWPnXO-WDmzowVsO8dQtPQXPLtIE-ktqpO-bgwMPBMs0G4LATFqd8ehpENMwG2r0axsjp3vpLRl1JXMMgPIIPc09JqAWhQ5tHaucAP3KLvKyzsdlJbB-xNxzayMbnaYlsrBEWv6WbcOxQ__',
			article: 'G2H1065',
			type: 'Вытяжное устройство',
			count: 1,
			about: 'Вытяжное устройство для механической системы вентиляции',
		},
		{
			id: 7,
			name: 'GHN',
			price: 12644,
			image:
				'https://s3-alpha-sig.figma.com/img/2268/b19f/a3325353a0e1c66b734515429be5faca?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KpCr-xPFcLJuHC6QyG67KjtXhdL3I6P64L81vW4CjttMGc9AERJH5tAKWIEnNJtwa9GKARA5KqDfOEZNtcoMqNoZwb4rKlG0EXo~5VUiyR9G3ogG1T11I9vFZxjVPzGb25diVX0gici4x~48Z6jlRTMkJ8oJEzVyyMQ-SwaSZ12PbkCRLzEs1-BIHaU7Cw67DOxShFck-~vT5QpCpymthVIrhbABP42Qa3RkNsJpMqPZPqA0oRRqbMt5XGjFx1PxEQqAOM0xfOilhL8UQ5BP1Vkj~Uxq1hxvtt4IOWalwU-JB46L0s8s-zoLuwX67EKAJ71eyd02kvm82AAydLWbTw__',
			article: 'G2H1065',
			type: 'Вытяжное устройство',
			count: 1,
			about: 'Вытяжное устройство с датчиком присутствия',
		},
		{
			id: 8,
			name: 'TDA',
			price: 12644,
			image:
				'https://s3-alpha-sig.figma.com/img/2c71/a2f1/2fbef512ec9d08b390ffc1a8a895c69a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WjS61hq1L-91qOVcnC8WEOvpmvYKrA4aBmPnFcWtza1X37E5IVCxmcOwLRWzUb1U6nblWNGEqL5nUjJdA3PoCVNd5cUq-BHEl7Cx2jB0mhjj1RRlBy~lukptUivPH~~r9XEIVzfZoILOquizC8evjN8zRxafv34HrvRQjAdNJtmeUk6K3WWCy4AIohTcVyXLxxMYufeQQeHPMYMkfAs3AwkpSlVG4hrPP6zb5RTzrSgItD0GOjkrzij9KARruhruFbeeJq9cSyzIPJwq-8oyQMu6HF46uiAI3qfnVU2CZaCg8H8PtKzRA2slf5X-7-FcItmdFl-l2MvMVL66adYkHQ__',
			article: 'G2H1065',
			type: 'Вытяжное устройство',
			count: 1,
			about: 'Вытяжное устройство с датчиком присутствия',
		},
		{
			id: 9,
			name: 'G2H',
			price: 12644,
			image:
				'https://s3-alpha-sig.figma.com/img/9dcd/2a6e/6e52f0e3db978e2972974a05e2cab1f7?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nilxpoYbI6upTHVr497ZyZ51jiiXsh-T1AebPhLgysMHeAYw8AzNUigAgLuzHfvCiCxtK1WSLn42UDk5T6xz7w0yanTMlcENQhXa-bayLfSCWQ~n13xWkd88Lx66LTyXioZj8zjJC0zMhY-EqeOmbKnNaRFO~Hb8PDNMVAVNT5tKHRPHb7~quiF3N4FCSPMYvclsEFBexQVP2jLY0~ugsDtSPFoj2QQMP~5oFhhQIwmfDlWHtVsLsUOEj~INA~5IONNNoFRxbka9Fl5EsFMBn7bY0gi12tLBDOzdtK6d5AzVRc4k~wArJbv2q9zhS0FuZGtWDVhYEsAB-8ZnnniIbA__',
			article: 'G2H1065',
			type: 'Вытяжное устройство',
			count: 1,
			about:
				'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
		},
		{
			id: 10,
			name: 'BXC',
			price: 12644,
			image:
				'https://s3-alpha-sig.figma.com/img/c16c/179f/01e10420cfedd1db0ccc213f53f48ab7?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SyDhVnbR~nmFvTVdOmGaYfyKjb0oM2lBM1DyidXrdlCvpMfqGQXx9yq9tDTfJ4DQGwsi45BntK5pBdTw75gwq36mGU1kVqpbk2p80HEa9NXPWqUoUFaODkzl~BUQaVH6Jhe0MulEsaP80Y2BB0VGWCsWVWHB01McfkF1RYGfsIuoDxEg3-GuS6xcN6lfIbbshihcteDPdqWPnXO-WDmzowVsO8dQtPQXPLtIE-ktqpO-bgwMPBMs0G4LATFqd8ehpENMwG2r0axsjp3vpLRl1JXMMgPIIPc09JqAWhQ5tHaucAP3KLvKyzsdlJbB-xNxzayMbnaYlsrBEWv6WbcOxQ__',
			article: 'G2H1065',
			type: 'Вытяжное устройство',
			count: 1,
			about: 'Вытяжное устройство для механической системы вентиляции',
		},
		{
			id: 11,
			name: 'GHN',
			price: 12644,
			image:
				'https://s3-alpha-sig.figma.com/img/2268/b19f/a3325353a0e1c66b734515429be5faca?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KpCr-xPFcLJuHC6QyG67KjtXhdL3I6P64L81vW4CjttMGc9AERJH5tAKWIEnNJtwa9GKARA5KqDfOEZNtcoMqNoZwb4rKlG0EXo~5VUiyR9G3ogG1T11I9vFZxjVPzGb25diVX0gici4x~48Z6jlRTMkJ8oJEzVyyMQ-SwaSZ12PbkCRLzEs1-BIHaU7Cw67DOxShFck-~vT5QpCpymthVIrhbABP42Qa3RkNsJpMqPZPqA0oRRqbMt5XGjFx1PxEQqAOM0xfOilhL8UQ5BP1Vkj~Uxq1hxvtt4IOWalwU-JB46L0s8s-zoLuwX67EKAJ71eyd02kvm82AAydLWbTw__',
			article: 'G2H1065',
			type: 'Вытяжное устройство',
			count: 1,
			about: 'Вытяжное устройство с датчиком присутствия',
		},
		{
			id: 12,
			name: 'TDA',
			price: 12644,
			image:
				'https://s3-alpha-sig.figma.com/img/2c71/a2f1/2fbef512ec9d08b390ffc1a8a895c69a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WjS61hq1L-91qOVcnC8WEOvpmvYKrA4aBmPnFcWtza1X37E5IVCxmcOwLRWzUb1U6nblWNGEqL5nUjJdA3PoCVNd5cUq-BHEl7Cx2jB0mhjj1RRlBy~lukptUivPH~~r9XEIVzfZoILOquizC8evjN8zRxafv34HrvRQjAdNJtmeUk6K3WWCy4AIohTcVyXLxxMYufeQQeHPMYMkfAs3AwkpSlVG4hrPP6zb5RTzrSgItD0GOjkrzij9KARruhruFbeeJq9cSyzIPJwq-8oyQMu6HF46uiAI3qfnVU2CZaCg8H8PtKzRA2slf5X-7-FcItmdFl-l2MvMVL66adYkHQ__',
			article: 'G2H1065',
			type: 'Вытяжное устройство',
			count: 1,
			about: 'Вытяжное устройство с датчиком присутствия',
		},
	]
	return {
		viewedList,
	}
})
