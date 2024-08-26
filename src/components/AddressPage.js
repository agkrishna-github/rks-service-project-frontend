import axios from "axios";
import React, { useState } from "react";

const AddressPage = () => {
  const [address, setAddress] = useState({
    streetAndNumber: "",
    place: "",
    region: "",
    postcode: "",
    county: "",
    latitude: "",
    longitude: "",
  });
  /* 
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const updateCoordinates = (latitude, longitude) => {
    setAddress({ ...address, latitude, longitude });
  }; */

  const handleAddressChange = (e) => {
    getAddress(e.target.value);
  };

  const getAddress = async (query) => {
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json`,
        {
          params: {
            access_token:
              "pk.eyJ1IjoiYWdrLWdvcGlrcmlzaG5hLTQwMDUiLCJhIjoiY20wNWF0bzZpMGN2ZTJsc2JkOXcwYTgzaCJ9.6N-D_xQPv98XH19LFXAQPQ",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h4>Address page</h4>
      <div>
        <label htmlFor="">Address</label>
        <input
          type="text"
          value={address.streetAndNumber}
          onChange={handleAddressChange}
        />
      </div>
    </div>
  );
};

export default AddressPage;
