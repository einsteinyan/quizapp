const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    variants: {
        extend: {
            padding: ['group-hover'],
            translate: ['group-hover'],
            scale: ['group-hover'],
        }
    },
    theme: {
        boxShadow: {
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            'primary': '0px 2px 8px rgba(0,201,163,0.20)',
            'primary-md': '0 4px 6px -1px rgba(0,201,163,0.2), 0 2px 4px -1px rgba(0,201,163,0.1)',
            'primary-lg': '0 10px 15px -3px rgba(0,201,163,0.2), 0 4px 6px -2px rgba(0,201,163,0.1)',
            'primary-xl': '0 20px 25px -5px rgba(0,201,163,0.2), 0 10px 10px -5px rgba(0,201,163,0.1)'
        },
        fontFamily: {
            'primary': ['Montserrat', ...defaultTheme.fontFamily.sans]
        },
        colors: {
             'primary': {
                 light: '#C8FCEA',
                 DEFAULT: '#00C9A3',
                 dark: '#00B2A0'
             },
             'secondary': {
                 light: '#FF6B6B',
                 DEFAULT: '#D64550',
                 dark: '#A62639'
             },
             'accent': {
                 light: '#EDF7F6',
                 DEFAULT: '#C2F6ED',
                 dark: '#BBCBCB',
                 darker: '#BBCBCB',
             },
             'dark': {
                light: '#212738',
                DEFAULT: '#161718',
                dark: '#1F2125'
             },
             'grey': {
                 light: '#8C93A8',
                 DEFAULT: '#515764',
                 dark: '#3C434A'
             },
             'light': {
                light: '#FDFDFF',
                DEFAULT: '#F8F8FA',
                dark: '#E8EEF2'
             },
             ...defaultTheme.colors
        },
        cursor: {
            'ew-resize': 'ew-resize',
            ...defaultTheme.cursor
        },
        extent: {
        }
    }
}