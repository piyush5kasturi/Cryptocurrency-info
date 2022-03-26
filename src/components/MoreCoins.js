import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import BTC from '../assets/btc-img.png'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'

import './MoreCoins.css'

const Featured = () => {

    const [data, setData] = useState([])

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=806&page=1&sparkline=false'

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    // console.log(data)

    if (!data) return []

    return (
        <div className='featureds'>
            <h1>More Coins</h1>
            {/* Left */}

            {/* Right */}

            <div className='right'>
                {data.map(datas => {
                    return (<div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/' /> */}
                            <img src={datas.image} alt='' />
                        </div>
                        <div>
                            <h5>{datas.name}</h5>
                            <p>₹{datas.current_price.toLocaleString()}</p>
                        </div>

                        {datas.price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {datas.price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUpRight className='icon' />
                                {datas.price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>)

                })}
            </div>


        </div>
    )
}

export default Featured