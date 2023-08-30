import { Handbag } from 'phosphor-react'
import * as S from './styles'
import { ComponentProps } from 'react'

type ICartBuuttonProps = ComponentProps<typeof S.CartButtonContainer> & {
  quantity?: number
}

export function CartButton({ quantity = 0, ...props }: ICartBuuttonProps) {
  return (
    <S.CartButtonContainer {...props}>
      {quantity > 0 && <span>{quantity}</span>}
      <Handbag weight="bold" />
    </S.CartButtonContainer>
  )
}
