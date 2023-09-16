import Image from 'next/image';
import React from 'react';

interface MainImageProps {
  currentImage: {
    public_id: string;
    format: string;
  };  // Adjust this type according to your needs
  index: number;
  direction: any;  // Replace with the type you have for direction
  navigation: boolean;
  setLoaded: (state: boolean) => void;  // Added this prop for the loading state
}

const MainImage: React.FC<MainImageProps> = ({ currentImage, index, direction, navigation, setLoaded }) => {
  return (
    <Image
      src={`https://res.cloudinary.com/${
        process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
      }/image/upload/c_scale,${navigation ? 'w_1280' : 'w_1920'}/${
        currentImage.public_id
      }.${currentImage.format}`}
      width={navigation ? 1280 : 1920}
      height={navigation ? 853 : 1280}
      priority
      alt="Next.js Conf image"
      onLoadingComplete={() => setLoaded(true)}
    />
  );
};

export default MainImage;
