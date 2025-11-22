import { useEffect } from "react"
import { useGlobal } from "./GlobalContext"

import emitter from '../utils//eventBus'

const Emitter = () =>{

    const {setCartItems} = useGlobal()


    useEffect(() =>{
        const plus = (id) =>{
            setCartItems(prev => 
                prev.map(el => el.id === id ? {...el, quantity: el.quantity + 1} : el)
            )
        }

        const minus = (id) =>{
            setCartItems(prev => 
                prev.map(el => el.id === id ? {...el, quantity: el.quantity - 1}: el).filter(el => el.quantity > 0)
            )
        }

        emitter.on('cart:plus', plus)
        emitter.on('cart:minus', minus)

        return() =>{
            emitter.off('cart:plus', plus)
            emitter.off('cart:minus', minus)
        }
        
    },[])

}

export default Emitter