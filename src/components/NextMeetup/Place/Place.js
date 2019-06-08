import React from 'react'
import { number } from 'prop-types'
import { FullWidthContainer } from '../../FullWidthContainer'
import { withPrefix } from 'gatsby'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

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

export function Place ({ latitude, longitude, name, link, address, postal_code, city }) {
  if (!latitude || !longitude) return null
  const position = [latitude, longitude]
  return (
    <FullWidthContainer className={styles.place}>
      <div className={styles.place__map}>
        {typeof window !== 'undefined' && (
          <Map center={position} zoom={15} className={styles.leaflet_container}>
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={withPrefix('/images/logotype.png')}
                          height="50px"
                        />
                      </td>
                      <td>
                        <b><a href={link}>{name}</a></b><br />
                        {address}<br />
                        {postal_code}<br />
                        {city}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Popup>
            </Marker>
          </Map>
        )}
      </div>
    </FullWidthContainer>
  )
}
