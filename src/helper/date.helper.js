import { flow } from 'lodash/fp'
import fr from 'date-fns/locale/fr'
import { parse, formatWithOptions } from 'date-fns/fp'

export const format = str => flow(
  parse(new Date(), 'dd/MM/yyyy'),
  formatWithOptions({ locale: fr }, str)
)

export const formatDay = format('d')
export const formatMonth = format('MMM')
export const formatYear = format('yyyy')
export const formatRaw = format('yyyy-MM-dd')
