import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'

Map.propTypes = {
  googleMapURL: Object,
  loadingElement: Object,
  containerElement: Object,
  mapElement: Object,
  coordonee: Object,
  infoPopup: Object
}


export function Map ({ googleMapURL,
  loadingElement,
  containerElement,
  mapElement,
  coordonee,
  infoPopup }) {
  return (
    <MapComponent
      googleMapURL={googleMapURL}
      loadingElement={loadingElement}
      containerElement={containerElement}
      mapElement={mapElement}
      coordonee={coordonee}
      infoPopup={infoPopup}
    ></MapComponent>
  )
}


const MapComponent = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat:props.coordonee.latitude, 
      lng:props.coordonee.longitude }}
  >
    {<Marker position={{ lat:props.coordonee.latitude, 
      lng:props.coordonee.longitude }} />}
  </GoogleMap>
))
