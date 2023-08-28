import { FidgetSpinner } from 'react-loader-spinner';
const Loader = () => {
  return (
    <FidgetSpinner
      visible={true}
      height="100"
      width="100"
      ariaLabel="dna-loading"
      wrapperStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
      wrapperClass="dna-wrapper"
      ballColors={['#ffff00', '#ffff00', '#ffff00']}
      backgroundColor="#0000ff"
    />
  );
};

export default Loader;
