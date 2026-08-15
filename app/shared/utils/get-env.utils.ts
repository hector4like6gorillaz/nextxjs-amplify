// TODO: `window.ENV` was a Remix server-injected global with no Next.js
// equivalent yet - typed loosely here so this compiles until that's decided.
export const getEnv = (key: string) => {
  const win = window as unknown as { ENV?: Record<string, string> }
  if (typeof window !== 'undefined' && win.ENV) {
    return win.ENV[key]
  }
  return null
}
