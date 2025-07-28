import Image from "next/image";
import React from "react";
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineDot,
    TimelineContent,
} from "@mui/lab";
import { Typography, Box } from "@mui/material";
import "./HealthPolicy.scss";

const steps = [
    {
        number: "01",
        text: `The management of Oasis Grace LLC considers the health and safety at work and the environmental protection (HSE) as essential factors for the success of the Company and all departments and persons of the organization must be responsible of it from the functions they are performing.`,
    },
    {
        number: "02",
        text: `Our supervisors receive training in the safety construction outreach program, as well as classes in fall protection, excavation and trenching first aid, CPR and confined space entry procedures, substance abuse awareness, and reorganization.`,
    },
    {
        number: "03",
        text: `New employees are required to complete our new hire safety orientation program. Our substance abuse program includes pre hire, post-accident, fitness for duty, for cause, and random drug and alcohol testing. All employees including management are subject to random testing.`,
    },
];

const HealthPolicy = () => {
    return (
        <div className="wrapper">
            <h1 className="title">Our Health Policy</h1>
            <div className="healthPolicySec">
                <div className="imageWrapper">
                    <Image
                        src="/assets/healthpolicy.png"
                        alt=""
                        width={650}
                        height={430}
                    />
                </div>
                <div className="textContent">
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            py: 6,
                        }}
                    >
                        <Timeline position="left">
                            {steps.map((step, i) => (
                                <TimelineItem
                                    key={i}
                                    sx={{
                                        "&::before": {
                                            display: "none",
                                        },
                                    }}
                                >
                                    <TimelineContent sx={{ px: 3, py: 2 }}>
                                        <Typography
                                            sx={{
                                                color: "#fff",
                                                fontSize: "0.95rem",
                                                lineHeight: 1.8,
                                                textAlign: "start",
                                            }}
                                        >
                                            {step.text}
                                        </Typography>
                                    </TimelineContent>
                                    <TimelineSeparator>
                                        <TimelineDot
                                            sx={{
                                                background:
                                                    "linear-gradient(to right, #00c6ff, #0072ff)",
                                                width: 60,
                                                height: 60,
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                boxShadow:
                                                    "0 0 10px rgba(0, 114, 255, 0.7)",
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    color: "#fff",
                                                    fontWeight: "bold",
                                                    fontStyle: "italic",
                                                }}
                                            >
                                                {step.number}
                                            </Typography>
                                        </TimelineDot>
                                        {i < steps.length - 1 && (
                                            <TimelineConnector
                                                sx={{
                                                    backgroundColor: "#8ecae6",
                                                    width: 2,
                                                    height: 60,
                                                    mx: "auto",
                                                }}
                                            />
                                        )}
                                    </TimelineSeparator>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default HealthPolicy;
