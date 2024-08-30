import React from 'react';
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Container, AppBar, Toolbar, Typography, Button, Box, Grid, Card, CardContent, Chip } from '@mui/material';
import { Book, Zap, Globe, Star } from 'lucide-react';

const Feature = ({ icon: Icon, title, description }) => (
  <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <Icon size={40} color="#3f51b5" style={{ marginBottom: '1rem' }} />
      <Typography variant="h6" component="h3" gutterBottom>{title}</Typography>
      <Typography variant="body2" color="text.secondary">{description}</Typography>
    </CardContent>
  </Card>
);

const PricingTier = ({ title, price, features, recommended }) => (
  <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
    {recommended && (
      <Chip label="Recommended" color="primary" sx={{ position: 'absolute', top: -10, right: 10 }} />
    )}
    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <Typography variant="h5" component="h3" gutterBottom>{title}</Typography>
      <Typography variant="h4" component="p" gutterBottom>${price}<Typography variant="caption">/month</Typography></Typography>
      <Box sx={{ mt: 2 }}>
        {features.map((feature, index) => (
          <Typography key={index} variant="body2" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
            <Star size={16} style={{ marginRight: '0.5rem', color: '#3f51b5' }} />
            {feature}
          </Typography>
        ))}
      </Box>
    </CardContent>
    <Button variant={recommended ? "contained" : "outlined"} color="primary" sx={{ m: 2 }}>
      Choose Plan
    </Button>
  </Card>
);

export default function EnhancedLandingPage() {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Book size={24} style={{ marginRight: '0.5rem' }} />
            Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit" sx={{ mx: 1 }}>Login</Button>
            <Button variant="contained" color="primary" sx={{ mx: 1 }}>Sign up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box sx={{ textAlign: 'center', my: 8 }}>
        <Typography variant="h2" sx={{ mb: 2, fontWeight: 'bold' }}>Welcome to Flashcard SaaS</Typography>
        <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary' }}>
          The smartest way to create and study flashcards
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
          Get Started for Free
        </Button>
      </Box>

      <Box sx={{ my: 8 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold' }}>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Feature 
              icon={Zap} 
              title="AI-Powered Creation" 
              description="Our AI intelligently generates flashcards from your text, saving you time and effort."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Feature 
              icon={Book} 
              title="Smart Study Sessions" 
              description="Adaptive learning algorithms tailor your study sessions for maximum retention."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Feature 
              icon={Globe} 
              title="Access Anywhere" 
              description="Study on any device, anytime. Your flashcards are always at your fingertips."
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ my: 8 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold' }}>
          Pricing
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <PricingTier 
              title="Basic" 
              price={5} 
              features={[
                "100 AI-generated flashcards/month",
                "Basic study analytics",
                "Web access"
              ]} 
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PricingTier 
              title="Pro" 
              price={15} 
              features={[
                "Unlimited AI-generated flashcards",
                "Advanced study analytics",
                "Web & mobile access",
                "Collaboration features"
              ]}
              recommended
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PricingTier 
              title="Team" 
              price={49} 
              features={[
                "Everything in Pro",
                "Team management",
                "Shared decks",
                "Priority support"
              ]} 
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}