'use client'

import {
  FiServer,
  FiUploadCloud,
  FiLayers,
  FiCpu,
  FiDatabase,
  FiActivity,
} from 'react-icons/fi'
import useWorkspace from '../hooks/useWorkspace'
import { Button, Card, Space, Table, Typography } from 'antd'
import TopicsSubscriptionsList from '../components/TopicsSubscriptionsList'
const { Title, Paragraph, Text } = Typography

const WorkspaceModule = () => {
  const {
    topics,
    subscriptions,
    setupTopicsSubscriptions,
    jobs,
    columns,
    inputRef,
    files,
    uploadFiles,
    handleSelectFile,
    handleFileChange,
  } = useWorkspace()

  const flow = [
    {
      title: 'Frontend (Workspace)',
      desc: 'Interfaz local que dispara acciones contra el backend dentro del mismo entorno Docker.',
      icon: <FiUploadCloud className="w-6 h-6 text-indigo-500" />,
      bg: 'bg-indigo-50',
    },
    {
      title: 'API (FastAPI)',
      desc: 'Recibe archivos o eventos y se encarga de orquestar el flujo hacia almacenamiento y mensajería.',
      icon: <FiServer className="w-6 h-6 text-blue-500" />,
      bg: 'bg-blue-50',
    },
    {
      title: 'Storage (MinIO)',
      desc: 'Simula S3 local. Aquí se almacenan archivos antes de ser procesados por los workers.',
      icon: <FiDatabase className="w-6 h-6 text-cyan-500" />,
      bg: 'bg-cyan-50',
    },
    {
      title: 'Pub/Sub',
      desc: 'Sistema de mensajería desacoplado que dispara procesamiento asíncrono.',
      icon: <FiLayers className="w-6 h-6 text-purple-500" />,
      bg: 'bg-purple-50',
    },
    {
      title: 'Worker',
      desc: 'Consume eventos, procesa datos (ej: IA, parsing, etc.) y ejecuta lógica de negocio.',
      icon: <FiCpu className="w-6 h-6 text-emerald-500" />,
      bg: 'bg-emerald-50',
    },
  ]

  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-indigo-200/30 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-blue-200/30 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6 border border-emerald-200">
            <FiActivity /> Workspace Mode Active
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Local Event System <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
              Playground
            </span>
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            Este entorno simula un sistema real basado en eventos. Permite
            probar flujos completos sin depender de servicios externos,
            utilizando Docker como base de ejecución.
          </p>
        </div>

        {/* FLOW */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-10">
            Flujo del Sistema
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {flow.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.bg}`}
                >
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* EXPLANATION */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200 mb-24">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            ¿Qué es este Workspace?
          </h2>

          <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
            <p>
              Este entorno está diseñado para simular un sistema distribuido
              basado en eventos. A diferencia de un desarrollo tradicional, los
              servicios no se comunican directamente, sino a través de mensajes.
            </p>

            <p>
              Esto permite probar escenarios reales como procesamiento
              asíncrono, integración con IA, manejo de archivos y ejecución de
              workers sin necesidad de infraestructura en la nube.
            </p>

            <p>
              Todo el sistema corre localmente usando contenedores, manteniendo
              un comportamiento cercano a producción.
            </p>
          </div>
        </div>

        {/* PANEL */}
        <div className="mb-10 space-y-6">
          {/* 🧠 INFO PANEL */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-amber-800 mb-2">
              ⚙️ Setup automático de Pub/Sub (solo desarrollo)
            </h2>

            <p className="text-sm text-amber-700 leading-relaxed">
              Este botón ejecuta un endpoint que crea automáticamente todos los{' '}
              <span className="font-medium">topics</span> y{' '}
              <span className="font-medium">subscriptions</span> necesarios para
              el entorno local.
              <br />
              <br />
              Evita tener que crearlos manualmente uno por uno o escribir sus
              nombres en Pub/Sub.
              <br />
              <br />
              ⚠️ Solo funciona en entorno de desarrollo (emulador activo). En
              ambientes como{' '}
              <span className="font-medium">dev, QA o producción</span>, la
              infraestructura se gestiona de forma distinta.
              <br />
              <br />
              Una vez ejecutado correctamente, se realizará un{' '}
              <span className="font-medium">refetch automático</span> y podrás
              ver los nuevos recursos reflejados en las listas superiores.
            </p>
          </div>

          <TopicsSubscriptionsList
            subscriptions={subscriptions}
            topics={topics}
          />

          <div className="flex justify-end">
            <Button
              type="primary"
              onClick={setupTopicsSubscriptions.execute}
              loading={setupTopicsSubscriptions.isLoading}
            >
              Crear setup automático
            </Button>
          </div>
        </div>

        <Card>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            {/* 🧠 Header / contexto */}
            <div>
              <Title level={4}>Worker Example Jobs</Title>
              <Paragraph>
                Esta tabla representa los trabajos procesados por el{' '}
                <Text strong>worker-example</Text> del template. Aquí puedes ver
                cómo se van registrando los jobs a medida que se envían archivos
                al flujo.
              </Paragraph>

              <Paragraph type="secondary">
                Nota: Como esto simula un flujo con Pub/Sub, la actualización no
                es inmediata. En un caso real podrías usar sockets, polling
                automático (ej. cada 30s), etc. Para este ejemplo, el refresco
                es manual.
              </Paragraph>

              {/* 🔄 botón refresh */}
              <Button onClick={jobs.refetch}>Refrescar tabla</Button>
            </div>

            {/* 📊 Tabla */}
            <Table
              size="small"
              loading={jobs.isLoading}
              dataSource={jobs.data?.results}
              columns={columns}
              rowKey="id"
              pagination={{
                current: jobs.data?.pagination.currentPage,
                pageSize: jobs.data?.pagination.perPage,
                total: jobs.data?.pagination.totalItems,
                showSizeChanger: false,
                onChange: (page) => {
                  jobs.onChangePage(page)
                },
              }}
            />

            {/* 📂 Upload section */}
            <div>
              <Title level={5}>Carga de archivos de ejemplo</Title>

              <Paragraph>
                Puedes subir múltiples archivos (imágenes, PDFs, documentos,
                etc.) para simular el flujo. Se recomienda usar archivos ligeros
                para pruebas.
              </Paragraph>

              <Paragraph type="secondary">
                Al subirlos, los archivos se almacenan en MinIO y puedes
                visualizarlos en:
                <Text code>http://localhost:9001</Text>
              </Paragraph>

              <Space>
                <input
                  ref={inputRef}
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleFileChange}
                />

                <Button
                  type="primary"
                  loading={uploadFiles.isLoading}
                  disabled={uploadFiles.isLoading}
                  onClick={handleSelectFile}
                >
                  Seleccionar archivos
                </Button>

                {files.length > 0 && (
                  <Button
                    type="primary"
                    loading={uploadFiles.isLoading}
                    onClick={uploadFiles.execute}
                  >
                    Subir archivos ({files.length})
                  </Button>
                )}
              </Space>
            </div>
          </Space>
        </Card>
      </div>
    </div>
  )
}

export default WorkspaceModule
