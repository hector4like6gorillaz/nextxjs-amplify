'use client'

import { useEffect } from 'react'
import {
  FiShield,
  FiDatabase,
  FiLock,
  FiSettings,
  FiBox,
  FiMap,
  FiCheckCircle,
  FiPieChart,
} from 'react-icons/fi'
import { useRouter } from 'next/navigation'
import { mapRoutes } from '~/shared/routes/routesMap'
import { getEnv } from '~/shared/utils/get-env.utils'

const HomeModule = () => {
  const appEnv = getEnv('ENVIRONMENT')
  const router = useRouter()

  useEffect(() => {
    if (appEnv == 'workspace') router.push(mapRoutes.workspace)
  }, [appEnv])

  const architecture = [
    {
      title: 'React Router v7',
      desc: 'La evolución directa de Remix. Capacidades híbridas SSR/CSR y ejecución de lógica unificada en servidor y cliente.',
      icon: <FiMap className="w-6 h-6 text-indigo-500" />,
      bg: 'bg-indigo-50',
    },
    {
      title: 'Runtime Config',
      desc: 'Variables inyectadas en tiempo de ejecución (window.__ENV__) permitiendo una sola imagen Docker para todos los entornos.',
      icon: <FiSettings className="w-6 h-6 text-blue-500" />,
      bg: 'bg-blue-50',
    },
    {
      title: 'Hybrid Auth (SSO)',
      desc: 'Autenticación corporativa flexible lista para usar con Azure Active Directory (MSAL) o Google OAuth.',
      icon: <FiShield className="w-6 h-6 text-cyan-500" />,
      bg: 'bg-cyan-50',
    },
    {
      title: 'Advanced Data Layer',
      desc: 'Patrón API → Hooks → UI con Axios + React Query. Caché automático, re-fetching inteligente y control de estado.',
      icon: <FiDatabase className="w-6 h-6 text-purple-500" />,
      bg: 'bg-purple-50',
    },
    {
      title: 'Secure Storage',
      desc: 'Almacenamiento de tokens usando localForage (IndexedDB) asíncrono con cifrado AES mediante crypto-js.',
      icon: <FiLock className="w-6 h-6 text-rose-500" />,
      bg: 'bg-rose-50',
    },
    {
      title: 'Strict Code Quality',
      desc: 'Capa fuerte de validación con ESLint, SonarJS y Unicorn. Modo STRICT_LINT para prevenir fugas de memoria y dead-code.',
      icon: <FiCheckCircle className="w-6 h-6 text-emerald-500" />,
      bg: 'bg-emerald-50',
    },
    {
      title: 'Data Visualization',
      desc: 'Arquitectura preparada para Dashboards empresariales, integrando D3.js para métricas y gráficos interactivos.',
      icon: <FiPieChart className="w-6 h-6 text-amber-500" />,
      bg: 'bg-amber-50',
    },
    {
      title: 'Container Ready',
      desc: 'Diseñado desde cero para brillar en Docker y Kubernetes sin recompilar el código al cambiar de ambiente.',
      icon: <FiBox className="w-6 h-6 text-sky-500" />,
      bg: 'bg-sky-50',
    },
  ]

  const techStack = [
    {
      name: 'React 19',
      desc: 'Librería principal para interfaces de usuario concurrentes y modernas.',
    },
    {
      name: 'React Router v7',
      desc: 'Framework full-stack que maneja rutas, SSR, y fetching de datos.',
    },
    {
      name: 'Redux Toolkit',
      desc: 'Manejo predecible y tipado del estado global de la aplicación.',
    },
    {
      name: 'React Query',
      desc: 'Gestor asíncrono para caché, fetching y sincronización con el servidor.',
    },
    {
      name: 'Vite v7',
      desc: 'Empaquetador y servidor de desarrollo ultrarrápido con HMR.',
    },
    {
      name: 'Tailwind v4',
      desc: 'Framework CSS utility-first que no requiere archivos de configuración pesados.',
    },
    {
      name: 'Ant Design',
      desc: 'Librería de componentes UI empresariales (Tablas, Modales, DatePickers).',
    },
    {
      name: 'Axios',
      desc: 'Cliente HTTP configurado con interceptores para inyección automática de tokens.',
    },
    {
      name: 'Azure / Google Auth',
      desc: 'Integración MSAL y Google Identity para autenticación SSO corporativa.',
    },
    {
      name: 'Driver.js',
      desc: 'Librería ligera para crear tours interactivos y guiar a los usuarios.',
    },
    {
      name: 'LocalForage',
      desc: 'API asíncrona que mejora el localStorage usando IndexedDB o WebSQL.',
    },
    {
      name: 'D3.js (Charts)',
      desc: 'Motor gráfico de bajo nivel para crear visualizaciones de datos complejas.',
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 font-sans">
      {/* Background Decorativo Abstracto */}
      <div className="absolute top-0 -z-10 h-full w-full bg-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-150 h-150 rounded-full bg-indigo-200/40 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-125 h-125 rounded-full bg-blue-200/40 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold tracking-wide mb-6 border border-indigo-200 shadow-sm cursor-default hover:bg-indigo-200 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Enterprise Level Architecture
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            React Router v7 <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600">
              Corporate Template+
            </span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Boilerplate diseñado para equipos de alto rendimiento. Incluye
            validaciones estrictas (SonarJS), inyección de variables en runtime,
            Data Fetching híbrido y autenticación corporativa escalable.
          </p>
        </div>
        <div className="relative rounded-3xl p-8 md:p-12 bg-white/60 backdrop-blur-xl border border-white shadow-xl mb-20 overflow-hidden group">
          <div className="absolute inset-0 bg-linear-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4">
              <h2 className="text-3xl font-bold text-slate-900 leading-tight">
                ¿Por qué <br />
                <span className="text-indigo-600">React Router v7?</span>
              </h2>
            </div>
            <div className="md:col-span-8 text-slate-600 space-y-4 text-lg">
              <p>
                React Router v7 no es solo un manejador de rutas; absorbió la
                arquitectura completa de <strong>Remix</strong>. Ahora es un
                framework full-stack.
              </p>
              <p>
                Aprovechamos ese poder para implementar un sistema híbrido que
                elimina las pantallas blancas de carga (Cold Starts del
                backend), inyecta variables nativas de Docker en tiempo de
                ejecución y protege las vistas antes de que siquiera rendericen
                en el navegador.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architecture.map((item, i) => (
              <div
                key={i}
                className="group relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${item.bg} group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-3 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard / Gráficos Mockup Visual */}
        <div className="mb-24">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

            <div className="text-center mb-8 text-slate-800">
              <h3 className="text-2xl font-bold">
                Listos para Data Visualization
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                Estructura pensada para Dashboards y D3.js
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-end h-48 max-w-3xl mx-auto px-4 border-b border-slate-100 pb-4">
              {/* Barra 1 */}
              <div className="group relative w-full flex flex-col items-center justify-end h-full">
                <div className="w-full bg-blue-100 rounded-t-lg h-[40%] group-hover:h-[50%] transition-all duration-500 relative overflow-hidden">
                  <div className="absolute bottom-0 w-full bg-blue-500 h-full origin-bottom transform scale-y-100 opacity-80"></div>
                </div>
                <span className="text-xs text-slate-400 mt-2 font-medium uppercase tracking-wider">
                  Métricas
                </span>
              </div>
              {/* Barra 2 */}
              <div className="group relative w-full flex flex-col items-center justify-end h-full">
                <div className="w-full bg-indigo-100 rounded-t-lg h-[80%] group-hover:h-[90%] transition-all duration-500 relative overflow-hidden">
                  <div className="absolute bottom-0 w-full bg-indigo-500 h-full origin-bottom transform scale-y-100 opacity-80"></div>
                </div>
                <span className="text-xs text-slate-400 mt-2 font-medium uppercase tracking-wider">
                  Rendimiento
                </span>
              </div>
              {/* Barra 3 */}
              <div className="group relative w-full flex flex-col items-center justify-end h-full">
                <div className="w-full bg-purple-100 rounded-t-lg h-[60%] group-hover:h-[70%] transition-all duration-500 relative overflow-hidden">
                  <div className="absolute bottom-0 w-full bg-purple-500 h-full origin-bottom transform scale-y-100 opacity-80"></div>
                </div>
                <span className="text-xs text-slate-400 mt-2 font-medium uppercase tracking-wider">
                  Usuarios
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Pills con Tooltips */}
        <div className="mb-24 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Librerías del Sistema
          </h2>
          <p className="text-slate-500 mb-10 max-w-2xl mx-auto text-sm">
            Pasa el cursor sobre cada tecnología para entender su propósito
            dentro de nuestra arquitectura empresarial.
          </p>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group relative px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold shadow-sm hover:border-indigo-400 hover:text-indigo-600 hover:shadow-md transition-all duration-200 cursor-help"
              >
                {tech.name}

                {/* Tooltip con Tailwind puro */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3 bg-slate-900 text-white text-xs text-center rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-xl pointer-events-none">
                  <span className="font-bold text-indigo-300 block mb-1">
                    {tech.name}
                  </span>
                  {tech.desc}
                  {/* Flechita del tooltip */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Configuración de Entorno (Environment Variables) */}
        <div className="mb-24 max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 relative overflow-hidden">
            {/* Resplandor decorativo sutil de fondo */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-emerald-50 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold tracking-wide mb-6 border border-emerald-200 shadow-sm cursor-default">
                  ⚙️ Setup Inicial
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-5">
                  Variables de Entorno
                </h2>
                <p className="text-slate-600 mb-4 leading-relaxed text-lg">
                  Para levantar el proyecto sin errores, crea tu archivo de
                  entorno en la raíz. Puedes usar la misma base para{' '}
                  <code className="font-mono text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                    .env
                  </code>
                  ,{' '}
                  <code className="font-mono text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                    .env.dev
                  </code>{' '}
                  o{' '}
                  <code className="font-mono text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                    .env.qa
                  </code>
                  .
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  ⚠️ <strong>Nota:</strong> El valor{' '}
                  <code className="font-mono text-slate-700 font-bold">
                    FORCE_PROXY='true'
                  </code>{' '}
                  es indispensable en desarrollo local para evitar problemas de
                  CORS cuando apuntas al backend real.
                </p>

                <div className="text-sm text-slate-600 border-l-4 border-indigo-500 pl-4 py-1 bg-indigo-50/50 rounded-r-lg">
                  Selecciona el código de la derecha, cópialo y completa los
                  valores faltantes de tu Tenant.
                </div>
              </div>

              {/* Mockup de Editor de Código */}
              <div className="bg-[#0d1117] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden group relative">
                {/* Header del editor */}
                <div className="bg-[#161b22] px-4 py-3 flex items-center justify-between border-b border-slate-700/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>

                  <span className="text-xs text-slate-400 font-mono tracking-wider">
                    .env.dev
                  </span>

                  <div className="w-8"></div>
                </div>

                {/* Contenido del editor */}
                <div className="p-6 overflow-x-auto text-sm font-mono leading-loose">
                  <pre className="text-slate-300 select-all cursor-text whitespace-pre">
                    <span className="text-blue-400">API_BASE_URL</span>=
                    <span className="text-emerald-300">''</span>
                    {'\n'}
                    <span className="text-blue-400">
                      STORAGE_ENCRYPTION_KEY
                    </span>
                    =
                    <span className="text-emerald-300">
                      'os5bnzHWonT9GwqW@h7wkH%kjnUt5q$xfSB49RzjF6ULejDBAv%JA!o$PgVrj^chuecoghXZRJ7o3K!v'
                    </span>
                    {'\n'}
                    <span className="text-blue-400">FORCE_PROXY</span>=
                    <span className="text-emerald-300">'true'</span>
                    {'\n'}
                    <span className="text-blue-400">AZURE_REDIRECT_URI</span>=
                    <span className="text-emerald-300">
                      'www.el-dominio.com'
                    </span>
                    {'\n'}
                    <span className="text-blue-400">AZURE_TENANT_ID</span>=
                    <span className="text-emerald-300">''</span>
                    {'\n'}
                    <span className="text-blue-400">AZURE_CLIENT_ID</span>=
                    <span className="text-emerald-300">''</span>
                    {'\n'}
                    <span className="text-blue-400">AZURE_JWKS_URL</span>=
                    <span className="text-emerald-300">
                      'https://login.microsoftonline.com/&lt;TENANT_ID&gt;'
                    </span>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Documentation Banner - Terminal Style */}
        <div className="bg-slate-900 rounded-3xl p-1 relative overflow-hidden shadow-2xl">
          <div className="bg-slate-800 rounded-[22px] p-8 md:p-12 relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  🛠️ Comandos de Desarrollo
                </h3>
                <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                  Para mantener el código limpio (Clean Code) hemos implementado
                  reglas estrictas. Asegúrate de correr el{' '}
                  <code className="text-indigo-300 bg-indigo-900/50 px-2 py-0.5 rounded">
                    lint:strict
                  </code>{' '}
                  antes de cada PR.
                </p>

                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-center gap-3 bg-slate-900 p-3 rounded-lg border border-slate-700">
                    <span className="text-slate-500">~</span>
                    <span className="text-emerald-400">
                      npm run dev:localdev
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-900 p-3 rounded-lg border border-slate-700">
                    <span className="text-slate-500">~</span>
                    <span className="text-blue-400">npm run lint:strict</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                <h4 className="text-indigo-300 font-semibold mb-2 flex items-center gap-2">
                  <FiCheckCircle /> Capa de Calidad Activa
                </h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li className="flex items-center gap-2">
                    <span>✅</span> eslint-plugin-sonarjs (Code Smells)
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✅</span> eslint-plugin-unicorn (Mejores prácticas)
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✅</span> eslint-plugin-react-perf (Fugas de memoria)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none"></div>
        </div>
      </div>
    </div>
  )
}

export default HomeModule
