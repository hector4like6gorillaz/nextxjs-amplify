import { mapDriver, type DriverModule } from './driverMap'

export interface DriverStep {
  element: string
  popover: {
    title: string
    description: string
  }
}

export interface DriverConfig {
  showProgress: boolean
  steps: DriverStep[]
}

export const tourConfig: Record<DriverModule, () => DriverConfig> = {
  claveteador: () => ({
    showProgress: true,
    steps: [
      {
        element: `.${mapDriver.claveteador.headerUser}`,
        popover: {
          title: 'Header',
          description:
            'Esta sección muestra información esencial del usuario que actualmente inició sesión. Aquí podrás identificar rápidamente tu perfil, acceder a configuraciones personales y visualizar accesos rápidos importantes. Su diseño busca mantener claridad y consistencia sin sobrecargar al usuario, permitiendo una navegación más ágil y eficiente dentro de la plataforma.',
        },
      },
      {
        element: `.${mapDriver.claveteador.topNav}`,
        popover: {
          title: 'TopNav',
          description:
            'La barra de navegación superior concentra accesos directos a las funciones más utilizadas dentro del módulo. Está pensada para ofrecer una experiencia fluida, agrupando herramientas clave y facilitando la orientación del usuario sin importar en qué parte del sistema se encuentre. Su diseño está optimizado para mantener una lectura cómoda incluso cuando existen múltiples elementos disponibles.',
        },
      },
      {
        element: `.${mapDriver.claveteador.sidebar}`,
        popover: {
          title: 'Sidebar',
          description:
            'La barra lateral funciona como el menú principal del módulo, permitiendo desplazarse entre distintas funcionalidades mediante un diseño vertical ordenado y fácilmente identificable. Cada opción está organizada de forma jerárquica para reducir la complejidad visual y mejorar el flujo de trabajo del usuario, especialmente en tareas frecuentes o procesos repetitivos.',
        },
      },
      {
        element: `.${mapDriver.claveteador.footer}`,
        popover: {
          title: 'Footer',
          description:
            'En esta sección encontrarás información secundaria relacionada con la navegación, accesos utilitarios y otros elementos de soporte que complementan la experiencia del usuario. Aunque suele pasar desapercibida, su función es ofrecer estabilidad visual y mantener opciones adicionales accesibles sin interrumpir el contenido principal de la aplicación.',
        },
      },
    ],
  }),

  login: () => ({
    showProgress: true,
    steps: [
      {
        element: '.time-modal',
        popover: {
          title: 'Bienvenido',
          description: 'Esto es una bienvenida',
        },
      },
      {
        element: `.${mapDriver.login.topTitle}`,
        popover: {
          title: 'Login',
          description: 'Parte de arriba del login',
        },
      },
      {
        element: `.${mapDriver.login.loginButton}`,
        popover: {
          title: 'Botón',
          description: 'Botón para iniciar sesión',
        },
      },
    ],
  }),
}
