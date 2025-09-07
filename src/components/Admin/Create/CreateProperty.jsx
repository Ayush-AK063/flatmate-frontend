import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearErrorCreateProperty,
  createProperty,
} from "../../../store/action/createPropertyAction";
import { toast } from "react-hot-toast";
import axios from "axios";
import { server } from "../../../store/store";

const CreateProperty = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { role, isAuthenticated } = useSelector((state) => state.user);
  const { loading, error, message } = useSelector(
    (state) => state.createProperty
  );

  const [imageArray, setImageArray] = useState([]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrorCreateProperty());
    }
    if (message) {
      toast.success(message);
      dispatch(clearErrorCreateProperty());
    }
  }, [error, message]);

  useEffect(() => {
    var toastID = false;
    if (loading) {
      toast.loading("Creating Property...");
    } else {
      toast.dismiss(toastID);
    }
  }, [loading]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
    if (role !== "admin") {
      navigate("/dashboard");
    }
  }, [role, isAuthenticated]);

  const { statesCity } = useSelector((state) => state.otherData);

  const [selectedState, setSelectedState] = useState("Select State");
  const [selectedCity, setSelectedCity] = useState("Select City");
  const [cities, setCities] = useState([]);
  const [areaAddresss, setAreaAddresss] = useState([]);
  const [SetArea, setSetArea] = useState("");
  const [searchAttributes, setsearchAttributes] = useState({
    state: "",
    city: "",
    Hometype: "",
  });

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
    const selectedCityData = cities.find(
      (city) => city.name === e.target.value
    );
    if (selectedCityData) {
      setAreaAddresss(selectedCityData.areas);
    } else {
      setAreaAddresss([]);
    }
  };

  const onChangeType = (e) => {
    setsearchAttributes({
      ...searchAttributes,
      Hometype: e.target.value,
    });
  };

  const typeData = [
    {
      id: 1,
      name: "Apartment",
    },
    {
      id: 2,
      name: "Hostel",
    },
    {
      id: 3,
      name: "Home",
    },
    {
      id: 4,
      name: "Office",
    },
    {
      id: 5,
      name: "Building",
    },
    {
      id: 6,
      name: "PG",
    },
    {
      id: 7,
      name: "Shop",
    },
    {
      id: 8,
      name: "Garage",
    },
  ];

  //form management
  const [image, setImage] = useState("");
  const [area, setArea] = useState(0);
  const [room, setRoom] = useState(0);
  const [bathroom, setBathroom] = useState(0);
  const [seater, setSeater] = useState(0);
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [zipcode, setZipcode] = useState("0");
  const [gender, setGender] = useState("");
  const [PropertyTypeSelect, setPropertyTypeSelect] = useState("");

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(file);
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.append("Name", name);
    myForm.append("PropertyType", PropertyTypeSelect);
    myForm.append("Price", price);
    myForm.append("Street", street);
    myForm.append("City", selectedCity);
    myForm.append("AreaAddress", SetArea);
    myForm.append("State", selectedState);
    myForm.append("Zip", zipcode);
    myForm.append("Country", "India");
    myForm.append("Area", `${area} sq ft`);
    myForm.append("Rooms", room);
    myForm.append("Bathrooms", bathroom);
    myForm.append("genderType", gender);
    myForm.append("SeaterType", seater);
    myForm.append("Image", JSON.stringify(imageArray));

    dispatch(createProperty(myForm));
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

  return (
    <div className="container d-grid gap-2">
      <h1 className="m-2">Create Product</h1>
      <div>
        <div class="mb-3">
          <label class="form-label">Property Name</label>
          <input
            type="text"
            class="form-control"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Price</label>
          <input
            type="number"
            class="form-control"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Street Address</label>
          <input
            type="text"
            class="form-control"
            name="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Select State</label>
          <select
            class="form-select"
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option selected>Select State</option>
            {statesCity.map((state, index) => (
              <option key={index} value={state.state}>
                {state.state}
              </option>
            ))}
          </select>
        </div>

        <div class="mb-3">
          <label class="form-label">Select City</label>
          <select class="form-select" onChange={onChangeCity}>
            <option selected>Select City</option>
            {cities.map((city, index) => (
              <option key={index} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        <div class="mb-3">
          <label class="form-label">Select Property Type</label>
          <select
            class="form-select"
            onChange={(e) => setPropertyTypeSelect(e.target.value)}
          >
            <option selected>Property Type</option>
            {typeData.map((type, index) => (
              <option key={index} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </div>

        <div class="mb-3">
          <label class="form-label">Select Area</label>
          <select
            class="form-select"
            onChange={(e) => setSetArea(e.target.value)}
          >
            <option selected>Select City</option>
            {areaAddresss.map((area, index) => (
              <option key={index} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>

        <div class="mb-3">
          <label class="form-label">Zip Code</label>
          <input
            type="number"
            class="form-control"
            name="zipcode"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Number of Rooms</label>
          <input
            type="number"
            class="form-control"
            name="room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Number of Bathroom</label>
          <input
            type="number"
            class="form-control"
            name="bathroom"
            value={bathroom}
            onChange={(e) => setBathroom(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Area in sq feet</label>
          <input
            type="number"
            class="form-control"
            name="area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Number of Seater</label>
          <input
            type="number"
            class="form-control"
            name="seater"
            value={seater}
            onChange={(e) => setSeater(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Select Gender</label>
          <select
            class="form-select"
            name="gender"
            onChange={(e) => setGender(e.target.value)}
          >
            <option selected>Property Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Common">Common</option>
          </select>
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

        <button className="btn btn-primary" onClick={submitHandler}>
          {" "}
          Create{" "}
        </button>
      </div>
    </div>
  );
};

export default CreateProperty;
