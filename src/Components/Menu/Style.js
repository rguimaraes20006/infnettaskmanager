import { styled, Drawer as MDrawer } from '@mui/material'

export { Close } from '@mui/icons-material'
export const Drawer = styled(MDrawer)`
  .MuiPaper-root {
    width: 80vw;
    padding: 20px;
    background-color: #ddd;
  }
`
export const Title = styled('div')`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  margin-bottom: 8px;
  border-bottom: 1px solid #02102b;
  font-weight: 600;
  text-transform: uppercase;
`
export const Option = styled('div')`
  padding: 4px 0;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
`
