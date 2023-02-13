import { ProductsCardsList, UsersCardsList, ShCartCardsList, ProviderOrdersList } from './listblocks'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import qs from 'qs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export function ProductsList({titleVisability, providerView}){
    const [params, setParams] = useSearchParams()
    const [maxPriceField, setMaxPriceField] = useState()
    const [minPriceField, setMinPriceField] = useState()
    const [nameField, setNameField] = useState()
    const [properties, setProperties] = useState({ 
        category : params.get("category"), 
        provider: params.get("provider") 
    })

    const searchClick = () => {
        setProperties({
            category : params.get("category"),
            name : nameField,
            price_min : minPriceField,
            price_max : maxPriceField,
            provider :params.get("provider"),
        })
    }


    return (
        <>
        <div className="list">
            <div className="list-filter">  
                <div>
                    <div className="list-filter-title">Поиск по названию</div>
                    <input type="text" className="list-filter-textblock-find" 
                    onChange={ (event) => setNameField(event.target.value)}/>
                </div>
                <div>
                    <div className="list-filter-price">
                        <span className="list-filter-price-title">От</span>
                        <input type="text" className="list-filter-textblock-price"
                        onChange={ (event) => setMinPriceField(event.target.value) }/>
                    </div>
                    <div className="list-filter-price">
                        <span className="list-filter-price-title">До</span>
                        <input type="text" className="list-filter-textblock-price"
                        onChange={ (event) => setMaxPriceField(event.target.value)}/>
                    </div>
                </div>
                <div className="list-filter-search-container">
                    <button className="list-filter-search" onClick={ () => searchClick() }>Поиск</button>
                </div>
            </div>
            <ProductsCardsList filterProperties={qs.stringify(properties)} providerView={providerView}/>
        </div>
        </>
)}

export function ShoppingCartsList({ titleVisability }){
    const [params, setParams] = useSearchParams()
    const [cookie, setCookie] = useCookies(["auth"])
    const [dateField, setDateField] = useState() 
    const [locationField, setLocationField] = useState()
    const [idField, setIdField] = useState()
    const [properties, setProperties] = useState({ username : cookie.auth?.login })

    const searchClick = () => {
        if(cookie.auth)
            setProperties({
                id : idField,
                date : dateField,
                location : locationField,
                username : cookie.auth.login
            })
    }

    return (
        <div className="list">
            { titleVisability ? <div className="list-title">Список товаров заказов</div> : null}
            <div className="list-filter">
                <div>
                    <div className="list-filter-title">Поиск по номеру</div>
                    <input type="text" className="list-filter-textblock-find" 
                    onChange={ (event) => setIdField(event.target.value) }/>
                </div>
                <div>
                    <div className="list-filter-price">
                        <span className="list-filter-price-title">Дата</span>
                        <input type="text" className="list-filter-textblock-price"
                        onChange={ (event) => setDateField(event.target.value) }/>
                    </div>
                    <div className="list-filter-price">
                        <span className="list-filter-price-title">Место</span>
                        <input type="text" className="list-filter-textblock-price"
                        onChange={ (event) => setLocationField(event.target.value) }/>
                    </div>
                </div>
                <div className="list-filter-search-container">
                    <button className="list-filter-search" onClick={ () => searchClick() }>Поиск</button>
                </div>
            </div>
            <ShCartCardsList filterProperties={qs.stringify(properties)}/>
        </div>
)}

export function ProviderOffersList(){
    const auth = useSelector((state) => state.user.isAuthorized)
    const navigate = useNavigate()
    const [params, setParams] = useSearchParams()
    useEffect(() => {if(!auth) navigate("/") }, [])

    const [dateField, setDateField] = useState() 
    const [locationField, setLocationField] = useState()
    const [idField, setIdField] = useState()
    const [status, setStatus] = useState()
    const [properties, setProperties] = useState({ provider : params.get('provider')})

    const searchClick = () => {
            setProperties({
                id : idField,
                date : dateField,
                location : locationField,
                state : status,
                provider : params.get('provider')
            })
    }

    const TransformStatus = (value) => {
        const status = value.toLowerCase()
        if(status == '') return undefined
        else if("обработка".startsWith(status)) return "P"
        else if("принято".startsWith(status)) return "A"
        else if("отклонено".startsWith(status)) return "R"
        else return 'N'
    }

    return(
        <div>
            <div className="list">
                <div className="list-title">Список заказов</div>
                <div className="list-filter">
                    <div>
                        <div className="list-filter-title">Поиск по номеру</div>
                        <input type="text" className="list-filter-textblock-find" 
                        onChange={ (event) => setIdField(event.target.value) }/>
                    </div>
                    <div>
                        <div className="list-filter-price">
                            <span className="list-filter-price-title">Дата</span>
                            <input type="text" className="list-filter-textblock-price"
                            onChange={ (event) => setDateField(event.target.value) }/>
                        </div>
                        <div className="list-filter-price">
                            <span className="list-filter-price-title">Место</span>
                            <input type="text" className="list-filter-textblock-price"
                            onChange={ (event) => setLocationField(event.target.value) }/>
                        </div>
                        <div className="list-filter-price">
                            <span className="list-filter-price-title">Статус</span>
                            <input type="text" className="list-filter-textblock-price"
                            onChange={ (event) => setStatus( TransformStatus(event.target.value) ) }/>
                        </div>
                    </div>
                    <div className="list-filter-search-container">
                        <button className="list-filter-search" onClick={ () => searchClick() }>Поиск</button>
                    </div>
                </div>
            </div>
            <ProviderOrdersList filterProperties={qs.stringify(properties)}/> 
        </div>
)}
