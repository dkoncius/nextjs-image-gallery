import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { variants } from '../utils/animationVariants'
import downloadPhoto from '../utils/downloadPhoto'
import { range } from '../utils/range'
import type { ImageProps, SharedModalProps } from '../utils/types'


// import your new components
import MainImage from './MainImage';
import NavigationButtons from './NavigationButtons';
import DownloadButton from './ShareButtons';  // Adjust paths as necessary
import CloseButton from './CloseButton';
import BottomNavbar from './BottomNavbar';

export default function SharedModal({
  index,
  images,
  changePhotoId,
  closeModal,
  navigation,
  currentPhoto,
  direction,
}: SharedModalProps) {
  const [loaded, setLoaded] = useState(false)

  let filteredImages = images?.filter((img: ImageProps) =>
    range(index - 15, index + 15).includes(img.id)
  )

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (index < images?.length - 1) {
        changePhotoId(index + 1)
      }
    },
    onSwipedRight: () => {
      if (index > 0) {
        changePhotoId(index - 1)
      }
    },
    trackMouse: true,
  })

  let currentImage = images ? images[index] : currentPhoto

  return (
    <MotionConfig
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <div
        className="relative z-50 flex aspect-[3/2] w-full max-w-7xl items-center wide:h-full xl:taller-than-854:h-auto"
        {...handlers}
      >
        {/* Main image */}
        <div className="w-full overflow-hidden">
          <div className="relative flex aspect-[3/2] items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute"
              >
             <MainImage 
                currentImage={currentImage}
                index={index}
                direction={direction}
                navigation={navigation}
                setLoaded={setLoaded}  // Pass the function here
              />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Buttons + bottom nav bar */}
        <div className="absolute inset-0 mx-auto flex max-w-7xl items-center justify-center">
          {/* Buttons */}
          {loaded && (
            <div className="relative aspect-[3/2] max-h-full w-full">
              {navigation && <NavigationButtons index={index} imagesLength={images?.length} changePhotoId={changePhotoId} />}

              <DownloadButton currentImage={currentImage} index={index} downloadPhoto={downloadPhoto} navigation={navigation} />
              <CloseButton closeModal={closeModal} navigation={navigation} />
            </div>
          )}
          {/* Bottom Nav bar */}
          {navigation && (
            <div className="fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-gradient-to-b from-black/0 to-black/60">
              <motion.div
                initial={false}
                className="mx-auto mt-6 mb-6 flex aspect-[3/2] h-14"
              >
                <AnimatePresence initial={false}>
                  <BottomNavbar filteredImages={filteredImages} index={index} changePhotoId={changePhotoId} />
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </MotionConfig>
  )
}
