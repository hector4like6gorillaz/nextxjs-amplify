const DasboardModule = () => {
  return (
    <div className="min-h-dvh bg-background p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-text">Dashboard</h1>
        <p className="text-sm text-black-300">
          Bienvenido, aquí tienes un resumen general
        </p>
      </div>

      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 shadow-md border border-black-100">
          <p className="text-sm text-black-300">Usuarios activos</p>
          <h2 className="text-2xl font-semibold mt-2">1,245</h2>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-md border border-black-100">
          <p className="text-sm text-black-300">Sesiones hoy</p>
          <h2 className="text-2xl font-semibold mt-2">342</h2>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-md border border-black-100">
          <p className="text-sm text-black-300">Rendimiento</p>
          <h2 className="text-2xl font-semibold mt-2">98%</h2>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-2xl p-6 shadow-md border border-black-100">
        <p className="text-sm text-black-300">
          Este es un espacio para contenido dinámico como tablas, gráficos o
          actividad reciente.
        </p>
      </div>
    </div>
  )
}

export default DasboardModule
