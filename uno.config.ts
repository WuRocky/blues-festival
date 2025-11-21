import {
  defineConfig,
  presetUno,
  presetIcons,
  presetAttributify,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      black: {
        default: '#0D0D0D',
        1: '#262626',
        2: '#404040',
        3: '#595959',
        4: '#A6A6A6',
      },
      light: {
        blue: {
          1: '#BBE8F2',
          2: '#94D7F2',
          3: '#5FB6D9',
          4: '#3D9DD9',
          5: '#2685BF',
        },
      },
      blue: {
        default: '#08298C',
        1: '#2469A6',
        2: '#184A8C',
        3: '#051A59',
        4: '#030C26',
      },
      red: {
        default: '#BF0F0F',
        1: '#F25C69',
        2: '#F23D3D',
        3: '#8C0808',
        4: '#590202',
      },
      orange: {
        default: '#F28705',
        1: '#F2CB05',
        2: '#F2B705',
        3: '#F29F05',
        4: '#D95204',
      },
      yellow: {
        default: '#D9B855',
        1: '#F2DEA0',
        2: '#D9B36C',
        3: '#A66617',
        4: '#734610',
      },
      green: {
        default: '#038C4C',
        1: '#02733E',
        2: '#01401C',
        3: '#012611',
        4: '#0D0D0D',
      },
      indigo: {
        default: '#101573',
        1: '#202D73',
        2: '#1D2173',
        3: '#1B208C',
        4: '#050840',
      },
      purple: {
        default: '#8760BF',
        1: '#CDC1D9',
        2: '#8B63A6',
        3: '#8760BF',
        4: '#513973',
      },
    },
  },
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
  ],
})
