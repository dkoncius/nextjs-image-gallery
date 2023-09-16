import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface NavbarProps {
  filteredImages: any[]; // Adjust this type based on your actual data type.
  index: number;
  changePhotoId: (id: number) => void;
}

const BottomNavbar: React.FC<NavbarProps> = ({ filteredImages, index, changePhotoId }) => {
  return (
    <motion.div initial={false} className="mx-auto mt-6 mb-6 flex aspect-[3/2] h-14">
      <AnimatePresence initial={false}>
      {filteredImages.map(({ public_id, format, id }) => (
                    <motion.button
                      initial={{
                        width: '0%',
                        x: `${Math.max((index - 1) * -100, 15 * -100)}%`,
                      }}
                      animate={{
                        scale: id === index ? 1.25 : 1,
                        width: '100%',
                        x: `${Math.max(index * -100, 15 * -100)}%`,
                      }}
                      exit={{ width: '0%' }}
                      onClick={() => changePhotoId(id)}
                      key={id}
                      className={`${
                        id === index
                          ? 'z-20 rounded-md shadow shadow-black/50'
                          : 'z-10'
                      } ${id === 0 ? 'rounded-l-md' : ''} ${
                        id === filteredImages.length - 1 ? 'rounded-r-md' : ''
                      } relative inline-block w-full shrink-0 transform-gpu overflow-hidden focus:outline-none`}
                    >
                      <Image
                        alt="small photos on the bottom"
                        width={180}
                        height={120}
                        className={`${
                          id === index
                            ? 'brightness-110 hover:brightness-110'
                            : 'brightness-50 contrast-125 hover:brightness-75'
                        } h-full transform object-cover transition`}
                        src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_180/${public_id}.${format}`}
                      />
                    </motion.button>
                  ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default BottomNavbar;
