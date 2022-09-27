import React from "react";
import { Text, Box, Flex, Heading } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
const EventCarousel = ({ slides }) => {
  return (
    <>
      <Box id="Details" py={20} bg={"blackAlpha.900"}>
        <Heading textAlign={"center"}>Event Details</Heading>
        <Carousel infiniteLoop  showThumbs={"false"}>
          {slides.map((slide) => {
            return (
              <Flex
                h={["100%", "80vh"]}
                alignContent={"center"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box px={4} py={4} margin={10} w={"85%"}>
                  <Heading color="rgb(141 18 18)" pb={8}>{slide.heading}</Heading>
                  <Text fontSize="17px" align={"left"} style={{whiteSpace: "pre-line"}} pl={2} pr={"auto"}>{slide.text}</Text>
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
