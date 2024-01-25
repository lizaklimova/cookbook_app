import { Triangle } from 'react-loader-spinner';

const SmallSpinner = () => {
  return (
    <Triangle
      visible={true}
      height="30"
      width="30"
      color="#fff"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default SmallSpinner;
