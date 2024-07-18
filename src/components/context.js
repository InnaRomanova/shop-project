import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { type } from "@testing-library/user-event/dist/type";


export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: '',
}

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState)

    // const value = {
    //     example: "hello from context",
    // }

    value.closeAlert = () => {
        dispatch({ type: 'CLOSE_ALERT' })
    }

    //добавление товара в корзину
    value.addToBasket = (item) => {
        dispatch({ type: 'ADD_TO_BASKET', payload: item })
    }

    //увеличение количества товара в корзине
    value.incQuantity = (itemId) => {
        dispatch({ type: 'INCREMENT_QUANTITY', payload: { id: itemId } })
    }

    //уменьшение количества товара в корзине
    value.decQuantity = (itemId) => {
        dispatch({ type: 'DECREMENT_QUANTITY', payload: { id: itemId } })
    }

    value.removeFromBasket = (itemId) => {
        dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id: itemId } })
    }

    //вкл или выкл
    value.handleBasketShow = () => {
        dispatch({ type: 'TOGGLE_BASKET' })
    }

    value.setGoods = (data) => {
        dispatch({ type: 'SET_GOODS', payload: data })
    }

    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}