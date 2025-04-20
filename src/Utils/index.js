

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