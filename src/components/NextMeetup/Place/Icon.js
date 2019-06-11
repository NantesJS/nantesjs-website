import L from 'leaflet'
import { withPrefix } from 'gatsby'

const iconNantesJS = new L.Icon({
  iconUrl: withPrefix('/images/logotype.png'),
  iconRetinaUrl: null,
  iconAnchor: null,
  popupAnchor: [0, -10],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [50,50],
  className: 'marker'
})

export { iconNantesJS }