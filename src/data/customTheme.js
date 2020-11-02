import logo from 'lib/images/dibk-logo.svg';

const customTheme = {
  appName: 'Custom theme',
  logo,
  colors: {
    palette: {
      default: {
        background: "#EDEEF2",
        text: "rgba(0,0,0,.85)"
      },
      primary: {
        background: "rgba(17,193,176,.4)",
        text: "rgba(0,0,0,.65)"
      },
      warning: {
        background: "#D13C0A",
        text: "#fff"
      },
      cyan: {
        background: "#abd6ef",
        text: "rgba(0,0,0,.85)"
      }
    },
    navigationBar: {
      background: "#fff",
      text: "#323232"
    },
    text: "#333",
    link: "#CC3C10"
  }
}

export default customTheme;
