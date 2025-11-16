

export const SaveCart = (cartItems) =>{
    localStorage.setItem('CartItems', JSON.stringify(cartItems))
}

export const LoadCart = () => {
    const items =  localStorage.getItem('CartItems') 
    return items ? JSON.parse(items) : []
}

