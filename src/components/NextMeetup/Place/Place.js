import React from 'react'
import { number } from 'prop-types'
import { FullWidthContainer } from '../../FullWidthContainer'
import { Map } from './Map'

import styles from './Place.module.css'

Place.propTypes = {
  latitude: number,
  longitude: number,
  name: String,
  link: String,
  address: String,
  postal_code: number,
  city: String,

}

export function Place ({
  latitude,
  longitude,
  name,
  link,
  address,
  postal_code,
  city
}) {
  const GMAP_KEY = process.env.GMAP_KEY
  const coordonee = { latitude: latitude, longitude: longitude }
  const infoPopup = {
    name: name,
    link: link,
    address: address,
    postal_code: postal_code,
    city: city
  }
  if (!latitude || !longitude || !GMAP_KEY) return null
  return (
    <FullWidthContainer className={styles.place}>
      <div className={styles.place__map}>
        {typeof window !== 'undefined' && (
          <Map
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${ GMAP_KEY }`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            coordonee={coordonee}
            infoPopup={infoPopup}
          ></Map>
        )}
      </div>
    </FullWidthContainer>
  )
}
