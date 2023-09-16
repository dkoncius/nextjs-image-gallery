import React from 'react';
import { ArrowNarrowUpIcon, DownloadIcon } from '@heroicons/react/outline';
import Twitter from '../Icons/Twitter'
import Facebook from '../Icons/Facebook'

interface ControlButtonsProps {
  currentImage: any; // Type accordingly
  index: number;
  downloadPhoto: (url: string, name: string) => void;
  navigation: boolean;
}

const DownloadButton: React.FC<ControlButtonsProps> = ({ currentImage, index, downloadPhoto, navigation }) => {
  const cloudinaryImageUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${currentImage.public_id}.${currentImage.format}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=Check%20out%20this%20pic!%0A%0Ahttps://nextjs-image-gallery-phi.vercel.app/p/${index}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=https://nextjs-image-gallery-phi.vercel.app/p/${index}`;

  return (
    <div className="absolute top-0 right-0 flex items-center gap-2 p-3 text-white">
      {navigation && (
        <a
          href={cloudinaryImageUrl}
          className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
          target="_blank"
          title="Open fullsize version"
          rel="noreferrer"
        >
          <ArrowNarrowUpIcon className="h-5 w-5" />
        </a>
      )}
      <a
        href={twitterShareUrl}
        className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
        target="_blank"
        title="Share on Twitter"
        rel="noreferrer"
      >
        <Twitter className="h-5 w-5" />
      </a>
      <a
        href={facebookShareUrl}
        className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
        target="_blank"
        title="Share on Facebook"
        rel="noreferrer"
      >
        <Facebook className="h-5 w-5" /> 
      </a>
      <button
        onClick={() => downloadPhoto(cloudinaryImageUrl, `${index}.jpg`)}
        className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
        title="Download fullsize version"
      >
        <DownloadIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default DownloadButton;
