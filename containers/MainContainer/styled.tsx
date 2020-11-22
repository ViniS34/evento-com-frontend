import styled from 'styled-components';

export const PageMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.section`
  position: relative;
  width: 100%;
`;

export const BackgoundImage = styled.div`
  width: 100%;
  height: 800px;
  position: absolute;
  z-index: -1;
`;