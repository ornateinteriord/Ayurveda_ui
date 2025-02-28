import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Box, Typography, Container, useMediaQuery, useTheme, Avatar, Paper } from '@mui/material';
import { Quote } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HappyCustomers.css';

const testimonials = [
  {
    name: "Priya Sharma",
    title: "Recovered from Chronic Fatigue",
    description: "After struggling with chronic fatigue for years, the personalized Ayurvedic treatment plan completely transformed my energy levels. The herbal supplements and li I feel like I've gotten my life back!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Rajesh Patel",
    title: "Managed Digestive Issues",
    description: "I've dealt with IBS for over a decade, trying countless treatments with little success. The Ayurvedic approach addressed my digestive issues holistically. The combination of dietary changes, I'm incredibly grateful.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Ananya Desai",
    title: "Stress & Anxiety Relief",
    description: "The modern corporate lifestyle had taken a toll on my mental health. The Ayurvedic wellness program taught me practical techniques to manage stress and anxiety. The herbal  a sense of calm I hadn't experienced in years.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Vikram Singh",
    title: "Improved Sleep Quality",
    description: "I struggled with insomnia for years, but Ayurvedic therapy helped regulate my sleep cycle naturally. Herbal remedies and meditation practices have given me peaceful nights.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Meera Kapoor",
    title: "Weight Loss & Detox",
    description: "Ayurvedic detox programs helped me lose weight naturally without extreme dieting. My digestion and metabolism have improved significantly The herbal  a sense of calm I hadn't experienced in years!",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Amit Trivedi",
    title: "Joint Pain Relief",
    description: "Ayurvedic oils and natural therapies have relieved my chronic knee pain, allowing me to be active again without discomfort.The herbal  a sense of calm I hadn't experienced in years",
    image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8&auto=format&fit=crop&w=256&q=80"
  }
];

const Testimonials = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    rtl: false,  
    beforeChange: (_, next) => setActiveSlide(next)
  };

  return (
    <Box className="testimonials-section">
      <Container maxWidth="lg">
        <Box className="testimonials-header">
          <Typography variant="h2" className="section-title">
            Happy Customers
          </Typography>
          <Typography variant="subtitle1" className="section-subtitle">
            Real stories from people who have experienced the healing power of Ayurveda
          </Typography>
        </Box>
        
        <Box className="testimonials-slider-container">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <Box key={index} className="testimonial-slide">
                <Paper 
                  elevation={3} 
                  className={`testimonial-card ${index === activeSlide ? 'active' : ''}`}
                >
                  <Box className="quote-icon">
                    <Quote size={32} />
                  </Box>
                  <Box className="testimonial-content">
                  
                    <Box className="testimonial-author">
                      <Avatar 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="testimonial-avatar"
                      />
                      <Box>
                        <Typography variant="h6" className="testimonial-name">
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" className="testimonial-title">
                          {testimonial.title}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body1" className="testimonial-description">
                      "{testimonial.description}"
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
