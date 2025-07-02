"use client"

import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const GlobalFavContext = createContext()

const FavContext = ({children}) => {

    const [fav, setFav] = useState([])


    useEffect(() => {
       const favItem =  localStorage.getItem('fav')
       if (favItem) {
        setFav(JSON.parse(favItem))
       }
    },[])

    useEffect(() => {
        localStorage.setItem('fav', JSON.stringify(fav))
    },[fav])

    const addToFav = (product) => {
        setFav(prev => [...prev, product])
    }

    const removeFav = (id) => {
      setFav(prev => prev.filter((item) => item.id != id))
    }
  
  return (
    <GlobalFavContext.Provider value={{fav, addToFav, removeFav}}>
      {children}
    </GlobalFavContext.Provider>
  )
}

export default FavContext
