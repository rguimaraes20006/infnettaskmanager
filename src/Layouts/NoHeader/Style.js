import { styled, Box as MBox } from '@mui/material'
import LogoSvg from '../../Assets/logo.svg'

export const Box = styled(MBox)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 45px 32px 0 30px;
`
export const Logo = styled('div')`
  &::before {
    content: '';
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    background-image: url(${() => LogoSvg});
  }
`
