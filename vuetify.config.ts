// vuetify.config.ts
import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'
import {zhHans} from 'vuetify/locale'
import type { ThemeDefinition } from 'vuetify'
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone'

const staticPrimaryColor = '#8C57FF'
const staticPrimaryDarkenColor = '#7E4EE6'

const themes: Record<string, ThemeDefinition> = {
  light: {
    dark: false,
    colors: {
      'primary': staticPrimaryColor,
      'on-primary': '#fff',
      'primary-darken-1': '#7E4EE6',
      'secondary': '#8A8D93',
      'secondary-darken-1': '#7C7F84',
      'on-secondary': '#fff',
      'success': '#56CA00',
      'success-darken-1': '#4DB600',
      'on-success': '#fff',
      'info': '#16B1FF',
      'info-darken-1': '#149FE6',
      'on-info': '#fff',
      'warning': '#FFB400',
      'warning-darken-1': '#E6A200',
      'on-warning': '#fff',
      'error': '#FF4C51',
      'error-darken-1': '#E64449',
      'on-error': '#fff',
      'background': '#ffffff',
      'on-background': '#2E263D',
      'surface': '#fff',
      'on-surface': '#2E263D',
      'grey-50': '#FAFAFA',
      'grey-100': '#F5F5F5',
      'grey-200': '#EEEEEE',
      'grey-300': '#E0E0E0',
      'grey-400': '#BDBDBD',
      'grey-500': '#9E9E9E',
      'grey-600': '#757575',
      'grey-700': '#616161',
      'grey-800': '#424242',
      'grey-900': '#212121',
      'perfect-scrollbar-thumb': '#dbdade',
      'skin-bordered-background': '#fff',
      'skin-bordered-surface': '#fff',
      'expansion-panel-text-custom-bg': '#fafafa',
      'track-bg': '#F0F2F8',
      'chat-bg': '#F7F6FA',
    },

    variables: {
      'code-color': '#d400ff',
      'overlay-scrim-background': '#2E263D',
      'tooltip-background': '#1A0E33',
      'overlay-scrim-opacity': 0.5,
      'hover-opacity': 0.04,
      'focus-opacity': 0.1,
      'selected-opacity': 0.08,
      'activated-opacity': 0.16,
      'pressed-opacity': 0.14,
      'dragged-opacity': 0.1,
      'disabled-opacity': 0.4,
      'border-color': '#2E263D',
      'border-opacity': 0.12,
      'table-header-color': '#F6F7FB',
      'high-emphasis-opacity': 0.9,
      'medium-emphasis-opacity': 0.7,

      // 👉 shadows
      'shadow-key-umbra-color': '#2E263D',
      'shadow-xs-opacity': '0.16',
      'shadow-sm-opacity': '0.18',
      'shadow-md-opacity': '0.20',
      'shadow-lg-opacity': '0.22',
      'shadow-xl-opacity': '0.24',
    },
  },

  dark: {
    dark: true,
    colors: {
      'primary': staticPrimaryColor,
      'on-primary': '#fff',
      'primary-darken-1': '#7E4EE6',
      'secondary': '#8A8D93',
      'secondary-darken-1': '#7C7F84',
      'on-secondary': '#fff',
      'success': '#56CA00',
      'success-darken-1': '#4DB600',
      'on-success': '#fff',
      'info': '#16B1FF',
      'info-darken-1': '#149FE6',
      'on-info': '#fff',
      'warning': '#FFB400',
      'warning-darken-1': '#E6A200',
      'on-warning': '#fff',
      'error': '#FF4C51',
      'error-darken-1': '#E64449',
      'on-error': '#fff',
      'background': '#28243D',
      'on-background': '#E7E3FC',
      'surface': '#312d4b',
      'on-surface': '#E7E3FC',
      'grey-50': '#2A2E42',
      'grey-100': '#2F3349',
      'grey-200': '#4A5072',
      'grey-300': '#5E6692',
      'grey-400': '#7983BB',
      'grey-500': '#8692D0',
      'grey-600': '#AAB3DE',
      'grey-700': '#B6BEE3',
      'grey-800': '#CFD3EC',
      'grey-900': '#E7E9F6',
      'perfect-scrollbar-thumb': '#4a5072',
      'skin-bordered-background': '#312d4b',
      'skin-bordered-surface': '#312d4b',
      'expansion-panel-text-custom-bg': '#373350',
      'track-bg': '#474360',
      'chat-bg': '#373452',
    },

    variables: {
      'code-color': '#d400ff',
      'overlay-scrim-background': '#312D4B',
      'tooltip-background': '#F7F4FF',
      'overlay-scrim-opacity': 0.5,
      'hover-opacity': 0.04,
      'focus-opacity': 0.1,
      'selected-opacity': 0.08,
      'activated-opacity': 0.16,
      'pressed-opacity': 0.14,
      'disabled-opacity': 0.4,
      'dragged-opacity': 0.1,
      'border-color': '#E7E3FC',
      'border-opacity': 0.12,
      'table-header-color': '#3D3759',
      'high-emphasis-opacity': 0.9,
      'medium-emphasis-opacity': 0.7,

      // 👉 Shadows
      'shadow-key-umbra-color': '#131120',
      'shadow-xs-opacity': '0.20',
      'shadow-sm-opacity': '0.22',
      'shadow-md-opacity': '0.24',
      'shadow-lg-opacity': '0.26',
      'shadow-xl-opacity': '0.28',
    },
  },
}

