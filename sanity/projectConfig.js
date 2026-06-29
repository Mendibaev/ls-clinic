// Единая точка конфигурации Sanity (не секретные данные — можно коммитить).
// После создания проекта на sanity.io вставьте сюда ваш projectId
// (или задайте переменные окружения, см. .env.example).
// dataset «production» по умолчанию доступен на чтение без токена.

const nodeEnv = typeof process !== 'undefined' && process.env ? process.env : {}
const viteEnv = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env : {}

export const projectId =
  nodeEnv.SANITY_STUDIO_PROJECT_ID ||
  viteEnv.VITE_SANITY_PROJECT_ID ||
  'REPLACE_WITH_PROJECT_ID'

export const dataset =
  nodeEnv.SANITY_STUDIO_DATASET ||
  viteEnv.VITE_SANITY_DATASET ||
  'production'

export const apiVersion = '2024-10-01'

// Настроен ли проект (используется для фолбэка на сид-данные).
export const isSanityConfigured = projectId !== 'REPLACE_WITH_PROJECT_ID'
