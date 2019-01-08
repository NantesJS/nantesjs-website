import { inject } from '@k-ramel/react'
import { compose } from 'recompose'
import { MenuLink } from './MenuLink'

export const MenuLinkContainer = compose(
  inject(store => ({
    onClick: () => store.ui.menu.set({ open: false }),
  }))
)(MenuLink)
