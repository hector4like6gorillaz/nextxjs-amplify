import type { Config } from 'driver.js'

export const globalDriverConfig: Config = {
  showProgress: true,
  allowClose: false,
  overlayOpacity: 0.5,
  overlayClickBehavior: 'nextStep',
  disableActiveInteraction: true, // no interactuar con elementos mientras está el tour
  nextBtnText: 'Siguiente',
  prevBtnText: 'Anterior',
  doneBtnText: 'Listo',
  progressText: '{{current}} de {{total}}',
  smoothScroll: true,
  allowKeyboardControl: true,
  stagePadding: 8,
  popoverClass: 'driver-popover-theme',

  onPopoverRender(pop, { driver }) {
    // Agregar botón SKIP manualmente
    const footer = pop.footer

    // Crear el botón skip
    const skipBtn = document.createElement('button')
    skipBtn.innerText = 'Cerrar'
    skipBtn.className = 'driver-skip-btn'

    skipBtn.onclick = () => {
      driver.destroy()
    }

    footer.appendChild(skipBtn)
  },
  onHighlightStarted: () => {
    // console.log("Paso iniciado");
  },

  onDeselected: () => {
    // console.log("Paso terminado");
  },

  onDestroyed: () => {
    // console.log("Tour terminado");
  },
}
