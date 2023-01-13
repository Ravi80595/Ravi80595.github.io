 import React, { useEffect, useState } from 'react';
// import { ArrowUpIcon,ArrowDownIcon } from '@chakra-ui/icons';
import { Box, Button } from '@chakra-ui/react';
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [bottom,setBottom]=useState(false)

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

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 1400) {
        setIsVisible(true);
      } else if(window.pageYOffset < 1000){
        setBottom(true)
      }else{
        setIsVisible(false);
        setBottom(false)
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      { bottom &&
      (
        <Box
          onClick={scrollToBottom}
          position='fixed'
          bottom='20px'
          left={['6px', '92vw']}
          zIndex={3}
          fontSize={['sm', 'md', 'lg', 'xl']}
          >
          
          <Button className='ArrowStyle'
            rightIcon={<IoIosArrowDown />}
            variant='solid'>
          </Button>
        </Box>
      )}
      { isVisible && 
      (
            <Box onClick={scrollToTop}
            position='fixed'
            top='70px'
            left={['10px', '92vw']}
            zIndex={3}>
            <Button className='ArrowStyle'
          size={'sm'}
          rightIcon={<IoIosArrowUp/>}
          colorScheme='whatsapp'
          variant='solid'>
          </Button>
      </Box>
              )}
    </>
  );
}