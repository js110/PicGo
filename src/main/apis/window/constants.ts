export enum IWindowList {
  SETTING_WINDOW = 'SETTING_WINDOW',
  TRAY_WINDOW = 'TRAY_WINDOW',
  MINI_WINDOW = 'MINI_WINDOW',
  RENAME_WINDOW = 'RENAME_WINDOW'
}

const isDevelopment = process.env.NODE_ENV !== 'production'

export const TRAY_WINDOW_URL = isDevelopment
  ? (process.env.WEBPACK_DEV_SERVER_URL as string)
  : `picgo://./index.html`

export const SETTING_WINDOW_URL = isDevelopment
  ? `${(process.env.WEBPACK_DEV_SERVER_URL as string)}#setting/upload`
  : `picgo://./index.html#setting/upload`

export const MINI_WINDOW_URL = isDevelopment
  ? `${(process.env.WEBPACK_DEV_SERVER_URL as string)}#mini-page`
  : `picgo://./index.html#mini-page`

export const RENAME_WINDOW_URL = process.env.NODE_ENV === 'development'
  ? `${(process.env.WEBPACK_DEV_SERVER_URL as string)}#rename-page`
  : `picgo://./index.html#rename-page`

export const DELETE_WINDOW_EVENT = 'DELETE_WINDOW_EVENT'
export const CREATE_WINDOW_EVENT = 'CREATE_WINDOW_EVENT'
