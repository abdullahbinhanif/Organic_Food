import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
const Succes = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#A855F7" />
      ) : (
        <div>
          {" "}
          <h2 className="text-3xl text-center font-semibold mb-4">
            Order SuccesFully
          </h2>
          <p>Your order has been succesfully placed</p>
        </div>
      )}
    </div>
  );
};

export default Succes;
