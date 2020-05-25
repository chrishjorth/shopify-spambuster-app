const _BACKEND_URL = process.env.NODE_ENV === 'production' ? 'https://a8w3q11yde.execute-api.eu-west-1.amazonaws.com/prod' : 'https://v7qqtjkwvj.execute-api.eu-west-1.amazonaws.com/dev'

export const BACKEND_URL = _BACKEND_URL
export const APP_PATH = '/admin/apps/recaptcha-spambuster'
export const STAGE = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'
