"use client";
import { TextField, Button, Typography, Box, Container } from "@mui/material";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { signInUser } from "../../utils/authUtils";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const { handleSubmit, control } = useForm();
  const router = useRouter()

  const onSubmit = async (data: any) => {
    console.log(data);
    const signInResult = await signInUser(data.email);

    if (signInResult.success) {
      router.push('/')
    } else {
      console.log("Sign-in failed");
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={4}>
          <Typography variant="h6">Contact Information</Typography>
          <Typography variant="body2">
            Already have an account? <Link href="/signin">Sign in</Link>
          </Typography>
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
        <Box mb={4}>
          <Typography variant="h6">Address</Typography>
          <Box display="flex" gap={2}>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  required
                  {...field}
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  margin="normal"
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  required
                  {...field}
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  margin="normal"
                />
              )}
            />
          </Box>

          <Controller
            name="country"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                required
                {...field}
                fullWidth
                label="Country"
                variant="outlined"
                margin="normal"
                select
                SelectProps={{ native: true }}
              >
                <option value=""></option>
                <option value="AM">Armenia</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
              </TextField>
            )}
          />
          <Controller
            name="postalCode"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                required
                {...field}
                fullWidth
                label="Postal Code"
                variant="outlined"
                margin="normal"
              />
            )}
          />
          <Controller
            name="address"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                required
                {...field}
                fullWidth
                label="Address"
                variant="outlined"
                margin="normal"
              />
            )}
          />
          <Box display="flex" gap={2}>
            <Controller
              name="apartment"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  required
                  {...field}
                  fullWidth
                  label="Apartment, suite"
                  variant="outlined"
                  margin="normal"
                />
              )}
            />
            <Controller
              name="city"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  required
                  {...field}
                  fullWidth
                  label="City"
                  variant="outlined"
                  margin="normal"
                />
              )}
            />
          </Box>
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                required
                {...field}
                fullWidth
                label="Phone"
                variant="outlined"
                margin="normal"
              />
            )}
          />
        </Box>
        <Box mb={4}>
          <Typography variant="h6">Comment Message</Typography>
          <Controller
            name="comment"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                required
                {...field}
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                margin="normal"
              />
            )}
          />
        </Box>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
}
