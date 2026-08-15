export const mapDriver = {
  claveteador: {
    headerUser: 'page-header',
    topNav: 'top-nav',
    sidebar: 'sidebar',
    footer: 'footer',
  },

  login: {
    welcome: 'some-like-a-modal',
    topTitle: 'top-title',
    loginButton: 'button-loguin',
  },
}

export type DriverModule = keyof typeof mapDriver
