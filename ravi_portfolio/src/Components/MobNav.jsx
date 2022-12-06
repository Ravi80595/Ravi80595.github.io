// import styles from "./Nav.module.css"
import {HamburgerIcon} from "@chakra-ui/icons"
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Button,
    DrawerCloseButton,
    Image,
    Tabs,
    TabList,
    Tab,
    Text,
    Flex,
    Box
  } from '@chakra-ui/react'
import Logo from "../Images/Logo.webp"

const MobNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex justifyContent="space-between" alignItems="center" backgroundColor='black'>
      <Button p="8px" color="white" bg="black" onClick={onOpen} >
        <HamburgerIcon  w="30px" h="30px" />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}  size="full">
        <DrawerOverlay />
        <DrawerContent>
        {/* <Image w="50px" src={Logo} backgroundColor='black'/> */}
        <DrawerCloseButton pl='90%' backgroundColor='black' color='white' pt='20px'/>
          <DrawerBody className="drawer-box">
            <Flex mt="5px" m='20px' gap="20px" direction="column" >
                <Text>Home</Text>
                <Text>About Me</Text>
                <Text>Projects</Text>
                <Text>Skills</Text>
                <Text>Contact</Text>
            </Flex>
            {/* <Text mt="15px">MY ACCOUNT</Text> */}
            <Flex direction="column">
                {/* <MobLogin name="Sign In" />  */}
                 {/* <MobLogin name="Register" /> */}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box>
        {/* <Text fontSize="24px" fontWeight="bold" color='white'>Ravi Sharma</Text> */}
      </Box>
      {/* <Flex gap="10px" mr="10px">
        <IoIosHeartEmpty className={styles.logo} />
        <BsBag className={styles.logo} />
      </Flex> */}
    </Flex>
  );
};

export default MobNav;
// Footer