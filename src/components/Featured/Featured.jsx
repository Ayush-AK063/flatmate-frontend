import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  clearErrorCategorizedProperty,
  getCategorizedProperty,
} from "../../store/action/propertyAction";
import { enqueueSnackbar } from "notistack";
import PropertyCard from "../home/Properties/PropertyCard";
import Loader from "../Loader/Loader";
import Search from "../home/Search";
import FeaturedSearch from "./FeaturedSearch";

const Featured = () => {
  const { category } = useParams();
  const { loading, error, properties } = useSelector((state) => state.category);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategorizedProperty(category));
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrorCategorizedProperty());
      navigate("/");
    }
  }, [dispatch, category, error]);


  return (
    <div className="container">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h1>Featured</h1>
          <FeaturedSearch isAdmin={false} category={category}/>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                {properties &&
                  properties.map((property, index) => (
                    <PropertyCard
                      Occupied={property.Occupied}
                      isAdmin={false}
                      id={property._id}
                      key={index}
                      imgUrl={property.Details.Image}
                      forType={property.Details.genderType}
                      type={property.PropertyType}
                      price={property.Details.Price}
                      name={property.Details.Name}
                      address={`${property.Details.Address.Street} , ${property.Details.Address.City}, ${property.Details.Address.State}`}
                      area={property.Details.Area}
                      room={property.Details.Rooms}
                      bath={property.Details.Bathrooms}
                      animationDelay={100}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Featured;
