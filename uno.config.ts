import {
  defineConfig,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetWind3 } from '@unocss/preset-wind3'

export default defineConfig({
  preflights: [],

  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons({
      scale: 1.1,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  theme: {
    colors: {
      black: {
        DEFAULT: '#000000',
        1: '#121212',
        2: '#1E1E1E',
        3: '#2C2C2C',
      },
      red: {
        DEFAULT: '#B23A48',
        1: '#8B1E3F',
        2: '#D1495B',
      },
      yellow: {
        DEFAULT: '#E9C46A',
        1: '#FFE066',
        2: '#F77F00',
        3: '#F4A261',
        4: '#FFD166',
        5: '#FFB703',
        6: '#E07A5F',
      },
      blue: {
        DEFAULT: '#264653',
        1: '#1B263B',
        2: '#1F3C88',
        3: '#2C2C54',
        4: '#3D5A80',
        5: '#4A90E2',
        6: '#0077B6',
        7: '#00B4D8',
        8: '#90E0EF',
        9: '#CAF0F8',
      },
      white: {
        DEFAULT: '#FFFFFF',
        1: '#F5F5F5',
        2: '#FAF3E0',
        3: '#FDF0D5',
        4: '#FFF8F0',
      },
      green: {
        DEFAULT: '#2A9D8F',
        1: '#264653',
        2: '#287271',
        3: '#43AA8B',
        4: '#90BE6D',
        5: '#B5E48C',
      },
      gray: {
        DEFAULT: '#6C757D',
        1: '#2B2D42',
        2: '#495057',
        3: '#ADB5BD',
        4: '#DEE2E6',
        5: '#F8F9FA',
      },
      brown: {
        DEFAULT: '#7D4F2F',
        1: '#BC6C25',
        2: '#B87333',
      },
      purple: {
        DEFAULT: '#8338EC',
        1: '#5A189A',
        2: '#9D4EDD',
        3: '#C77DFF',
      },
      orange: {
        DEFAULT: '#FB8500',
        1: '#FF6700',
        2: '#FF9E00',
      },
      pink: {
        DEFAULT: '#FF006E',
        1: '#D81159',
        2: '#FF4D6D',
        3: '#FFCCD5',
      },
      gold: {
        DEFAULT: '#FFD700',
        1: '#DAA520',
        2: '#C0A060',
      },
    },
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],

  shortcuts: {
    'btn-primary': 'px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition',
  },
})
