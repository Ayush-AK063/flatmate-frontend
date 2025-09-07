import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { clearErrorSearch, searchProperty } from '../../store/action/propertyAction';
import PropertyCard from '../home/Properties/PropertyCard';
import { enqueueSnackbar } from 'notistack';
import FilterSearch from './FilterSearch';

const SearchPage = ({isAdmin}) => {
    //write code for fetch queries from url

    const { search } = useLocation()
    const getURL = new URLSearchParams(search)
    const city = getURL.get("city");
    const type = getURL.get("type");
    const state = getURL.get("state");
    const area = getURL.get("area");
    let pages = parseInt(getURL.get("page"));

    const navigateTo = useNavigate();
    const dispatch = useDispatch();
    const {error , message , properties} = useSelector((state)=> state.property)

    const [searchData, setsearchData] = useState({
        city,
        type,
        page:pages,
        state,
        area
    })

    useEffect(() => {
        if (error) {
          enqueueSnackbar(error, { variant: "error" });
            navigateTo('/');
            dispatch(clearErrorSearch());
        };
    }, [error])

    useEffect(() => {
        dispatch(searchProperty(searchData));
        navigateTo(`${isAdmin ? "/admin": ""}/search?city=${searchData.city}&type=${searchData.type}&state=${searchData.state}&page=${searchData.page}&area=${searchData.area}`)
    }, [pages, city, type, state,area])
    

    const handleClick = () => {
        pages = pages+1;
        setsearchData({
            ...searchData,
            page:pages
        })
    }

    
    

  return (
    <div className='container'>
    <div className="tab-content">

        <div id="tab-1" className="tab-pane fade show p-0 active">
          <div className="row g-4">
            {properties && properties.map((property, index) => (
                <PropertyCard isAdmin={isAdmin} id={property._id} key={index} imgUrl={property.Details.Image} forType={property.Details.genderType} type={property.PropertyType} price={property.Details.Price} name={property.Details.Name} address={`${property.Details.Address.Street} , ${property.Details.Address.Area} , ${property.Details.Address.City}, ${property.Details.Address.State}`} area={property.Details.Area} room={property.Details.Rooms} bath={property.Details.Bathrooms} animationDelay={100}/>
            ))}
          </div>
        </div>
      </div>
        {/* <button  onClick={handleClick}>Next Page</button> */}
    </div>
  )
}

export default SearchPage