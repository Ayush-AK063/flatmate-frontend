import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { enqueueSnackbar } from 'notistack';
import { clearErrorSingleProperty, getSingleProperty } from '../../../store/action/propertyAction';
import { updateProperty } from '../../../store/action/createPropertyAction';
import axios from 'axios';
import { server } from '../../../store/store';
import toast from 'react-hot-toast';

const EditPage = () => {
    const { property, error , loading} = useSelector(state => state.singleProperty);
    const navigate = useNavigate();
    const { role, isAuthenticated } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const { search } = useLocation();
    const getURL = new URLSearchParams(search);
    const id = getURL.get("id");

    const [imageArray, setImageArray] = useState([]);
    const [imagePrev, setImagePrev] = useState('');
    const [image, setImage] = useState('');
    const [area, setArea] = useState(0);
    const [room, setRoom] = useState(0);
    const [bathroom, setBathroom] = useState(0);
    const [seater, setSeater] = useState(0);
    const [price, setPrice] = useState(0);
    const [name, setName] = useState('');
    const [street, setStreet] = useState('');
    const [zipcode, setZipcode] = useState('0');
    const [gender, setGender] = useState('');
    const [featured, setFeatured] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [cities, setCities] = useState([]);
    const [areaAdress, setAreaAddress] = useState([]);
    const [SelectedareaAdress, setSelectedAreaAddress] = useState('');
    const [searchAttributes, setSearchAttributes] = useState({
        state: '',
        city: '',
        Hometype: '',
        area:''
    });

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
        if (role !== "admin") {
            navigate("/dashboard");
        }
    }, [role, isAuthenticated]);

    useEffect(() => {
        dispatch(getSingleProperty(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, { variant: "error" });
            dispatch(clearErrorSingleProperty());
        }
    }, [error]);

    const { statesCity } = useSelector((state) => state.otherData);

    useEffect(() => {
        const selectedStateData = statesCity.find(state => state.state === selectedState);
        if (selectedStateData) {
            setSearchAttributes({
                ...searchAttributes,
                state: selectedStateData.state
            });
            setCities(selectedStateData.city);
            const selectedCityData = cities.find((city) => city.name === searchAttributes.city);
            if (selectedCityData) {
                setAreaAddress(selectedCityData.areas);
            } else {
                setAreaAddress([]);
            }
        } else {
            setCities([]);
        }
    }, [selectedState , statesCity , searchAttributes.city]);

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
    ];

    const onChangeCity = (e) => {
        setSearchAttributes({
            ...searchAttributes,
            city: e.target.value
        });
        const selectedCityData = cities.find((city) => city.name === e.target.value);
        if (selectedCityData) {
            setAreaAddress(selectedCityData.areas);
        } else {
            setAreaAddress([]);
        }
    };



    const onChangeArea = (e) => {
        setSearchAttributes({
            ...searchAttributes,
            area: e.target.value
        });
    };


    const onChangeType = (e) => {
        setSearchAttributes({
            ...searchAttributes,
            Hometype: e.target.value
        });
    };

    

    const changeImageHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setImage(file);
        };
      };

      const deleteImageHandler = (public_id) => async () => {
        let toastId = false;
        try {
          toastId = toast.loading("Loading...");
          const mediaDelete = await axios.post(`${server}/api/deleteMedia`, {
            public_id,
          });
          toast.dismiss(toastId);
          toast.success(mediaDelete.data.message);
          setImageArray(imageArray.filter((image) => image.public_id !== public_id));
        } catch (error) {
          toast.error;
          toast.dismiss(toastId);
        }
      };

      const uploadMediaHandler = async () => {
        if (!image) {
          return toast.error("Please select an image");
        }
        const myForm = new FormData();
        myForm.append("file", image);
        let toastId = false;
        try {
          toastId = toast.loading("Loading...");
          const mediaUpload = await axios.post(`${server}/api/uploadMedia`, myForm);
          toast.dismiss(toastId);
          toast.success(mediaUpload.data.message);
          setImageArray([...imageArray, mediaUpload.data.data]);
        } catch (error) {
          toast.error;
          toast.dismiss(toastId);
        }
      };

    const deleteHandle = async () => {
        const userConfirmed = window.confirm('Are you sure you want to delete this property?');

        if (!userConfirmed) {
            return; // Exit the function if the user cancels the deletion
        }
    
        try {
            const { data } = await axios.delete(`${server}/api/deleteProperty/${id}`);
            enqueueSnackbar(data.message || "Property deleted successfully", { variant: "success" });
            
        } catch (error) {
            enqueueSnackbar(error.response.data.message || "Error deleting property", { variant: "error" });
        }
    
        navigate('/admin/dashboard');
    };

    const submitHandler = e => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('Name', name);
        myForm.append("Image", JSON.stringify(imageArray));
        myForm.append('PropertyType', searchAttributes.Hometype);
        myForm.append('Price', price);
        myForm.append('Street', street);
        myForm.append('City', searchAttributes.city);
        myForm.append('State', searchAttributes.state);
        myForm.append('AreaAddress', searchAttributes.area);
        myForm.append('Zip', zipcode);
        myForm.append('Country', "India");
        myForm.append('Area', `${area} sq ft`);
        myForm.append('Rooms', room);
        myForm.append('Bathrooms', bathroom);
        myForm.append('genderType', gender);
        myForm.append('SeaterType', seater);
        myForm.append('featured' , featured);

        dispatch(updateProperty(myForm , id));
        enqueueSnackbar("Data Updated", { variant: "success" });
        
    };

    useEffect(() => {
        if (property) {
            setName(property.Details?.Name || ''); // Added null check
            setPrice(property.Details?.Price || 0); // Added null check
            setStreet(property.Details?.Address?.Street || ''); // Added null check
            setSelectedAreaAddress(property.Details?.Address?.Area || ''); // Added null check
            setZipcode(property.Details?.Address?.Zip?.toString() || '0'); // Added null check
            setArea(parseInt(property.Details?.Area) || 0); // Added null check
            setRoom(property.Details?.Rooms || 0); // Added null check
            setBathroom(property.Details?.Bathrooms || 0); // Added null check
            setGender(property.Details?.genderType || ''); // Added null check
            setSeater(property.Details?.SeaterType || 0); // Added null check
            setSelectedState(property.Details?.Address?.State || ''); // Added null check
            setFeatured(property.Details?.Featured || 'false'); // Added null check and default value
            setImageArray(property.Details?.Image || []);
            setSearchAttributes({
                ...searchAttributes,
                state: property.Details?.Address?.State || '',
                city: property.Details?.Address?.City || '',
                area: property.Details?.Address?.Area || '',
                Hometype: property.PropertyType || ''
            });
            const selectedStateData = statesCity.find(state => state.state === property.Details?.Address?.State);
            if (selectedStateData) {
                setCities(selectedStateData.city || []); // Added default value
            }
        }
    }, [property, statesCity]);
    console.log(property);

    return (
      <div>
        {loading ? ( <h1>Loading...</h1> ) : (
            <div className="container mt-5">
            <h2>Edit Property</h2>
            <form onSubmit={submitHandler}>
                {/* Property Name */}
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
  
  
        <div className="mn-2">
          {imageArray &&
            imageArray.map((image, index) => (
              <div className="d-flex flex-row mb-3">
                <img
                  src={image && image.url ? image.url : "https://via.placeholder.com/120"}
                  alt="image"
                  width="120px"
                  height="120px"
                  className="img-fluid"
                  onClick={deleteImageHandler(image.public_id)}
                />
              </div>
            ))}
        </div>
                {/* Property Image */}
                <div class="mb-3">
          <label class="form-label">Select Image</label>
          <input
            type="file"
            class="form-control"
            onChange={changeImageHandler}
          />
          <button onClick={uploadMediaHandler} className="btn m-1 btn-primary">
            Upload Image
          </button>
        </div>
  
                {/* Property Type */}
                <div className="mb-3">
                    <label className="form-label">Type:</label>
                    <select className="form-select" onChange={onChangeType}>
                        {typeData.map((type) => (
                            <option key={type.id} value={type.name}>
                                {type.name}
                            </option>
                        ))}
                    </select>
                </div>
  
                {/* Price */}
                <div className="mb-3">
                    <label className="form-label">Price:</label>
                    <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
  
                {/* Street */}
                <div className="mb-3">
                    <label className="form-label">Street:</label>
                    <input type="text" className="form-control" value={street} onChange={(e) => setStreet(e.target.value)} />
                </div>
  
                {/* City */}
                <div className="mb-3">
                    <label className="form-label">City:</label>
                    <select className="form-select" value={searchAttributes.city} onChange={onChangeCity}>
                        {cities.map((city, index) => (
                            <option key={index} value={city.name}>
                                {city.name}
                            </option>
                        ))}
                    </select>
                </div>
  
                {/* State */}
                <div className="mb-3">
                    <label className="form-label">State:</label>
                    <select className="form-select" value={selectedState}  onChange={(e) => setSelectedState(e.target.value)}>
                        {statesCity.map((state, index) => (
                            <option key={index} value={state.state}>
                                {state.state}
                            </option>
                        ))}
                    </select>
                </div>
                {/* Area */}
                <div className="mb-3">
                    <label className="form-label">Area:</label>
                    <select className="form-select" value={searchAttributes.area}  onChange={onChangeArea}>
                        {areaAdress.map((area, index) => (
                            <option key={index} value={area}>
                                {area}
                            </option>
                        ))}
                    </select>
                </div>
  
                {/* Zipcode */}
                <div className="mb-3">
                    <label className="form-label">Zipcode:</label>
                    <input type="text" className="form-control" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
                </div>
  
                {/* Area */}
                <div className="mb-3">
                    <label className="form-label">Area (sq ft):</label>
                    <input type="number" className="form-control" value={area} onChange={(e) => setArea(e.target.value)} />
                </div>
  
                {/* Rooms */}
                <div className="mb-3">
                    <label className="form-label">Rooms:</label>
                    <input type="number" className="form-control" value={room} onChange={(e) => setRoom(e.target.value)} />
                </div>
  
                {/* Bathrooms */}
                <div className="mb-3">
                    <label className="form-label">Bathrooms:</label>
                    <input type="number" className="form-control" value={bathroom} onChange={(e) => setBathroom(e.target.value)} />
                </div>
  
                {/* Gender */}
                <div className="mb-3">
                    <label className="form-label">Gender:</label>
                    <input type="text" className="form-control" value={gender} onChange={(e) => setGender(e.target.value)} />
                </div>
  
                {/* featured */}
                  <div className="mb-3">
                      <label className="form-label">Featured:</label>
                      <select className="form-select" value={featured} onChange={(e) => setFeatured(e.target.value)}>
                          <option value="true">True</option>
                          <option value="false">False</option>
  
                          </select> 
                  </div>
  
                {/* Seater */}
                <div className="mb-3">
                    <label className="form-label">Seater:</label>
                    <input type="number" className="form-control" value={seater} onChange={(e) => setSeater(e.target.value)} />
                </div>
  
                <button type="submit" className="btn btn-primary">Update Property</button>
                
            </form>
            <button onClick={deleteHandle} className='btn m-2 btn-secondary'>Delete Property</button>
            {/* create delete property btn */}
            
        </div>)}
      </div>
  );
};

export default EditPage;
