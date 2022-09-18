import React from "react";
import { Text, Box, Flex, Heading } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
const EventCarousel = ({ slides }) => {
  return (
    <>
      <Box id="Details" py={10} bg={"blackAlpha.700"}>
        <Heading textAlign={"center"}>Event Details</Heading>
        <Carousel infiniteLoop autoPlay>
          {slides.map((slide) => {
            return (
              <Flex
                h={["100%", "80vh"]}
                alignContent={"center"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box px={4} py={4} margin={10}>
                  <Text align={"center"}>{slide.text}</Text>
                </Box>
              </Flex>
            );
          })}
        </Carousel>
      </Box>
    </>
  );
};

export default EventCarousel;
