// import React, { useEffect, useState } from 'react';
import { ArrowUpIcon,ArrowDownIcon } from '@chakra-ui/icons';
import { Box, Button } from '@chakra-ui/react';

export default function ScrollToTop() {
//   const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottom=()=>{
    window.scrollTo({
        top:20000,
        behavior:'smooth'
    });
  };

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.pageYOffset > 1400) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener('scroll', toggleVisibility);

//     return () => window.removeEventListener('scroll', toggleVisibility);
//   }, []);

  return (
    <>
      { (
        <Box
          onClick={scrollToBottom}
          position='fixed'
          bottom='20px'
          left={['6px', '20px']}
          zIndex={3}
          fontSize={['sm', 'md', 'lg', 'xl']}
          >
          
          <Button className='ArrowStyle'
            rightIcon={<ArrowDownIcon />}
            variant='solid'>
          </Button>
        </Box>
      )}
      { (
            <Box onClick={scrollToTop}
            position='fixed'
            top='70px'
            left={['10px', '20px']}
            zIndex={3}>
            <Button className='ArrowStyle'
          size={'sm'}
          rightIcon={<ArrowUpIcon />}
          colorScheme='whatsapp'
          variant='solid'>
          </Button>
      </Box>
              )}
    </>
  );
}