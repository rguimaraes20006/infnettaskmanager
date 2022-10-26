import { styled, Input as MInput } from '@mui/material'

export { InputAdornment } from '@mui/material'
export { Search as SearchIcon } from '@mui/icons-material'
export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  column-gap: 20px;
  width: 100%;
  padding: 0 12px;
`
export const Search = styled('div')`
  width: 100%;
`
export const Input = styled(MInput)`
  width: 100%;
  height: 40px;
  padding-right: 8px;
  background-color: #ebebeb;
  border-radius: 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 35px;
  color: #9c9c9c;
  box-shadow: 2px 2px 23px 21px rgba(0, 0, 0, 0.05);

  .MuiInputAdornment-root {
    margin: 0 47px 0 20px;

    & svg {
      font-size: 40px;
      color: #333;
    }
  }
`
