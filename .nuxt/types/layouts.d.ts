import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/home/flo/Work_Documents/NuxtStrapi_Bug/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}