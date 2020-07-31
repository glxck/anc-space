import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps'


//Camera place
const mapData = { 
    center: [55.758215, 37.768453],
    zoom: 14,
  };
  
  //Location place
  const coordinates = [
    [55.758215, 37.768453],
    [55.758215, 37.768453]
  ];
  
  const Maps = () => {
      return (
        <YMaps>
        <Map style = {{marginTop: '300px',float: 'left' ,width: '500px', height: '350px', overflow: 'hidden', borderRadius: '5%'}} defaultState={mapData}>
          {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
        </Map>
      </YMaps>
      )
  }

  export default Maps