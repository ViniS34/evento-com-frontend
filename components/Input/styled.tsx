import styled from 'styled-components';

export const InputBlock = styled.div`
  position: relative;

  :focus-within:after,
  :hover:after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.6rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border: 1px solid ${({ theme }) => theme.colors.lineWhite};
  padding: 0 1.6rem;
  ${({ theme }) => theme.elevation[0]};
`;

export const StyledInput = styled.input`
  color: ${({ theme }) => theme.colors.complementText};
  background-color: transparent;
  border: none;
  outline: 0;
  font: ${({ theme }) => theme.fonts.regular};

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Adorment = styled.div`
  width: 24px;
  height: 24px;
`;