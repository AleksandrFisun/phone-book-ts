import { ColorRing } from 'react-loader-spinner';
// const SpinnerSmall = () => {
//   return (
//     <>
//       <ColorRing
//         visible={true}
//         height="12"
//         width="12"
//         ariaLabel="blocks-loading"
//         wrapperStyle={{}}
//         wrapperClass="blocks-wrapper"
//         colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
//       />
//     </>
//   );
// };
const SpinnerBig = () => {
  return (
    <>
      <ColorRing
        visible={true}
        height="30"
        width="30"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </>
  );
};
export default SpinnerBig;
