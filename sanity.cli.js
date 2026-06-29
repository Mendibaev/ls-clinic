import { defineCliConfig } from 'sanity/cli'
import { projectId, dataset } from './sanity/projectConfig.js'

export default defineCliConfig({
  api: { projectId, dataset },
  // Имя поддомена для деплоя админки: <studioHost>.sanity.studio
  // studioHost: 'ls-clinic',
})
