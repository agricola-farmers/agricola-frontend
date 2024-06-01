import Image from 'next/image';

export const SectionImage = ({ ratio, image, onClick }) => {
  const alt = image.charAt(0).toUpperCase() + image.slice(1);

  return (
    <div style={{ position: 'relative', height: `${ratio}%` }} onClick={onClick}>
      <Image src={`/images/${image}.png`} alt={alt} fill sizes="15vw" />
    </div>
  );
};
