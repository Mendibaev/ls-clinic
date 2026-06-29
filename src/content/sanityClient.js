import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { projectId, dataset, apiVersion, isSanityConfigured } from '../../sanity/projectConfig.js'

// Клиент только для чтения опубликованного контента (без токена).
export const sanityClient = isSanityConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: true, perspective: 'published' })
  : null

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null

// Хелпер для построения URL изображений из Sanity (если понадобится трансформация).
export function urlFor(source) {
  return builder ? builder.image(source) : null
}

export { isSanityConfigured }
