import React from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <div style={{width:"100%" , height:"100%"}}>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 " style={{ maxWidth: 600 }}>
            <h1 className="mb-3">Property Types</h1>
          </div>
          <div className="row g-4">
            <CategoryCard
              icon={"/img/icon-apartment.png"}
              type={"Apartment"}
              animationDelay={100}
            />
            <CategoryCard
              icon={"/img/icon-villa.png"}
              type={"Hostel"}
              animationDelay={200}
            />
            <CategoryCard
              icon={"/img/icon-house.png"}
              type={"Home"}
              animationDelay={300}
            />
            <CategoryCard
              icon={"/img/icon-housing.png"}
              type={"Office"}
              animationDelay={400}
            />
            <CategoryCard
              icon={"/img/icon-building.png"}
              type={"Building"}
              animationDelay={500}
            />
            <CategoryCard
              icon={"/img/icon-neighborhood.png"}
              type={"PG"}
              animationDelay={600}
            />
            <CategoryCard
              icon={"/img/icon-condominium.png"}
              type={"Shop"}
              animationDelay={700}
            />
            <CategoryCard
              icon={"/img/icon-luxury.png"}
              type={"Garage"}
              animationDelay={800}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