const defaults = {
  IconBtn: {
    icon: true,
    color: 'default',
    variant: 'text',
  },
  VAlert: {
    VBtn: {
      color: undefined,
    },
  },
  VBadge: {
    // set v-badge default color to primary
    //color: 'primary',
  },
  VBtn: {
    // set v-btn default color to primary
    color: 'primary',
  },
  VChip: {
    elevation: 0,
  },
  VMenu: {
    offset: '2px',
  },
  VPagination: {
    density: 'comfortable',
    showFirstLastPage: true,
    variant: 'tonal',
  },
  VTabs: {
    // set v-tabs default color to primary
    color: 'primary',
    VSlideGroup: {
      showArrows: true,
    },
  },
  VTooltip: {
    // set v-tooltip default location to top
    location: 'top',
  },
  VCheckboxBtn: {
    color: 'primary',
  },
  VCheckbox: {
    // set v-checkbox default color to primary
    color: 'primary',
    density: 'comfortable',
    hideDetails: 'auto',
  },
  VRadioGroup: {
    color: 'primary',
    density: 'comfortable',
    hideDetails: 'auto',
  },
  VRadio: {
    density: 'comfortable',
    hideDetails: 'auto',
  },
  VSelect: {
    variant: 'outlined',
    color: 'primary',
    hideDetails: 'auto',
    density: 'comfortable',
    clearIcon: 'mdi-close',   
  },
  VRangeSlider: {
    // set v-range-slider default color to primary
    color: 'primary',
    thumbLabel: true,
    hideDetails: 'auto',
    trackSize: 6,
    thumbSize: 22,
    elevation: 4,
  },
  VRating: {
    // set v-rating default color to primary
    activeColor: 'warning',
    color: 'disabled',
  },
  VProgressCircular: {
    // set v-progress-circular default color to primary
    color: 'primary',
  },
  VProgressLinear: {
    color: 'primary',
  },
  VSlider: {
    // set v-slider default color to primary
    color: 'primary',
    trackSize: 6,
    hideDetails: 'auto',
    thumbSize: 22,
    elevation: 4,
  },
  VSnackbar: {
    VBtn: {
      size: 'small',
    },
  },
  VTextField: {
    variant: 'outlined',
    density: 'comfortable',
    color: 'primary',
    hideDetails: 'auto',
    clearIcon: 'mdi-close'
  },
  VAutocomplete: {
    variant: 'outlined',
    color: 'primary',
    density: 'comfortable',
    hideDetails: 'auto',    
    clearIcon: 'mdi-close'
  },
  VCombobox: {
    variant: 'outlined',
    color: 'primary',
    hideDetails: 'auto',
    density: 'comfortable',
  },
  VFileInput: {
    variant: 'outlined',
    color: 'primary',
    hideDetails: 'auto',
    density: 'comfortable',
  },
  VTextarea: {
    variant: 'outlined',
    color: 'primary',
    hideDetails: 'auto',
    density: 'comfortable',    
    clearIcon: 'mdi-close',
    rows:2
  },
  VSwitch: {
    // set v-switch default color to primary    
    color: 'primary',
    hideDetails: 'auto',
  },
  VNavigationDrawer: {
    touchless: true,
  },
  VDateInput:{
    variant: 'outlined',
    density: 'comfortable',
    color: 'primary',
    hideDetails: 'auto',
    clearable: true,
    clearIcon: 'mdi-close',
    placeholder: 'yyyy-MM-dd',
    prependIcon: '',
    prependInnerIcon: '$calendar'
  },
  VTreeview:{
    lines: 'one',
    border: true,
    openAll: true,
    rounded: true,
    activatable:true,
    mandatory:true,  
    indentLines:true,
  }
}

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Shanghai'); // 设置默认时区为北京

export default defineVuetifyConfiguration({    
  locale:{      
    locale: 'zhHans', 
    messages: {
      zhHans: {        
        ...zhHans,
        dataFooter: {
          ...zhHans.dataFooter,
          itemsPerPageText:'每页行数：',          
        },
        datePicker:{
          ...zhHans.datePicker,
          title:'选择日期',
          header:'输入日期'
        }        
      }
    },     
  },
  theme:{
    defaultTheme: 'light',
    themes,
  },
  defaults,   
})