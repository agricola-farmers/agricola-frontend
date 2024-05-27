import { useRecoilState, useRecoilValue } from 'recoil';
import { player1State } from '../utils/atoms';

const ResourceManagement = () => {
  const [player1, setPlayer1] = useRecoilState(player1State);

  return (
    <div>
      <div>Player 1 Resources</div>
      <div>Wood: {player1.wood}</div>
    </div>
  );
};

export default ResourceManagement;
