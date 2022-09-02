# NuxtStrapi_Bug
Only for reproduction of a bug in the nuxtjs/strapi module.

Steps to reproduce:

`npm install`

`npm run dev`

Go to localhost:3000 in browser.

Produces following error:

```
[nuxt] [request error] init is not a function
  at Module.useState (./.nuxt/dist/server/server.mjs:993:26)  
  at Module.useStrapiUser (./.nuxt/dist/server/server.mjs:3184:51)  
  at Module.useStrapiAuth (./.nuxt/dist/server/server.mjs:3053:38)  
  at ./.nuxt/dist/server/server.mjs:3020:47  
  at fn (./.nuxt/dist/server/server.mjs:434:27)  
  at Object.callAsync (./node_modules/unctx/dist/index.mjs:42:19)  
  at callWithNuxt (./.nuxt/dist/server/server.mjs:436:23)  
  at applyPlugin (./.nuxt/dist/server/server.mjs:391:29)  
  at Module.applyPlugins (./.nuxt/dist/server/server.mjs:401:11)  
  at async createNuxtAppServer (./.nuxt/dist/server/server.mjs:46:7)
[nuxt] [request error] init is not a function
  at Module.useState (./.nuxt/dist/server/server.mjs:993:26)  
  at Module.useStrapiUser (./.nuxt/dist/server/server.mjs:3184:51)  
  at Module.useStrapiAuth (./.nuxt/dist/server/server.mjs:3053:38)  
  at ./.nuxt/dist/server/server.mjs:3020:47  
  at fn (./.nuxt/dist/server/server.mjs:434:27)  
  at Object.callAsync (./node_modules/unctx/dist/index.mjs:42:19)  
  at callWithNuxt (./.nuxt/dist/server/server.mjs:436:23)  
  at applyPlugin (./.nuxt/dist/server/server.mjs:391:29)  
  at Module.applyPlugins (./.nuxt/dist/server/server.mjs:401:11)  
  at processTicksAndRejections (node:internal/process/task_queues:96:5)
```
  
Running:

@nuxtjs/strapi: v1.5.0

nuxt: v3.0.0-rc.4

node: v16.16.0

Linux Pop_OS 20.04
