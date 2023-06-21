import React from "react";
import { BiAddToQueue } from "react-icons/bi";
import toast from "react-hot-toast";
import data from "../assest/data.json";
import { useDispatch } from "react-redux";
import { add } from "../Store/WishSlice";

const Visitables = () => {
  const dispatch = useDispatch();

  const wishAdd = async (elem) => {
    await dispatch(add(elem));
    toast.success("Successfully Added.");
  };

  return (
    <div className="visitable">
      <h1>Our Top Rated Visitable Places</h1>
      <div className="visitableContainer">
        {data.places.map((elem, index) => {
          return (
            <div key={index} className="visitableBox">
              <img src={elem.image} alt={elem.place} />
              <h2>
                {elem.place} , {elem.State}
              </h2>
              <h3>Trip Timing : {elem.tripTime}</h3>

              <div className="tooltip">
                <h4>Pricing : {elem.pricing} </h4>
                <button onClick={() => wishAdd(elem)}>
                  <BiAddToQueue />
                  <span className="tooltiptext">Add to Wish-List</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Visitables;
