import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaRocket, FaChartLine, FaShieldAlt, FaUsers } from 'react-icons/fa';

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaRocket />,
      title: 'Fast Implementation',
      description: 'Get up and running quickly with our easy-to-use platform'
    },
    {
      icon: <FaChartLine />,
      title: 'Analytics Dashboard',
      description: 'Make data-driven decisions with powerful insights'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Enterprise Security',
      description: 'Your data is protected with industry-leading security'
    },
    {
      icon: <FaUsers />,
      title: '24/7 Support',
      description: 'Our dedicated team is always here to help you succeed'
    }
  ];

  return (
    <section id="features" className="py-5 bg-light">
      <Container>
        <h2 className="text-center text-primary mb-5">Why Choose Us</h2>
        <Row>
          {features.map((feature, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card className="feature-card h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="feature-icon mb-3" style={{ fontSize: '2.5rem' }}>
                    {feature.icon}
                  </div>
                  <Card.Title className="mb-3 fw-bold">{feature.title}</Card.Title>
                  <Card.Text className="text-muted">{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesSection; 