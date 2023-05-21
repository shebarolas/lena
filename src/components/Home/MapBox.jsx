import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import Map from 'react-map-gl';

export const MapBox = () => {
    return (
        <>
            <Map
                initialViewState={{
                    longitude: -122.4,
                    latitude: 37.8,
                    zoom: 14
                }}
                style={{ width: 500, height: 300}}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken="pk.eyJ1Ijoic2hlYmFyb2xhcyIsImEiOiJjbDRrYmxhdGQweWp1M2VrN3Z2ZnZvaDNtIn0.7s-91uaVg0XB7-zGYdcOvw"
            />
        </>
    )
}
