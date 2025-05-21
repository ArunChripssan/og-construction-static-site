"use client";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Card from "../../../../Components/ProjectCard/Card";
import React, { useState } from "react";
import { completedProjects } from "../../../../../data/completedProjects";
import { projectCategories } from "../../../../../data/projectCategories";
import "./CompletedProjectCardSec.scss";
import Image from "next/image";

const CompletedProjectCardSec = () => {
    const [active, setActive] = useState("All");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const filteredData =
        active === "All"
            ? completedProjects
            : completedProjects.filter((data) => data.category === active);

    return (
        <div className="wrapper">
            <div className="completedProjectCardSec">
                <div className="categorySec">
                    <ul className="category">
                        {projectCategories.map((data) => {
                            return (
                                <li
                                    className={`category__item ${
                                        active === data.category
                                            ? " category__item__active"
                                            : ""
                                    }`}
                                    onClick={() => setActive(data?.category)}
                                    key={data.id}
                                >
                                    {data.category}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="mobileCategorySec">
                    <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                    >
                        <Image
                            src="/assets/icons/filter.png"
                            alt=""
                            width={32}
                            height={32}
                        />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        {projectCategories.map((data) => {
                            return (
                                <MenuItem
                                    key={data.id}
                                    onClick={() => {
                                        setActive(data?.category);
                                        handleClose();
                                    }}
                                >
                                    {data.category}
                                </MenuItem>
                            );
                        })}
                    </Menu>
                </div>
                <div className="cardSec">
                    {filteredData.map((data) => {
                        return <Card {...data} key={data.id} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default CompletedProjectCardSec;
