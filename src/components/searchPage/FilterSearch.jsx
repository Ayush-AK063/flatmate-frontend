import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';

const FilterSearch = ({ state, city, propertyType }) => {
  const { statesCity, loading } = useSelector((state) => state.otherData);
  const [isAdmin] = useState(false);
    const navigateTo = useNavigate();

  const [selectedState, setSelectedState] = useState(state || 'Select State');
  const [cities, setCities] = useState(city ? [city] : []);
  const [searchAttributes, setSearchAttributes] = useState({
    state: state || '',
    city: city || '',
    Hometype: propertyType || '',
    page: 1,
  });

  useEffect(() => {
    const selectedStateData = statesCity.find((s) => s.state === selectedState);
    if (selectedStateData) {
      setSearchAttributes((prev) => ({
        ...prev,
        state: selectedStateData.state,
      }));
      setCities(selectedStateData.city);
    } else {
      setCities([]);
    }
  }, [selectedState, statesCity]);

  const onChangeCity = (e) => {
    setSearchAttributes((prev) => ({
      ...prev,
      city: e.target.value,
    }));
  };
  
  const onChangeType = (e) => {
    setSearchAttributes((prev) => ({
      ...prev,
      Hometype: e.target.value,
    }));
  };

  const typeData = [
    { id: 1, name: 'Apartment' },
    { id: 2, name: 'Hostel' },
    { id: 3, name: 'Home' },
    { id: 4, name: 'Office' },
    { id: 5, name: 'Building' },
    { id: 6, name: 'PG' },
    { id: 7, name: 'Shop' },
    { id: 8, name: 'Garage' },
  ];

 

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div data-aos="fade-in" className="container-fluid bg-primary mb-5" style={{ padding: 35 }}>
            <div className="container">
              <div className="row g-2">
                <div className="col-md-10">
                  <div className="row g-2">
                    <div className="col-md-4">
                      <select
                        className="form-select border-0 py-3"
                        onChange={(e) => setSelectedState(e.target.value)}
                        value={selectedState}
                      >
                        <option>Select State</option>
                        {statesCity.map((state, index) => (
                          <option key={index} value={state.state}>
                            {state.state}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-4">
                      <select className="form-select border-0 py-3" onChange={onChangeCity} value={searchAttributes.city}>
                        <option>Select City</option>
                        {cities.map((city, index) => (
                          <option key={index} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-4">
                      <select className="form-select border-0 py-3" onChange={onChangeType} value={searchAttributes.Hometype}>
                        <option>Property Type</option>
                        {typeData.map((type, index) => (
                          <option key={index} value={type.name}>
                            {type.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <Link
                    to={`/search?city=${searchAttributes.city}&state=${searchAttributes.state}&type=${searchAttributes.Hometype}&page=${searchAttributes.page}`}
                    className="btn btn-dark border-0 w-100 py-3"
                  >
                    Search
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterSearch;
