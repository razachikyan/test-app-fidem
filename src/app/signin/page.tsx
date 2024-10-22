"use client";
import { TextField, Button, Typography, Box, Container } from "@mui/material";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { signInUser } from "../../utils/authUtils";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter()
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data: any) => {
    console.log("SignIn Data:", data);
    const { email } = data;
    const signInResult = await signInUser(email);
    if (signInResult.success) {
      router.push("/");
    } else {
      console.log("Sign-in failed");
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={4}>
          <Typography variant="h6">Login Information</Typography>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                required
                {...field}
                fullWidth
                label="Email Address"
                type="email"
                variant="outlined"
                margin="normal"
              />
            )}
          />
        </Box>
        <Button variant="contained" color="primary" type="submit">
          Sign In
        </Button>
      </form>
      <Box mt={2}>
        <Typography variant="body2">
          Don't have an account? <Link href="/checkout">Sign up</Link>
        </Typography>
      </Box>
    </Container>
  );
}
