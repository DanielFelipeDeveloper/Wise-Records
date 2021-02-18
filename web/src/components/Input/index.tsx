import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Content, Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [inputNoFilled, setInputNoFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);

    setInputNoFilled(!inputRef.current?.value);
  }, []);

  const onChangeHandler = useCallback(() => {
    setInputNoFilled(false);
  }, []);

  let inputError;

  if (inputNoFilled && inputRef.current?.name === 'email') {
    inputError = <span>Por favor insira seu Email.</span>;
  } else if (inputNoFilled && inputRef.current?.name === 'name') {
    inputError = <span>Por favor insira seu Nome.</span>;
  } else if (inputNoFilled && inputRef.current?.type === 'password') {
    inputError = <span>Por favor insira sua senha.</span>;
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <>
      <Content>
        <Container
          isFilled={isFilled}
          isFocused={isFocused}
          inputNoFilled={inputNoFilled}
        >
          {Icon && <Icon size={20} />}
          <input
            name={name}
            autoComplete="off"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={onChangeHandler}
            ref={inputRef}
            defaultValue={defaultValue}
            {...rest}
          />
        </Container>
        {inputError}
        {error && <span>{error}</span>}
      </Content>
    </>
  );
};

export default Input;
