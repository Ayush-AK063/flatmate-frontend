import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';

const Search = ({isAdmin}) => {


  const { statesCity , loading} = useSelector((state) => state.otherData);


  const [selectedState, setSelectedState] = useState('Select State');
  const [cities, setCities] = useState([]);
  const [area, setArea] = useState([]);

  const [searchAttributes, setsearchAttributes] = useState({
    state: '',
    city: '',
    Hometype: '',
    area: '',
    page: 1
  })
  

  useEffect(() => {
    const selectedStateData = statesCity.find(state => state.state === selectedState);
    if (selectedStateData) {
      setsearchAttributes({
        ...searchAttributes,
        state: selectedStateData.state
      });
      setCities(selectedStateData.city);
    } else {
      setCities([]);
    }
  }, [selectedState]);

  const onChangeCity = (e) => {
    const selectedCityData = cities.find((city) => city.name === e.target.value);
    if (selectedCityData) {
      setArea(selectedCityData.areas);
    } else {
      setArea([]);
    }
    setsearchAttributes({
      ...searchAttributes,
      city: e.target.value
    });
  }

  const onChangeArea = (e) => {
    setsearchAttributes({
      ...searchAttributes,
      area: e.target.value
    });
  }

  const onChangeType = (e) => {
    setsearchAttributes({
      ...searchAttributes,
      Hometype: e.target.value
    });
  }



  const typeData = [
    {
      id: 1,
      name: 'Apartment'
    },
    {
      id: 2,
      name: 'Hostel'
    },
    {
      id: 3,
      name: 'Home'
    },
    {
      id: 4,
      name: 'Office'
    },
    {
      id: 5,
      name: 'Building'
    },
    {
      id: 6,
      name: 'PG'
    },
    {
      id: 7,
      name: 'Shop'
    },
    {
      id: 8,
      name: 'Garage'
    }
  ]
  return (
    <>
    {loading ? <Loader/> : 
    <div>
    <div data-aos="fade-in" className="container-fluid bg-primary mb-5" style={{padding: 35}}>
      <div className="container">
        <div className="row g-2">
          <div className="col-md-10">
            <div className="row g-2">
              <div className="col-md-3">
                <select className="form-select border-0 py-3" onChange={(e) => setSelectedState(e.target.value)}>
                  <option selected>Select State</option>
                  {statesCity.map((state, index) => (
                    <option  key={index} value={state.state}>{state.state}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-3">
                <select className="form-select border-0 py-3" onChange={onChangeCity}>
                  <option selected>Select City</option>
                  {cities.map((city, index) => (
                    <option  key={index} value={city.name}>{city.name}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-3">
                <select className="form-select border-0 py-3" onChange={onChangeArea}>
                  <option selected>Select Area</option>
                  {area.map((area, index) => (
                    <option  key={index} value={area}>{area}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-3">
                <select className="form-select border-0 py-3" onChange={onChangeType}>
                  <option selected>Property Type</option>
                  {typeData.map((type, index) => (
                    <option  key={index} value={type.name}>{type.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <Link to={`${isAdmin ? "/admin" : ""}/search?city=${searchAttributes.city}&state=${searchAttributes.state}&type=${searchAttributes.Hometype}&page=${searchAttributes.page}&area=${searchAttributes.area}`} className="btn btn-dark border-0 w-100 py-3">Search</Link>
          </div>
        </div>
      </div>
    </div>
  </div>}
    </>
  )
}

export default Search;
