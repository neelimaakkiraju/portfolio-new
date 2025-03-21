import NextImage from 'next/image'

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => (
  <NextImage {...rest} placeholder="blur" blurDataURL="/static/images/Avatar.png" />
)

export default Image
