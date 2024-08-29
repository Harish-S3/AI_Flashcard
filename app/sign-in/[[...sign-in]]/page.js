import React from 'react';
import { AppBar, Container, Toolbar, Typography, Button, Box, Paper } from "@mui/material";
import Link from 'next/link';
import { Book } from 'lucide-react';

export default function SignUpPage() {
  return (
    <Container maxWidth="sm">
      <AppBar position="static" sx={{ backgroundColor: '#3f51b5', marginBottom: 4 }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}
          >
            <Book size={24} style={{ marginRight: '0.5rem' }} />
            Flashcard SaaS
          </Typography>
          <Button color="inherit" component={Link} href="/login">
            Login
          </Button>
        </Toolbar>
      </AppBar>

      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Sign Up
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Create your account to start making flashcards!
        </Typography>
        {/* Add your sign-up form here */}
        <Box sx={{ width: '100%', mt: 2 }}>
          {/* This is a placeholder for your actual sign-up form */}
          <Button variant="contained" color="primary" fullWidth>
            Sign Up with Email
          </Button>
        </Box>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Already have an account? <Link href="/login">Log in</Link>
        </Typography>
      </Paper>
    </Container>
  );
}