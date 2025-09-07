import React from "react";
import AgentCard from "./AgentCard";

const Agents = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 "
          data-aos="fade-up"
          style={{ maxWidth: 600 }}
        >
          <h1 className="mb-3">Property Agents</h1>
        </div>
        <div className="row g-4">
            <AgentCard imgUrl={"img/team-1.jpg"} name={"John Doe"} animationDelay={500} fb={"#"} twitter={"#"} insta={"#"} designation={"Real Estate Agent"}/>
            <AgentCard imgUrl={"img/team-1.jpg"} name={"John Doe"} animationDelay={700} fb={"#"} twitter={"#"} insta={"#"} designation={"Real Estate Agent"}/>
            <AgentCard imgUrl={"img/team-1.jpg"} name={"John Doe"} animationDelay={800} fb={"#"} twitter={"#"} insta={"#"} designation={"Real Estate Agent"}/>
            <AgentCard imgUrl={"img/team-1.jpg"} name={"John Doe"} animationDelay={900} fb={"#"} twitter={"#"} insta={"#"} designation={"Real Estate Agent"}/>
        </div>
      </div>
    </div>
  );
};

export default Agents;
