import React from "react";
import { Link } from "react-router-dom";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src="https://images.pexels.com/photos/1385178/pexels-photo-1385178.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            About Us
          </h1>
          <p>
            <ol>Aesthetic Bakester : Your destination for beautiful and
            delicious cakes and cupcakes.</ol><br/>
            <ol> Wide range of flavors and sizes for
            cakes and cupcakes. Only the freshest and highest quality
            ingredients used.</ol><br/>
            <ol>Perfect for weddings,birthdays, corporate events, and more. Every celebration deserves a
            special dessert. Let us bring a touch of sweetness and beauty to
            your special occasion.</ol><br/>
          </p>
          <Link to="./cupcakes" className="bg-black text-center text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Explore CupCakes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
