import Image from 'next/image';

export const SectionImage = ({ ratio, image }) => {
  const alt = image.charAt(0).toUpperCase() + image.slice(1);

  return (
    <div style={{ position: 'relative', height: `${ratio}%` }}>
      <Image src={`/images/${image}.png`} alt={alt} fill sizes="15vw" />
    </div>
  );
};
