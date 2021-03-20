import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

const initializeMap = () => {
    return (
        <GoogleMap defaultZoom={10} defaultCenter={{ lat: 23.746466, lng: 90.376015 }}>
            <Marker position={{ lat: 23.746466, lng: 90.376015 }} />
        </GoogleMap>
    );
};

const WrappedMap = withScriptjs(withGoogleMap(initializeMap))


const Map = () => {
    return (
        <div>
            <WrappedMap
                googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD6WiR2b2fRPQn4a64EAiUYkW2b0JX42vg"}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>

    );
};

export default Map;