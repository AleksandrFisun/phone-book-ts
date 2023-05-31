import NotFoundSvg from './NotFoundSvg';
import {
  SectionError,
  WrapperError,
  ContainerError,
  TitleTextFirst,
  TitleTextLast,
} from './Error.style'
const Error:React.FC = () => {
  return (
    <SectionError>
      <ContainerError>
        <WrapperError>
          <NotFoundSvg />
          <h2>
            <TitleTextFirst>404</TitleTextFirst>
            <TitleTextLast>Page not found</TitleTextLast>
          </h2>
        </WrapperError>
      </ContainerError>
    </SectionError>
  );
};
export default Error;
