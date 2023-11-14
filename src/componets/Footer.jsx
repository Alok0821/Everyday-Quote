import { Box, Typography } from '@mui/material';
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <Box sx={{ textAlign: "center", bgcolor: '#1A1A19', color: "white", p: 3 }}>

            <Box sx={{
                my: 3, "& svg": {
                    fontSize: "60px",
                    cursor: "pointer",
                    mr: 2,
                },
                "& svg:hover": {
                    color: 'orangered',
                    transform: "translateX(5px)",
                    transition: "all 400ms"
                }
            }}>
                {/* Icons group */}
                <a href='https://www.instagram.com/'><InstagramIcon /></a>
                <a href='https://twitter.com/i/flow/login'><TwitterIcon /></a>
                <a href='https://github.com/Alok0821'><GitHubIcon /></a>
                <a href='https://www.youtube.com/'><YouTubeIcon /></a>
                <a href='https://www.facebook.com/'><FacebookIcon /></a>

            </Box>
            <Typography>
                All right reserved &copy; Aalok
            </Typography>
        </Box>
    )
}

export default Footer;



