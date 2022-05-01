import React from "react";
import { Drawer,Image, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent,
  DrawerCloseButton, Flex, Text
} from "@chakra-ui/react";
export default function DrawerExample({

  placement = "right",
  width,
  isOpen,
  children,
  onClose,
  btnRef,
  title = "Menu",
  footer,
}) {
  const p = 15;
  return (
    <Flex w={width} display={{ base: "flex", md: "none" }}>
      <Drawer
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent alignItems="center">
          <DrawerCloseButton alignSelf="end" mx={p} my={p} />
          <DrawerHeader my={p}>
            {/*<Text as="p"> {title} </Text>*/}
            <Image  src={`${process.env.PUBLIC_URL}/logo.jpg`} h="50px" />
        
          </DrawerHeader>
          <DrawerBody>{children}</DrawerBody>
          <DrawerFooter>{footer}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}