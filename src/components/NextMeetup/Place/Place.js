import React from 'react'
import { number } from 'prop-types'
import { FullWidthContainer } from '../../FullWidthContainer'
import { withPrefix } from 'gatsby'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

import styles from './Place.module.css'

Place.propTypes = {
  latitude: number,
  longitude: number,
}

export function Place ({ latitude, longitude }) {
  if (!latitude || !longitude ) return null

  const position = [latitude, longitude]

  return (
    <FullWidthContainer className={styles.place}>
      <div className={styles.place__map}>
        {typeof window !== 'undefined' && (
          <Map center={position} zoom={13} className={styles.leaflet_container}>
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </Map>
        )}
      </div>
    </FullWidthContainer>
  )
}
