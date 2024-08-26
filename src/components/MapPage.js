import React, { useRef, useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

const center = { lat: 48.8584, lng: 2.2945 };

const google = window.google;
console.log(google);
const MapPage = () => {
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [deirectionResponse, setDirectionResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const originRef = useRef();
  const destinationRef = useRef();

  const { isLoaded } = useJsApiLoader({
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    googleMapsApiKey: "AIzaSyAf4vRvjVvt-AuStWjrfbA-tJNYouHBpb4",
    libraries: ["places"],
  });
  /* 
  if (!isLoaded) {
    return <h1>Maps Key is loading</h1>;
  } */

  const calculateRoute = async () => {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }
    const directionService = new google.maps.DirectionsService();
    const results = await directionService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  };

  function clearRoute() {
    setDirectionResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  }

  if (!isLoaded) {
    return <h1>Maps Key is loading</h1>;
  }

  return (
    <div>
      <div>
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "400px", height: "400px" }}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={center} />
          {deirectionResponse && (
            <DirectionsRenderer directions={deirectionResponse} />
          )}
        </GoogleMap>
      </div>

      <div className="mt-10">
        <div className="flex gap-10">
          <Autocomplete>
            <input type="text" placeholder="Origin" ref={originRef} />
          </Autocomplete>
          <Autocomplete>
            <input type="text" placeholder="Destination" ref={destinationRef} />
          </Autocomplete>
        </div>
        <div className="mt-10">
          <button onClick={() => map.panTo(center)}>Reset Button</button>
        </div>
        <div className="mt-10">
          <button onClick={() => calculateRoute()}>calculate Route</button>
        </div>
        <div className="mt-10">
          <button onClick={() => clearRoute()}>Clear Route</button>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
