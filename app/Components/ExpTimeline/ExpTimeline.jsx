"use client";

import * as React from "react";
import Image from "next/image";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import "./ExpTimeline.scss";

const ExpTimeline = () => {
    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;
    return (
        <Timeline position="alternate-reverse" sx={{ color: "success.main" }} className="achievement-timeline">
            <TimelineItem>
                <TimelineSeparator className="separator">
                    <TimelineDot color="info" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <div className="projectsCompleted">
                        <div className="contents">
                            <h1>500+</h1>
                            <h2>
                                {" "}
                                Projects <br />
                                Completed
                            </h2>
                        </div>
                        <Image
                            src="/assets/icons/project.png"
                            alt=""
                            width={80}
                            height={80}
                        />
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="info" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <div className="experience">
                        <Image
                            src="/assets/icons/worker.png"
                            alt=""
                            width={80}
                            height={80}
                        />
                        <div className="contents">
                            <h1>25+</h1>
                            <h2>
                                {" "}
                                Years of <br />
                                Experience
                            </h2>
                        </div>
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="info" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <div className="awards">
                        <div className="contents">
                            <h1>8+</h1>
                            <h2>Awards</h2>
                        </div>
                        <Image
                            src="/assets/icons/awards.png"
                            alt=""
                            width={80}
                            height={80}
                        />
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="info" />
                </TimelineSeparator>
                <TimelineContent>
                    <div className="clients">
                        <Image
                            src="/assets/icons/clients.png"
                            alt=""
                            width={80}
                            height={80}
                        />
                        <div className="contents">
                            <h1>150+</h1>
                            <h2>Clients</h2>
                        </div>
                    </div>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
};

export default ExpTimeline;
