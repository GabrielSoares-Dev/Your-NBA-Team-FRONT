import Lottie from 'react-lottie';
import BasketBallPlayers from '@assets/Lotties/BasketBallPlayers.json';

const BasketBallPlayersAnimation: React.FC = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: BasketBallPlayers,
  };

  return (
    <>
      <Lottie options={options} width="300px" />
    </>
  );
};

export default BasketBallPlayersAnimation;
