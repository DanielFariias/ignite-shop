import { Handbag } from 'phosphor-react'
import * as S from './styles'
import { ComponentProps } from 'react'

type ICartBuuttonProps = ComponentProps<typeof S.CartButtonContainer>
export function CartButton({ ...props }: ICartBuuttonProps) {
  return (
    <S.CartButtonContainer {...props}>
      <Handbag weight="bold" />
    </S.CartButtonContainer>
  )
}
