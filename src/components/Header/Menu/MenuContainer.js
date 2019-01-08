import { inject } from '@k-ramel/react'
import { Menu } from './Menu'

export const MenuContainer = inject(store => ({
  isOpen: store.ui.menu.get().open,
  open: () => store.ui.menu.set({ open: true }),
  close: () => store.ui.menu.set({ open: false }),
}))(Menu)
