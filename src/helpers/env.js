const env = process.env.NODE_ENV || 'development'

const PORT = 4545
const PROTOCOL = 'http'
const HOST = 'localhost'
const BASE_URL = ''

let BASEURL = `${PROTOCOL}://${HOST}:${PORT}` // PRO_BASE_URL=http://192.168.1.103:4545

export const envs = async () => {
  const ARGS = { key: 'HOSTNAME_BEW', value: 'vSky' }

  const HOST = env === 'development' ? 'vSky' : ''

  BASEURL = ARGS.value ? `${PROTOCOL}://${HOST}:${PORT}` : undefined

  return {
    development: {
      BASE_URL: BASEURL ?? process.env.DEV_BASE_URL,
      ENV: process.env.NODE_ENV,
    },
    production: {
      BASE_URL: BASEURL ?? process.env.PRO_BASE_URL,
      ENV: process.env.NODE_ENV,
    },
  }
}

const config = {
  BASE_URL,
  ENV: env,
}

export { config }
