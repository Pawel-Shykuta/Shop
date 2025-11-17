

export const SaveCart = (cartItems) =>{
    localStorage.setItem('CartItems', JSON.stringify(cartItems))
}

export const LoadCart = () => {
    const items =  localStorage.getItem('CartItems') 
    return items ? JSON.parse(items) : []
}

export const SaveLicked = (cartLiked) =>{
    localStorage.setItem('cartLiked', JSON.stringify(cartLiked))
}

export const LoadLiced = () =>{
    const item = localStorage.getItem('cartLiked')
    return item ? JSON.parse(item) : []
}
