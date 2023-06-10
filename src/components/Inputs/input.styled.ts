import { styled } from "@mui/material";

export const InputSearch = styled("input")`
  position: flex;
  width: 100%;
  max-width: 600px;
  height: 55px;
  font-size: 16px;
  border: 1px solid #f1ebeb;
  box-sizing: border-box;
  background: #efefef;
  border-radius: 57.1315px;
  color: black;
  font-family: "Poppins";
  background: ${`url('/images/ic-search.svg')`}no-repeat scroll 12px 14px;
  padding-left: 40px;
  background-color: #f2f2f2;
  &:focus {
    outline: none !important;
    border-color: #767676;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #767676;
  }
  :-ms-input-placeholder {
    color: #767676;
  }
`;
