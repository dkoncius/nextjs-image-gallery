// NavigationButtons.tsx

import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

interface NavigationButtonsProps {
  index: number;
  imagesLength: number;
  changePhotoId: (newIndex: number) => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ index, imagesLength, changePhotoId }) => {
  return (
    <>
      {index > 0 && (
        <button
          className="absolute left-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
          style={{ transform: 'translate3d(0, 0, 0)' }}
          onClick={() => changePhotoId(index - 1)}
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
      )}
      {index + 1 < imagesLength && (
        <button
          className="absolute right-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
          style={{ transform: 'translate3d(0, 0, 0)' }}
          onClick={() => changePhotoId(index + 1)}
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      )}
    </>
  );
}

export default NavigationButtons;
