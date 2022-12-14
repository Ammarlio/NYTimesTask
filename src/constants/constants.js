const CONSTANTS = {
    REG_EXP: {
        EMAIL_REG: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        PHONE_REG: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
    },
    SCREENS: {
        HOME: 'Home',
        MORE_TAB: 'More_TAB',
        MORE: 'More',
        DETAILS: 'Details',
        NEWS: 'NEWS',
    }
}

export default CONSTANTS;