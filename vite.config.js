import { defineConfig } from 'vite'

// Relative base so the build works when deployed in a subfolder (not the domain root).
export default defineConfig({
  base: './',
})
