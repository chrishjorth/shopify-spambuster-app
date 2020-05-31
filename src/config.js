const _BACKEND_URL = process.env.NODE_ENV === 'production' ? 'https://a8w3q11yde.execute-api.eu-west-1.amazonaws.com/prod' : 'https://v7qqtjkwvj.execute-api.eu-west-1.amazonaws.com/dev'

export const BACKEND_URL = _BACKEND_URL
export const APP_PATH = process.env.NODE_ENV === 'production' ? '/admin/apps/recaptcha-spambuster' : '/admin/apps/recaptcha-spambuster-dev'
export const STAGE = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'
