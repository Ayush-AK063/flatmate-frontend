import React, { useEffect } from "react";
import PropertyCard from "./PropertyCard";
import { enqueueSnackbar } from "notistack";
import {
  clearErrorFeaturedProperty,
  featuredProperty,
} from "../../../store/action/propertyAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Loader/Loader";

const Property = () => {
  const { properties, loading, error } = useSelector(
    (state) => state.featuredProperty
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(featuredProperty());
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrorFeaturedProperty());
    }
  }, [dispatch, error]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-0 gx-5 align-items-end">
              <div className="col-lg-6">
                <div
                  className="text-start mx-auto mb-5 "
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <h1 className="mb-3">Property Listing</h1>
                  <p>
                    Property listings are an important resource for people
                    looking to purchase or rent a house or apartment, whether
                    that’s for a new home or an investment property.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-6 text-start text-lg-end"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                  <li className="nav-item me-2">
                    <a
                      className="btn btn-outline-primary active"
                      data-bs-toggle="pill"
                      href="#tab-1"
                    >
                      Featured
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  {properties.map((property, index) => (
                    <PropertyCard
                      id={property._id}
                      key={index}
                      data={property.Details.genderType}
                      imgUrl={property.Details.Image}
                      forType={property.Details.genderType}
                      type={property.PropertyType}
                      price={property.Details.Price}
                      name={property.Details.Name}
                      address={`${property.Details.Address.Street} , ${property.Details.Address.Area}, ${property.Details.Address.City}, ${property.Details.Address.State}`}
                      area={property.Details.Area}
                      room={property.Details.Rooms}
                      bath={property.Details.Bathrooms}
                      animationDelay={index * 100}
                      Occupied={property.Occupied}
                    />
                     ))}


                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Property;
