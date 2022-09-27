import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  useMediaQuery,
  Heading,
} from "@chakra-ui/react";
function FAQs() {
  return (
    <>
      <Flex
        id="FAQs"
        width={"100%"}
        h={["100%", "100vh"]}
        px={4}
        py={20}
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"center"}
        bg={"blackAlpha.900"}
      >
        <Heading size="2xl">FAQs</Heading>
        <Accordion allowToggle width={"100vw"} ml={"10%"} mr={"10%"} mt={7}>
          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{ bg: "tomato", color: "white" }}
                py={3}
              >
                <Box flex="1" textAlign="left" fontSize="xl">
                  What is the venue and what facilities will be provided there?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="lg">
              The event shall be held in a Smart Class or Auditorium. Wi-Fi
              connectivity and charging ports shall be available.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{ bg: "tomato", color: "white" }}
                py={3}
              >
                <Box flex="1" textAlign="left" fontSize="xl">
                  Do we have to install any software?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="lg">
              No, the event shall be held online on our portal.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{ bg: "tomato", color: "white" }}
                py={3}
              >
                <Box flex="1" textAlign="left" fontSize="xl">
                  Can external IDEs and internet be used?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="lg">
              Yes, any IDE can be used, but the final submission has to be on
              our portal. You will be also allowed to refer to resources
              available on the internet.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{ bg: "tomato", color: "white" }}
                py={3}
              >
                <Box flex="1" textAlign="left" fontSize="xl">
                  Can CSS frameworks be used?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="lg">
              No, frameworks are strictly not allowed.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{ bg: "tomato", color: "white" }}
                py={3}
              >
                <Box flex="1" textAlign="left" fontSize="xl">
                  Will be the solutions to the questions be revealed?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="lg">
              Yes, all the solutions will be released on our Medium.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{ bg: "tomato", color: "white" }}
                py={3}
              >
                <Box flex="1" textAlign="left" fontSize="xl">
                  How will the certificates be provided?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="lg">
              The certificates will be sent on your registered email.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{ bg: "tomato", color: "white" }}
                py={3}
              >
                <Box flex="1" textAlign="left" fontSize="xl">
                  How will the prizes be distributed?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="lg">
              The winners shall be contacted for their details by the chapter.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </>
  );
}

export default FAQs;
