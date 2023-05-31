import { createPortal } from 'react-dom';
import { ThreeCircles } from 'react-loader-spinner';
import {
  LoaderBасkdrор,
  LoaderConatiner,
  LoaderText,
  LoaderWrapper,
} from './Loader.style';

const loader = document.querySelector('#loader-root');

const Loader = () => {
  if (!loader) {
    return loader;
  }
  return createPortal(
    <LoaderBасkdrор>
      <LoaderConatiner>
        <LoaderWrapper>
          <LoaderText>Загружается</LoaderText>
          <ThreeCircles
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor="red"
            innerCircleColor="green"
            middleCircleColor="blue"
          />
        </LoaderWrapper>
      </LoaderConatiner>
    </LoaderBасkdrор>,
    loader
  );
};
export default Loader;
