// components/SideBar.js
import Image from 'next/image';
import styles from '../styles/SideBar.module.css';
import { HelpManager } from './help_manager';
import { ScoreManager } from './score_manager';

export const SideBar = ({ ShowPrivate, nicknames, timer }) => {
  const { showHelp, toggleHelp, HelpModalComponent } = HelpManager();
  const { showScore, toggleScore, ScoreModalComponent } = ScoreManager();

  const playerImages = [
    "/private_board_images/red_player.svg",
    "/private_board_images/blue_player.svg",
    "/private_board_images/green_player.svg",
    "/private_board_images/orange_player.svg"
  ];

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
            onClick={() => ShowPrivate(name)}
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
                  backgroundColor: ['#DB9485', '#ABC7FF', '#D8F2C7', '#E7BF72'][
                    index % 4
                  ],
                  zIndex: 3,
                }}
              ><img
              src={playerImages[index % 4]}
              alt="player"
              className = {styles.playerImage}
              style={{zIndex: 4}}
            /></div>
              <div
                className={styles.rectangle}
                style={{
                  backgroundColor: ['#DB9485', '#ABC7FF', '#D8F2C7', '#E7BF72'][
                    index % 4
                  ],
                  zIndex: 1,
                }}
              >
                <div className={styles.userName}>{name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Timer */}
      <div className={styles.timer}>Time remaining: {timer}s</div>
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
