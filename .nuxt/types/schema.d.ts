import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["strapi"]?: typeof import("@nuxtjs/strapi").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
  }
  interface RuntimeConfig {
     app: {
        baseURL: string,

        buildAssetsDir: string,

        cdnURL: string,
    },

    strapi: {
        url: string,

        prefix: string,

        version: string,

        cookie: any,

        auth: any,

        cookieName: string,
    },
  }
  interface PublicRuntimeConfig {
     strapi: {
        url: string,

        prefix: string,

        version: string,

        cookie: any,

        auth: any,

        cookieName: string,
    },
  }
}