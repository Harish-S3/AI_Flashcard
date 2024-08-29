import React, { useState } from 'react';
import { AppBar, Container, Toolbar, Typography, Button, Box, Paper, Switch, FormControlLabel } from "@mui/material";
import Link from 'next/link';
import { Book } from 'lucide-react';
import { SignIn } from "@clerk/nextjs";

export default function SignUpPage() {
  const [isDeveloperMode, setIsDeveloperMode] = useState(false);

  const handleDeveloperModeToggle = () => {
    setIsDeveloperMode(!isDeveloperMode);
  };

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

        <FormControlLabel
          control={
            <Switch
              checked={isDeveloperMode}
              onChange={handleDeveloperModeToggle}
              name="developerMode"
              color="primary"
            />
          }
          label="Developer Mode"
        />

        <Box sx={{ width: '100%', mt: 2 }}>
          <SignIn 
            path="/sign-up"
            routing="path"
            signInUrl="/sign-in"
            redirectUrl="/"
            appearance={{
              elements: {
                formButtonPrimary: 
                  'bg-blue-500 hover:bg-blue-600 text-sm normal-case',
              },
            }}
          />
        </Box>

        {isDeveloperMode && (
          <Box sx={{ mt: 4, width: '100%', bgcolor: '#f0f0f0', p: 2, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>Developer Info</Typography>
            <Typography variant="body2">
              Sign-up component rendered. 
              Clerk SignIn component configured for sign-up.
              Routing set to "path".
              Redirect URL set to home page.
            </Typography>
          </Box>
        )}

        <Typography variant="body2" sx={{ mt: 2 }}>
          Already have an account? <Link href="/sign-in">Log in</Link>
        </Typography>
      </Paper>
    </Container>
  );
}