import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Store/WishSlice";
import toast from "react-hot-toast";
import Empty from "./Empty";

const Wishlist = () => {
  const data = useSelector((state) => {
    return state.wish;
  });

  const dispatch = useDispatch();

  const wishRemove = (index) => {
    dispatch(remove(index));
    toast.success("Successfully Removed From Wish-List");
  };

  if (data.length === 0) {
    return <Empty />;
  }

  return (
    <div className="wishList">
      <h1>Your Wish-List</h1>
      <section>
        {data.map((elem, index) => {
          return (
            <div key={index}>
              <img src={elem.image} alt={elem.place} />
              <h2>
                {elem.place} , {elem.State}
              </h2>
              <h3>Trip Timing : {elem.tripTime}</h3>

              <div className="tooltip">
                <h4>Pricing : {elem.pricing} </h4>
                <button onClick={() => wishRemove(index)}>
                  <AiTwotoneDelete />
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Wishlist;
