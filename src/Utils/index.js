

export const getFavorites =()=>{
    const favorites = localStorage.getItem('favorites')
    if(favorites) return JSON.parse(favorites)
        return []
}



export const addFavorite = phone=>{

     

    
    const favorites= getFavorites()

    const isExist = favorites.find(p=>p.id===phone.id)
    if(isExist) return console.log('adede')
    favorites.push(phone)
    // console.log(favorites)
    localStorage.setItem('favorites', JSON.stringify(favorites))
}

export const removeFavorite = (id)=>{
   const favorites = getFavorites(id)
   const remainingFavorites = favorites.filter(phone=> phone.id !==id)
   localStorage.setItem('favorites', JSON.stringify(remainingFavorites))
}


///next card



export const getCart =()=>{
    const cart = localStorage.getItem('cart')
    if(cart) return JSON.parse(cart)
        return []
}



export const addToCart = phone=>{

     

    
    const cart= getCart()

    const isExist = cart.find(p=>p.id===phone.id)
    if(isExist) return console.log('adede')
    cart.push(phone)
    // console.log(favorites)
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeCart = (id)=>{
   const cart = getCart(id)
   const remainingCart = cart.filter(phone=> phone.id !==id)
   localStorage.setItem('cart', JSON.stringify(remainingCart))
}


