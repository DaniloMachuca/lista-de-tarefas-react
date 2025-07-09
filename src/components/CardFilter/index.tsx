import * as S from './styles'

export type Props = {
  active?: boolean
}

const CardFilter = (props: Props) => (
  <S.Card active={props.active}>
    <S.Counter>3</S.Counter>
    <S.Label>Work in progress</S.Label>
  </S.Card>
)

export default CardFilter
