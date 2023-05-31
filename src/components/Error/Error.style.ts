import styled from 'styled-components';

export const SectionError = styled.section`
  position: relative;
`;

export const ContainerError = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
export const WrapperError = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SvgWrapper = styled.div`
  max-width: 260px;
  max-height: 260px;
`;
export const SvgError = styled.svg`
  max-width: 260px;
  max-height: 260px;
`;
export const TitleTextFirst = styled.span`
  font-size: 36px;
  margin-right: 12px;
`;
export const TitleTextLast = styled.span`
  font-size: 30px;
`;
