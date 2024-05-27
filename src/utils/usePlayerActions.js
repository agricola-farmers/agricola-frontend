import { useRecoilState } from 'recoil';
import { player1State } from '../utils/atoms';

export function usePlayerActions() {
  const [player1, setPlayer1] = useRecoilState(player1State);

  const allowedResources = ['wood', 'food'];

  const addResource = (type, amount) => {
    if (!allowedResources.includes(type)) {
      throw new Error(`Invalid resource: ${type}`);
    }
    setPlayer1((prev) => ({ ...prev, [type]: prev[type] + amount }));
  };

  const subtractResource = (type, amount) => {
    if (!allowedResources.includes(type)) {
      throw new Error(`Invalid resource type: ${type}`);
    }
    if (player1[type] < amount) {
      throw new Error(`Not enough ${type}`);
    }
    setPlayer1((prev) => ({ ...prev, [type]: prev[type] - amount }));
  };

  return {
    player1,
    addResource,
    subtractResource,
  };
}
