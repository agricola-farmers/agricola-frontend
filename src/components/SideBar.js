import Image from 'next/image';
import styles from '../styles/SideBar.module.css';
import { HelpManager } from './help_manager';
import { ScoreManager } from './score_manager';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { harvestState } from '@/utils/atoms';

export const SideBar = ({
  ShowPrivate,
  nicknames,
  timer,
  currentTurn,
  onEndTurn,
}) => {
  const { showHelp, toggleHelp, HelpModalComponent } = HelpManager();
  const { showScore, toggleScore, ScoreModalComponent } = ScoreManager();
  const router = useRouter();
  const { playerIndex } = router.query;
  const [harvest, setHarvest] = useRecoilState(harvestState);

  const playerImages = [
    '/private_board_images/orange_player.svg',
    '/private_board_images/red_player.svg',
    '/private_board_images/green_player.svg',
    '/private_board_images/blue_player.svg',
  ];

  const playerColors = ['#EA7B30', '#98312D', '#04741B', '#121E54'];

  return (
    <div className={styles.container}>
      {/* Logo */}
      <div className={styles.logo}>
        <Image src="/images/logo.png" alt="Logo" fill sizes="15vw" />
      </div>
      {/* Player */}
      <div className={styles.player}>
        {nicknames.map((name, index) => (
          <div
            key={index}
            className={styles.playerContainer}
            onClick={() => ShowPrivate(name, false)}
          >
            <Image
              src="/images/name_background.png"
              alt={`player${index + 1}`}
              fill
            />
            <div className={styles.privateContainer}>
              <div
                className={styles.circle}
                style={{
                  backgroundColor: ['#E7BF72', '#DB9485', '#D8F2C7', '#ABC7FF'][
                    index % 4
                  ],
                  zIndex: 2,
                }}
              >
                <img
                  src={playerImages[index % 4]}
                  alt="player"
                  className={styles.playerImage}
                />
              </div>
              <div
                className={styles.rectangle}
                style={{
                  backgroundColor: ['#E7BF72', '#DB9485', '#D8F2C7', '#ABC7FF'][
                    index % 4
                  ],
                  zIndex: 1,
                }}
              >
                <div
                  className={styles.userName}
                  style={{
                    zIndex: 5,
                  }}
                >
                  {name}
                </div>
                {currentTurn === index && (
                  <div className={styles.myTurnIcon}>
                    <img src="/images/myturn.svg" alt="My Turn" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Timer */}
      <div className={styles.timerContainer}>
        <div className={styles.timerInnerContainer}>
          <div className={styles.timerContent}>
            <div style={{ width: '50%' }}>
              <img
                src="/images/hourglass.svg"
                alt="Hourglass"
                className={styles.hourglass}
              />
              {(harvest.isHarvest ||
                playerIndex === currentTurn.toString()) && (
                <button className={styles.endTurnButton} onClick={onEndTurn}>
                  턴 종료
                </button>
              )}
            </div>
            <div className={styles.textSection}>
              <div
                className={styles.playerTurn}
                style={{
                  color: harvest.isHarvest
                    ? '#71B743'
                    : playerColors[currentTurn % 4],
                }}
              >
                {harvest.isHarvest ? '수확 단계' : nicknames[currentTurn]}
              </div>
              <div className={styles.gameStatus}>
                {harvest.isHarvest ? `${harvest.harvestType}` : '게임 진행 중'}
              </div>
              <div className={styles.timer}>
                {harvest.harvestType === '종료' ? '' : timer}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Help & Score */}
      <div className={styles.gameInfo}>
        <div style={{ width: '50%', position: 'relative' }}>
          <div onClick={toggleHelp} style={{ cursor: 'pointer' }}>
            <Image src="/images/help.png" alt="Help" fill />
          </div>
          {HelpModalComponent()}
        </div>
        <div style={{ width: '50%', position: 'relative' }}>
          <div onClick={toggleScore} style={{ cursor: 'pointer' }}>
            <Image src="/images/score.png" alt="Score" fill />
          </div>
          {ScoreModalComponent()}
        </div>
      </div>
    </div>
  );
};
