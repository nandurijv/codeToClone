import React from "react";
import { Text, Box, Flex } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const EventCarousel = ({ slides }) => {
  return (
    <>
      <Carousel infiniteLoop>
        {slides.map((slide) => {
          return (
            <Flex h={["100%", "80vh"]} alignContent={"center"} justifyContent={"center"} alignItems={"center"}>
              <Box px={4} py={4} margin={10}>
                <Text align={"center"}>{slide.text}</Text>
              </Box>
            </Flex>
          );
        })}
      </Carousel>
    </>
  );
};

export default EventCarousel;
