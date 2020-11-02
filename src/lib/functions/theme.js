export const getThemePaletteBackgroundColor = (theme, color) => {
  return theme && theme.colors && theme.colors.palette && theme.colors.palette[color] && theme.colors.palette[color].background ? theme.colors.palette[color].background : null;
}

export const getThemePaletteTextColor = (theme, color) => {
  return theme && theme.colors && theme.colors.palette && theme.colors.palette[color] && theme.colors.palette[color].text ? theme.colors.palette[color].text : null;
}

export const getThemeNavigationBarBackgroundColor = theme => {
  return theme && theme.colors && theme.colors.navigationBar && theme.colors.navigationBar.background ? theme.colors.navigationBar.background : null;
}

export const getThemeNavigationBarTextColor = theme => {
  return theme && theme.colors && theme.colors.navigationBar && theme.colors.navigationBar.text ? theme.colors.navigationBar.text : null;
}

export const getThemeLogo = theme => {
  return theme && theme.logo ? theme.logo : null;
}

export const getThemeAppName = theme => {
  return theme && theme.appName ? theme.appName : null;
}
