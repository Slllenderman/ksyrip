import box from '../static/box.svg'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { authorize, setProvider, setToken } from '../redux/userSlice'
import { initOrders, setLocation, setDate } from '../redux/shCartSlice'

function Navigation(){
    const authorized = useSelector((state) => state.user.isAuthorized )
    const [cookie, setCookie, removeCookie] = useCookies(["auth", "orders"])
    const dispatch = useDispatch()
    
    useEffect(()=> {
        if(cookie.token)
            axios.get('/isAuth/', {"headers" : { "Authorization" : "token " + cookie.token}})
            .then(response => {
                dispatch( authorize() )
                if(cookie.orders) dispatch( initOrders(cookie.orders) )
                if(cookie.shCartDate) dispatch( setDate(cookie.shCartDate) )
                if(cookie.shCartLocation) dispatch( setLocation(cookie.shCartLocation) )
                axios.get(`/providers?username=${cookie.auth.login}`,{"headers" : { "Authorization" : "token " + cookie.token}})
                .then(response => {
                    if(response.data.length != 0)
                        dispatch(setProvider({
                            pk : response.data[0].pk,
                            name : response.data[0].name
                        }
                    ))
                }).catch(err => console.log(err)) 
            })
            .catch(err => {
                removeCookie("token", {path:"/"})
                removeCookie("auth", {path:"/"})
                if(cookie.orders) removeCookie("orders", {path:"/"})
                if(cookie.shCartDate) removeCookie("shCartDate", {path:"/"})
                if(cookie.shCartLocation) removeCookie("shCartLocation", {path:"/"})
            })
    },[])

    return (
    
    <div className="header-navigation-container">
        <div className="header-navigation">
            <Link className="header-navigation-leftpart-link" to="/">Товары</Link>
            { !authorized ?
                <Link to="/registration" className="header-navigation-leftpart-link">Регистрация</Link>
            :
                <Link to="/shoppingCart" className="header-navigation-leftpart-link">Корзина</Link>
            }
            { !authorized ?
                <Link to="/authorization" className="header-navigation-leftpart-link">Войти</Link>
            :
                <Link to="/profile" className="header-navigation-leftpart-link">Аккаунт</Link>
            }
        </div>
    </div>
)}



export default Navigation