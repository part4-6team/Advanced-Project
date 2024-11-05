import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        tablet: '1024px',
      },
      borderRadius: {
        '40': '40px',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(#ff6f91, #fdfd53)', // brand.gradient 정의된 값
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        '5xl-semibold': ['48px', { lineHeight: '48px', fontWeight: '600' }],
        '4xl': ['40px', { lineHeight: '48px', fontWeight: '500' }],
        '4xl-semibold': ['40px', { lineHeight: '48px', fontWeight: '600' }],
        '3xl-bold': ['32px', { lineHeight: '38px', fontWeight: '700' }],
        '3xl-semibold': ['32px', { lineHeight: '38px', fontWeight: '600' }],
        '2xl-bold': ['24px', { lineHeight: '28px', fontWeight: '700' }],
        '2xl-semibold': ['24px', { lineHeight: '28px', fontWeight: '600' }],
        '2xl-medium': ['24px', { lineHeight: '28px', fontWeight: '500' }],
        '2xl-regular': ['24px', { lineHeight: '28px', fontWeight: '400' }],
        'xl-bold': ['20px', { lineHeight: '24px', fontWeight: '700' }],
        'xl-semibold': ['20px', { lineHeight: '24px', fontWeight: '600' }],
        'xl-medium': ['20px', { lineHeight: '24px', fontWeight: '500' }],
        'xl-regular': ['20px', { lineHeight: '24px', fontWeight: '400' }],
        '2lg-bold': ['18px', { lineHeight: '21px', fontWeight: '700' }],
        '2lg-semibold': ['18px', { lineHeight: '21px', fontWeight: '600' }],
        '2lg-medium': ['18px', { lineHeight: '21px', fontWeight: '500' }],
        '2lg-regular': ['18px', { lineHeight: '21px', fontWeight: '400' }],
        'lg-bold': ['16px', { lineHeight: '19px', fontWeight: '700' }],
        'lg-semibold': ['16px', { lineHeight: '19px', fontWeight: '600' }],
        'lg-medium': ['16px', { lineHeight: '19px', fontWeight: '500' }],
        'lg-regular': ['16px', { lineHeight: '19px', fontWeight: '400' }],
        'md-bold': ['14px', { lineHeight: '17px', fontWeight: '700' }],
        'md-semibold': ['14px', { lineHeight: '17px', fontWeight: '600' }],
        'md-medium': ['14px', { lineHeight: '17px', fontWeight: '500' }],
        'md-regular': ['14px', { lineHeight: '17px', fontWeight: '400' }],
        'sm-semibold': ['13px', { lineHeight: '16px', fontWeight: '600' }],
        'xs-semibold': ['12px', { lineHeight: '14px', fontWeight: '600' }],
        'xs-medium': ['12px', { lineHeight: '14px', fontWeight: '500' }],
        'xs-regular': ['12px', { lineHeight: '14px', fontWeight: '400' }],
      },
      colors: {
        brand: {
          primary: '#ff6f91',
          secondary: '#34D399',
          tertiary: '#fdfd53',
        },
        point: {
          purple: '#A855F7',
          blue: '#3B82F6',
          cyan: '#06B6D4',
          pink: '#EC4899',
          rose: '#F43F5E',
          orange: '#F97316',
          yellow: '#EAB308',
        },
        background: {
          primary: '#0F172A',
          secondary: '#1e1e1e',
          tertiary: '#121212',
          inverse: '#FFFFFF',
        },
        interaction: {
          inactive: '#94A3B8',
          hover: '#FF658C',
          pressed: '#FF3C6D',
          focus: '#10B981',
        },
        border: {
          primary: '#F8FAFC',
        },
        status: {
          danger: '#DC2626',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#CBD5E1',
          tertiary: '#E2E8F0',
          default: '#64748B',
          inverse: '#FFFFFF',
          disabled: '#94A3B8',
        },
        icon: {
          primary: '#64748B',
          inverse: '#F8FAFC',
          brand: '#10B981',
        },
      },
    },
  },
  plugins: [],
};
export default config;
