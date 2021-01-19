import * as S from './styled'

type Props = {
  imageUrl: string
}

const Hero: React.FC<Props> = ({ imageUrl, children }) => {
  return <S.Hero backgroundImage={imageUrl}>{children}</S.Hero>
}

export default Hero
