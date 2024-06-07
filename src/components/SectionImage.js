import Image from 'next/image';
import PropTypes from 'prop-types';

export const SectionImage = ({ ratio, image, onClick, stone }) => {
  const alt = image.charAt(0).toUpperCase() + image.slice(1);

  return (
    <div style={{ position: 'relative', height: `${ratio}%` }} onClick={onClick}>
      <Image src={`/images/${image}.png`} alt={alt} fill sizes="15vw" />
      {stone && (
        <div style={{ position: 'absolute', top: '47%', right: '23%'}}>
          <Image
            src="/images/round_stone.svg"
            alt="stone"
            width={80}
            height={80}
          />
          <span
            style={{
              color: 'black',
              fontWeight: 'bold',
              position: 'absolute',
              top: '30%',
              left: '40%',
              fontSize: '2rem',
            }}
          >
            {stone}
          </span>
        </div>
      )}
    </div>
  );
};
