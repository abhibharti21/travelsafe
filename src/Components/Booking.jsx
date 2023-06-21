import React, { useState } from "react";
import toast from "react-hot-toast";
import hello from "../assest/hello.png";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase/Firebase";

const Booking = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const [button, setButton] = useState(false);

  const changeHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setButton(true);

    if (inputs.name === "" && inputs.email === "") {
      await toast.error("Kindly Enter Your Message.");
      await setButton(false);
      return;
    }

    try {
      await addDoc(collection(db, "Persons"), { inputs });
      toast.success("Message Sent");
      setInputs({ name: "", email: "", message: "", number: "" });
      setButton(false);
    } catch {
      toast.error("Error");
      setButton(false);
    }
  };

  return (
    <div className="Booking">
      <section>
        <main>
          <h1>Contact Us:</h1>
          <form>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name..."
              value={inputs.name}
              onChange={(e) => changeHandler(e)}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email..."
              value={inputs.email}
              onChange={(e) => changeHandler(e)}
            />
            <input
              type="number"
              name="number"
              placeholder="Enter Your Mobile Number..."
              value={inputs.number}
              onChange={(e) => changeHandler(e)}
            />

            <textarea
              name="message"
              placeholder="Enter Your Message..."
              value={inputs.message}
              onChange={(e) => changeHandler(e)}
            ></textarea>
            <button
              type="submit"
              disabled={button}
              className={button ? "disableBtn" : ""}
              onClick={(e) => submitHandler(e)}
            >
              Submit
            </button>
          </form>
        </main>
      </section>
      <aside>
        <img src={hello} alt="helloForm" className="helloImage" />
      </aside>
    </div>
  );
};

export default Booking;
