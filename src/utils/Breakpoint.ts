const sizes = {
  mobile: '425px',
  mobileL: '600px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',
  desktopL: '2560px'
}

const devices = {
  mobile: `@media (max-width: ${sizes.mobile})`,
  mobileL: `@media (max-width: ${sizes.mobileL})`,
  tablet: `@media (max-width: ${sizes.tablet})`,
  laptop: `@media (max-width: ${sizes.laptop})`,
  desktop: `@media (max-width: ${sizes.desktop})`,
  desktopL: `@media (max-width: ${sizes.desktopL})`
}

export default devices
