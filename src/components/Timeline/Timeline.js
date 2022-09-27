import React from "react";
import { VStack, Heading, Text } from "@chakra-ui/react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Timeline() {
  return (
    <>
      <VStack
        id="Timeline"
        alignItems={"center"}
        justifyContent={"space-evenly"}
        direction="column"
        m={"auto"}
        minHeight={"100vh"}
        bg={"blackAlpha.900"}
        paddingBottom={"50px"}
        py={20}
      >
        <Heading as="h2" size="3xl">
          Timeline
        </Heading>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(141,18,18)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(141,18,18)" }}
            date="2PM - 3PM"
            iconStyle={{ background: "rgb(141,18,18)", color: "#fff" }}
            //icon={<WorkIcon />}
          >
            <h1 className="vertical-timeline-element-title">
              Round 1
            </h1>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(141,18,18)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(141,18,18)" }}
            date="3:45PM"
            iconStyle={{ background: "rgb(141,18,18)", color: "#fff" }}
            //icon={<WorkIcon />}
          >
            <h1 className="vertical-timeline-element-title">
              Round 1 Results
            </h1>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(141,18,18)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(141,18,18)" }}
            date="4PM - 5PM"
            iconStyle={{ background: "rgb(141,18,18)", color: "#fff" }}
            //icon={<WorkIcon />}
          >
            <h1 className="vertical-timeline-element-title">
              Round 2
            </h1>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(141,18,18)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(141,18,18)" }}
            date="5:45PM"
            iconStyle={{ background: "rgb(141,18,18)", color: "#fff" }}
            //icon={<WorkIcon />}
          >
            <h1 className="vertical-timeline-element-title">
              Round 2 Results
            </h1>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(141,18,18)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(141,18,18)" }}
            date="6PM - 7PM"
            iconStyle={{ background: "rgb(141,18,18)", color: "#fff" }}
            //icon={<WorkIcon />}
          >
            <h1 className="vertical-timeline-element-title">
              Round 3
            </h1>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(141,18,18)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(141,18,18)" }}
            date="October 1"
            iconStyle={{ background: "rgb(141,18,18)", color: "#fff" }}
            //icon={<WorkIcon />}
          >
            <h1 className="vertical-timeline-element-title">
              Round 3 Results
            </h1>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </VStack>
    </>
  );
}

export default Timeline;
