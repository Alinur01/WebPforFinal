const key = 'products'

export const getProduct = () => JSON.parse(localStorage.getItem(key))
export const setProduct = (data) => localStorage.setItem(key, JSON.stringify(data))
export const checkProduct = (list, currentProductId) => list.some((item) => item.id === currentProductId)

