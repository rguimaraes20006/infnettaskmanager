import { styled, Box as MBox } from '@mui/material'
import LogoSvg from '../../Assets/logo.svg'

export { Menu as IconMenu } from '@mui/icons-material'
export const Box = styled(MBox)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  padding: 12px;
  background-color: #02102b;
  color: #fff;
`
export const AppBar = styled('div')`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  height: 54px;
  margin-bottom: 20px;
  background-color: #02102b;
  box-shadow: none;
`
export const Menu = styled('div')`
  cursor: pointer;

  svg {
    width: 54px;
    height: 54px;
  }
`
export const Logo = styled('div')`
  &::before {
    content: '';
    display: flex;
    justify-content: center;
    align-items: center;
    width: 62px;
    height: 65px;
    background-image: url(${() => LogoSvg});
    background-position: center;
    background-size: contain;
  }
`
