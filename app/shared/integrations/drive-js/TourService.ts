import { driver, type Driver } from 'driver.js'
import type { DriverModule } from './driverMap'
import { tourConfig, type DriverConfig } from './tourConfig'
import { globalDriverConfig } from './globalDriverConfig'

class TourService {
  private driver: Driver

  constructor() {
    this.driver = driver()
  }

  public start(module: DriverModule) {
    const configGenerator = tourConfig[module]

    if (!configGenerator) {
      console.warn(`Tour no encontrado para el módulo: ${module}`)
      return
    }

    const moduleConfig: DriverConfig = configGenerator()

    // merge configs
    const finalConfig = {
      ...globalDriverConfig,
      ...moduleConfig,
      steps: moduleConfig.steps, // steps siempre manda
    }

    this.driver.setConfig(finalConfig)
    this.driver.drive()
  }
}

export const tourService = new TourService()
