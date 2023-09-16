// CloseButton.tsx

import React from 'react';
import { XIcon, ArrowLeftIcon } from '@heroicons/react/outline';


interface CloseButtonProps {
  closeModal: () => void;
  navigation: boolean;
}

const CloseButton: React.FC<CloseButtonProps> = ({ closeModal, navigation }) => {
  return (
    <div className="absolute top-0 left-0 flex items-center gap-2 p-3 text-white">
      <button
        onClick={() => closeModal()}
        className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
      >
        {navigation ? (
          <XIcon className="h-5 w-5" />
        ) : (
          <ArrowLeftIcon className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}

export default CloseButton;
