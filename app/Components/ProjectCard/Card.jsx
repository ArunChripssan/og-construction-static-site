// Components/ProjectCard/Card.jsx
"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./Card.scss";
import ProjectDialog from "../ProjectDialog/ProjectDIalog";

const Card = ({ id, title, imgurl, client, consultant, value, location }) => {
    const [openDialog, setOpenDialog] = useState(false);

    const project = { id, title, imgurl, client, consultant, value, location };

    const OpenProjectDialog = () => {
        setOpenDialog(true);
    };
    const handleCloseProjectDialog = () => {
        setOpenDialog(false);
    };

    return (
        <>
            <div className="projectCard" onClick={() => OpenProjectDialog()}>
                <Image
                    src={imgurl[0]}
                    alt={title} 
                    fill
                    style={{ objectFit: "cover" }}
                />
                <div className="overlay">
                    <p>{title}</p>
                </div>
            </div>
            <ProjectDialog
                open={openDialog}
                onClose={handleCloseProjectDialog}
                project={project}
            />
        </>
    );
};

export default Card;