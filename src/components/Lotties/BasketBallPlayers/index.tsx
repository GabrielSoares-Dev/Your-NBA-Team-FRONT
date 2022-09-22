import Lottie from 'react-lottie';
import BasketBallPlayers from '@assets/Lotties/BasketBallPlayers.json';

const BasketBallPlayersAnimation: React.FC = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: BasketBallPlayers,
    width: '10%',
  };

  return (
    <>
      <Lottie options={options} />
    </>
  );
};

export default BasketBallPlayersAnimation;
