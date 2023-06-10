import React, { FC } from "react";
import { InputSearch } from "./input.styled";

export interface InputSearchProps {
  id?: string;
  placeholder?: string;
  style?: React.CSSProperties | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
}
export const SearchBox: FC<InputSearchProps> = ({
  id,
  placeholder,
  style,
  onChange,
  onKeyDown,
}) => (
  <InputSearch
    style={style}
    id={id}
    placeholder={placeholder}
    onChange={onChange}
    onKeyDown={onKeyDown}
  />
);

export default SearchBox;
