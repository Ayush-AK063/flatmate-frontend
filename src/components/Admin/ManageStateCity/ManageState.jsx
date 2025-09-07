import axios from "axios";
import { enqueueSnackbar } from "notistack";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { server } from "../../../store/store";
import { getAllStateCity } from "../../../store/action/otherAction";

const ManageState = () => {
  const { statesCity } = useSelector((state) => state.otherData);
  const [selectedState, setSelectedState] = useState("Select State");
  const [selectedCity, setSelectedCity] = useState("Select City");
  const [cities, setCities] = useState([]);
  const [area, setArea] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const selectedStateData = statesCity.find(
      (state) => state.state === selectedState
    );
    if (selectedStateData) {
      setCities(selectedStateData.city);
    } else {
      setCities([]);
    }
  }, [selectedState]);

  const onChangeCity = (e) => {
    setSelectedCity(e.target.value);
    const selectedCityData = cities.find((city) => city.name === e.target.value);
    if (selectedCityData) {
      setArea(selectedCityData.areas);
    } else {
      setArea([]);
    }
  }


  const modalRef = useRef(null);
  const cityRef = useRef(null);


  const openModal = () => {
      const modal = new bootstrap.Modal(modalRef.current);
      modal.show();
  };

  const closeModal = () => {
      const modal = new bootstrap.Modal(modalRef.current);
      modal.hide();
  };
  const openModalCity = () => {
      const modal = new bootstrap.Modal(cityRef.current);
      modal.show();
  };

  const closeModalCity = () => {
      const modal = new bootstrap.Modal(cityRef.current);
      modal.hide();
  };

  const [stateCity, setstateCity] = useState({state: "", city: "" , area: ""})

  const handleChange = (e) => {
    setstateCity({...stateCity, [e.target.name]: e.target.value})
    }

    const createStateHandle = async() => {
        try {
            // const postData = {
            //     "state":stateCity.state,
            //     "city":[
            //         stateCity.city
            //     ]
            // }
            const {data} = await axios.post(`${server}/api/createStateCity`, stateCity);
            enqueueSnackbar(data.message, { variant: "success" });
            dispatch(getAllStateCity())
        } catch (error) {
            enqueueSnackbar(error.response.data.message, { variant: "error" });
        }
    }
    const createCityHandle = async() => {
        try {
            const postData = {
                "state":selectedState,
                "city":stateCity.city,
                "area":stateCity.area
            }
            const {data} = await axios.put(`${server}/api/addCity`, postData);
            enqueueSnackbar(data.message, { variant: "success" });
            dispatch(getAllStateCity())
        } catch (error) {
            enqueueSnackbar(error.response.data.message, { variant: "error" });
        }
    }

    const createAreaHandle = async() => {
      try {
          const postData = {
              "state":selectedState,
              "city":selectedCity,
              "area":stateCity.area
          }
          const {data} = await axios.put(`${server}/api/addArea`, postData);
          enqueueSnackbar(data.message, { variant: "success" });
          dispatch(getAllStateCity())
      } catch (error) {
          enqueueSnackbar(error.response.data.message, { variant: "error" });
      }
  }



  return (
    <div>
      <h1>Manage State & City</h1>
      <div className="row g-2">
        <div className="col-md-4">
          <select
            className="form-select border-0 py-3"
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option selected>Select State</option>
            {statesCity.map((state, index) => (
              <option key={index} value={state.state}>
                {state.state}
              </option>
            ))}
          </select>
          <button className="btn btn-primary mx-1" onClick={(openModal)}>Create State</button>

          {/* Modal */}
          <div className="modal fade" ref={modalRef} tabIndex="-1" aria-labelledby="orderModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="orderModalLabel">State, City and Area Create</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                        </div>
                        <div className="modal-body">

                          <div class="mb-3">
                            <label for="state" class="form-label">State</label>
                            <input type="text" class="form-control" id="state" onChange={handleChange} name="state" required="" value={stateCity.state}/>
                           </div>
                          <div class="mb-3">
                            <label for="city" class="form-label">City</label>
                            <input type="text" class="form-control" id="city" name="city" onChange={handleChange} required="" value={stateCity.city}/>
                           </div>
                          <div class="mb-3">
                            <label for="city" class="form-label">Area</label>
                            <input type="text" class="form-control" id="area" name="area" onChange={handleChange} required="" value={stateCity.area}/>
                           </div>
                           
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={createStateHandle}>Create State</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-md-4">
          <select className="form-select border-0 py-3" onChange={onChangeCity}>
            <option selected>Select City</option>
            {cities.map((city, index) => (
              <option key={index} value={city.name} >
                {city.name}
              </option>
            ))}
          </select>
            <button className="btn btn-primary mx-1" onClick={(openModalCity)}>Create City</button>
          {/* Modal */}
          <div className="modal fade" ref={cityRef} tabIndex="-1" aria-labelledby="orderModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="orderModalLabel">Order Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModalCity}></button>
                        </div>
                        <div className="modal-body">

                          <div class="mb-3">
                            <label for="state" class="form-label">State:{selectedState}</label>
                           </div>
                          <div class="mb-3">
                            <label for="city" class="form-label">City</label>
                            <input type="text" class="form-control" id="city" name="city" onChange={handleChange} required="" value={stateCity.city}/>
                           </div>
                          <div class="mb-3">
                            <label for="area" class="form-label">Area</label>
                            <input type="text" class="form-control" id="area" name="area" onChange={handleChange} required="" value={stateCity.area}/>
                           </div>
                           
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModalCity}>Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={createCityHandle}>Create State</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-md-4">
          <select className="form-select border-0 py-3">
            <option selected>Select Area</option>
            {area.map((area, index) => (
              <option key={index} value={area}>
                {area}
              </option>
            ))}
          </select>
          <button className="btn btn-primary mx-1" onClick={(openModalCity)}>Create Area</button>
          {/* Modal */}
          <div className="modal fade" ref={cityRef} tabIndex="-1" aria-labelledby="orderModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="orderModalLabel">Create Area</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModalCity}></button>
                        </div>
                        <div className="modal-body">

                          <div class="mb-3">
                            <label for="state" class="form-label">State:{selectedState}</label>
                           </div>
                          <div class="mb-3">
                          <label for="state" class="form-label">City: {selectedCity}</label>
                           </div>
                          <div class="mb-3">
                            <label for="area" class="form-label">Area</label>
                            <input type="text" class="form-control" id="area" name="area" onChange={handleChange} required="" value={stateCity.area}/>
                           </div>
                           
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModalCity}>Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={createAreaHandle}>Create Area</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default ManageState;
