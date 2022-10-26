import { styled, Backdrop as MBackdrop } from '@mui/material'
import LogoSvg from '../../Assets/logo.svg'

export const Overlay = styled(MBackdrop)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #adadad;
  border-radius: 23px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #272727;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1500;
`
export const Logo = styled('div')`
  margin-bottom: 20px;

  &::before {
    content: '';
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    background-image: url(${() => LogoSvg});
    background-position: center;
    background-size: contain;
  }
`
