"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: 0,
    },
    "& .MuiDialog-paper": {
        borderRadius: "12px",
        overflow: "hidden",
    },
}));

// const ImageCarousel = ({ images }) => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />,
//     };

//     function SampleNextArrow(props) {
//         const { className, style, onClick } = props;
//         return (
//             <IconButton
//                 className={className}
//                 onClick={onClick}
//                 sx={{
//                     ...style,
//                     display: "block",
//                     right: 10,
//                     zIndex: 1,
//                     background: "rgba(0,0,0,0.5)",
//                     color: "white",
//                     "&:hover": {
//                         background: "rgba(0,0,0,0.7)",
//                     },
//                 }}
//             >
//                 <Typography variant="srOnly">Next</Typography>
//             </IconButton>
//         );
//     }

//     function SamplePrevArrow(props) {
//         const { className, style, onClick } = props;
//         return (
//             <IconButton
//                 className={className}
//                 onClick={onClick}
//                 sx={{
//                     ...style,
//                     display: "block",
//                     left: 10,
//                     zIndex: 1,
//                     background: "rgba(0,0,0,0.5)",
//                     color: "white",
//                     "&:hover": {
//                         background: "rgba(0,0,0,0.7)",
//                     },
//                 }}
//             >
//                 <Typography variant="srOnly">Previous</Typography>
//             </IconButton>
//         );
//     }

//     if (!Array.isArray(images) || images.length === 0) {
//         return (
//             <Box
//                 sx={{
//                     height: "100%",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     backgroundColor: "#f0f0f0",
//                 }}
//             >
//                 <Typography variant="p" color="text.secondary">No Image Available</Typography>
//             </Box>
//         );
//     }

//     return (
//         <Slider {...settings}>
//             {images.map((image, index) => (
//                 <Box
//                     key={index}
//                     sx={{
//                         height: "100%",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                     }}
//                 >
//                     <img
//                         src={image}
//                         alt={`Project Image ${index + 1}`}
//                         style={{
//                             width: "100%",
//                             height: "auto",
//                             maxHeight: "100%",
//                             objectFit: "contain",
//                         }}
//                     />
//                 </Box>
//             ))}
//         </Slider>
//     );
// };

const ProjectDialog = ({ open, onClose, project }) => {
    return (
        <React.Fragment>
            <CustomDialog
                onClose={onClose}
                aria-labelledby="project-details-dialog-title"
                open={open}
                maxWidth="md"
                fullWidth
            >
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={(theme) => ({
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                        zIndex: 10,
                    })}
                >
                    <CloseIcon />
                </IconButton>

                <DialogContent
                    sx={{
                        p: 0,
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        height: { xs: "auto", sm: "600px" },
                    }}
                >
                    {/* left */}
                    <Box
                        sx={{
                            flex: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: { xs: "250px", sm: "auto" },
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src={
                                project.imgurl &&
                                    Array.isArray(project.imgurl) &&
                                    project.imgurl.length > 0
                                    ? project.imgurl[0]
                                    : "/assets/placeholder.jpg"
                            }
                            alt={project.title || "Project Image"}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "fill",
                            }}
                        />
                    </Box>

                    {/* right */}
                    <Box
                        sx={{
                            flex: 1,
                            p: 4,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            gap: 3,
                        }}
                    >
                        {/* Title */}
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <BusinessIcon sx={{ mr: 2, color: "#267390" }} />
                            <Box>
                                <Typography variant="body2" color="#267390">
                                    Project Name
                                </Typography>
                                <Typography variant="p">
                                    {project?.title}
                                </Typography>
                            </Box>
                        </Box>

                        {/* Client */}
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <PersonIcon sx={{ mr: 2, color: "#267390" }} />
                            <Box>
                                <Typography variant="body2" color="#267390">
                                    Client
                                </Typography>
                                <Typography variant="p">
                                    {project?.client}
                                </Typography>
                            </Box>
                        </Box>

                        {/* Consultant */}
                        {/* <Box sx={{ display: "flex", alignItems: "center" }}>
                            <ArchitectureIcon
                                sx={{ mr: 2, color: "#267390" }}
                            />
                            <Box>
                                <Typography variant="body2" color="#267390">
                                    Consultant
                                </Typography>
                                <Typography variant="p">
                                    {project?.consultant}
                                </Typography>
                            </Box>
                        </Box> */}
                        {project?.consultant && (
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <ArchitectureIcon sx={{ mr: 2, color: "#267390" }} />
                                <Box>
                                    <Typography variant="body2" color="#267390">
                                        Consultant
                                    </Typography>
                                    <Typography variant="p">
                                        {project.consultant}
                                    </Typography>
                                </Box>
                            </Box>
                        )}


                        {/* Project Value */}
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <AttachMoneyIcon sx={{ mr: 2, color: "#267390" }} />
                            <Box>
                                <Typography variant="body2" color="#267390">
                                    Project Value
                                </Typography>
                                <Typography variant="p">
                                    {project?.value
                                        ? `OMR ${project.value}`
                                        : "N/A"}
                                </Typography>
                            </Box>
                        </Box>

                        {/* Location */}
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <LocationOnIcon sx={{ mr: 2, color: "#267390" }} />
                            <Box>
                                <Typography variant="body2" color="#267390">
                                    Location
                                </Typography>
                                <Typography variant="p" color="#555454ff">
                                    {project?.location || "N/A"}{" "}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </DialogContent>
            </CustomDialog>
        </React.Fragment>
    );
};

export default ProjectDialog;
