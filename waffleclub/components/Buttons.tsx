import styled from "styled-components";

export const Button = ({primary = true,  label = "", ...props}) => (
  <CustomButton {...props} className={primary?'primary':'secondary'} >
    {label}
  </CustomButton>
)
const CustomButton = styled.button`

  padding: 12px 16px;
  border-radius: 20px;
  font-weight: bold;
  &.primary{  color: #B8202E;
    background: #f5d8ad;}
  &.secondary{
    background: #B8202E;
    color: #f5d8ad;
  }
`
