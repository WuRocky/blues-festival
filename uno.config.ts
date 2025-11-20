import {
  defineConfig,
  presetUno,
  presetIcons,
  presetAttributify
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify()
  ],
  theme: {
    colors: {
      blues: {
        50:  '#f0f6ff',
        100: '#dceaff',
        200: '#b4d4ff',
        300: '#82b8ff',
        400: '#4a94ff',
        500: '#1f6dff',
        600: '#1955cc',
        700: '#1240a1',
        800: '#0c2e78',
        900: '#081f55'
      }
    }
  }
})
