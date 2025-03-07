import React, { useState } from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Link, Container, Grid, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './PrivacyPolicy.css';
import privacyPolicySections from '../../assets/productsdata/privacy';
import privacyImage from '../../assets/images/privacyImage2.avif'; // Add a relevant real image

const PrivacyPolicy = () => {
  const [expandedLeft, setExpandedLeft] = useState(null);
  const [expandedRight, setExpandedRight] = useState(null);

  const handleLeftChange = (panel) => (event, isExpanded) => {
    setExpandedLeft(isExpanded ? panel : null);
  };

  const handleRightChange = (panel) => (event, isExpanded) => {
    setExpandedRight(isExpanded ? panel : null);
  };

  const middleIndex = Math.ceil(privacyPolicySections.length / 2);
  const leftSections = privacyPolicySections.slice(0, middleIndex);
  const rightSections = privacyPolicySections.slice(middleIndex);

  return (
    <Box className="privacy-policy-container">

      {/* Privacy Description and Image */}
      <Grid container spacing={4} alignItems="center" className="privacy-intro">
        {/* Privacy Description */}
        <Grid item xs={12} md={6} className='policy-desc-conatiner'>
          <Typography variant="h5" gutterBottom className="privacy-title">
            Privacy Policy Overview
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph className="privacy-descr">
            At our company, we are committed to safeguarding your personal data. This policy explains how we collect, use, and protect your information.
            We ensure transparency in data handling and comply with all legal requirements to keep your information secure.
            At our company, we are committed to safeguarding your personal data.
            requirements to keep your information secure.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center">
            <img src={privacyImage} alt="Privacy Policy" className="privacy-image" />
          </Box>
        </Grid>
      </Grid>
     <Box>
      <Typography variant="h2" align="center" gutterBottom className="privacy-main-title">
        Privacy and Policy
      </Typography>
      </Box>
      {/* Accordion Sections */}
      <Grid container spacing={4} className='accordion-main-container'>
           {/* Privacy Title */}
    
        {/* Left Side Accordion */}
        <Grid item xs={12} md={6}>
          <Box className="left-container">
            {leftSections.map((section, index) => (
              <Accordion
                key={index}
                expanded={expandedLeft === index}
                onChange={handleLeftChange(index)}
                className="accordion"
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
                  <Typography variant="h6" className='section-title'>{section.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" color="textSecondary">
                    {section.content}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Grid>

        {/* Right Side Accordion */}
        <Grid item xs={12} md={6}>
          <Box className="right-container">
            {rightSections.map((section, index) => (
              <Accordion
                key={index}
                expanded={expandedRight === index}
                onChange={handleRightChange(index)}
                className="accordion"
              >
                <AccordionSummary var expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
                  <Typography variant="h6" className='section-title'>{section.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" color="textSecondary" className='section-content'>
                    {section.content}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Contact Info */}
      <Typography variant="h6" align="center" gutterBottom className="contact-info">
        For any questions or concerns regarding our Privacy Policy, please contact us at{' '}
        <Link href="mailto:privacy@ayurveda.com" color="primary">
          privacy@ayurveda.com
        </Link>
        .
      </Typography>
    </Box>
  );
};

export default PrivacyPolicy;