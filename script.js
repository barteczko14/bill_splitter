const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const countBtn = document.querySelector('.count')
const error = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const calculateBill = () => {
	costInfo.style.display = 'block'
	error.textContent = ''
	const finalCost = (parseFloat(price.value) + parseFloat(price.value) * parseFloat(tip.value)) / parseInt(people.value)
	cost.textContent = finalCost.toFixed(2)
}

const checkValue = () => {
	if (price.value != 0 && people.value != 0 && tip.value != 0) {
		calculateBill()
	} else {
		costInfo.style.display = 'none'
		error.textContent = 'You must complete all the fields!'
	}
}

countBtn.addEventListener('click', checkValue)
