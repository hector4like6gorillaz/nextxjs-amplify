import localFont from 'next/font/local'

// One `localFont` call per family+weight+style combo, matching how the
// template already treats each combo as its own font-family token
// (BariolBold, AktivBoldItalic, ...) instead of weight variants of a
// shared family. `variable` names are Next's own internal vars — kept
// distinct from the `--font-*` theme tokens in app/styles/theme.font.css,
// which reference these via var() to avoid colliding with them.

export const bariolBold = localFont({
  src: './bariol/bariol_bold-webfont.ttf',
  weight: '700',
  variable: '--font-bariol-bold',
  display: 'swap',
})

export const bariolRegular = localFont({
  src: './bariol/bariol_regular-webfont.ttf',
  weight: '400',
  variable: '--font-bariol-regular',
  display: 'swap',
})

export const aktivBold = localFont({
  src: './aktiv-grotesk/AktivGrotesk_Bd.ttf',
  weight: '700',
  style: 'normal',
  variable: '--font-aktiv-bold',
  display: 'swap',
})

export const aktivBoldItalic = localFont({
  src: './aktiv-grotesk/AktivGrotesk_BdIt.ttf',
  weight: '700',
  style: 'italic',
  variable: '--font-aktiv-bold-italic',
  display: 'swap',
})

export const aktivItalic = localFont({
  src: './aktiv-grotesk/AktivGrotesk_It.ttf',
  weight: '400',
  style: 'italic',
  variable: '--font-aktiv-italic',
  display: 'swap',
})

export const aktivRegular = localFont({
  src: './aktiv-grotesk/AktivGrotesk_Rg.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-aktiv-regular',
  display: 'swap',
})

export const templateFontVariables = [
  bariolBold.variable,
  bariolRegular.variable,
  aktivBold.variable,
  aktivBoldItalic.variable,
  aktivItalic.variable,
  aktivRegular.variable,
].join(' ')
