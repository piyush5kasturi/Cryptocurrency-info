import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import BTC from '../assets/btc-img.png'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import Coin from '../routes/Coin'
// import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom'
import './Featured.css'
import SearchBar from './SearchBar'
// import DropDown from './DropDown'

const Featured = () => {

    const [data, setData] = useState([]);
    const [fullUrl, setfullUrl] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [moreData, setMoreData] = useState(12);
    const [Loading, setLoading] = useState(false);

    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=${moreData}&page=1&sparkline=false`
    // const fullUrls = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=1000&page=1&sparkline=false`

    // const requestOne = axios.get(url);
    // const requestTwo = axios.get(url);
    useEffect(() => {
        axios.get(url).then(response => {
            // const responseOne = response[0];
            // const responseTwo = response[1];
            setData(response.data)
            // setfullUrl(responseTwo.data)
            setLoading(false);
        }).catch((error) => {
            console.log(error)
        })
    }, [url])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = data.filter((item) => {
                return Object.values(item.name).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData);
        }
        else {
            setFilteredResults(data)
            document.getElementsByClassName('right').innerHTML = 'No Data Found...'
        }
    }

    const moreCoin = () => {
        setLoading(true);
        setMoreData(moreData + 6);
    }

    // console.log(data)

    if (!data) return []

    return (
        <div className='featured' id='featured'>
            <div className='container'>
                {/* Left */}
                <div className='left'>
                    <h2 style={{ textAlign: "center" }}>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin    <SearchBar searchItems={searchItems} /></h2>
                    {/* <DropDown /> */}
                    {/* <p>See all available assets: Cryptocurrencies and NFT's</p> */}

                    {/* <NavLink to={'/morecoin'}> <button className='btn'>See More Coins</button> </NavLink> */}

                </div>

                {/* Right */}

                <div className='right'>
                    {searchInput.length > 1 ? (
                        filteredResults.map((datas) => {
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
                        })
                    ) : (data.map(datas => {
                        return (
                            <Link to={`/coin/${datas.id}`} element={<Coin />} key={datas.id}>
                                <div className='card'>
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
                                </div>
                            </Link>
                        )

                    })
                    )}

                </div>
            </div>

            <div className='buttonDiv'>
                <button className='btn' onClick={moreCoin}>{Loading ? 'Loading...' : 'See More Coins'}</button>
            </div>

        </div>
    )
}

export default Featured