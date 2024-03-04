const KEY = "rememberMe"

export const getLocalStorage =() => {
    const value = window.localStorage.getItem(KEY)
    if (value===null) { 
        return false
    }
    return JSON.parse(value)
}

export const setLocalStorage = ({token, rememberMe, id}) => {
    window.localStorage.setItem(KEY, JSON.stringify({token, rememberMe, id}))
}

export const resetLocalStorage = ( ) => {
    window.localStorage.removeItem(KEY)
}