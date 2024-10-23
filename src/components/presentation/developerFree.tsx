import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function DevPresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white py-20">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="mb-8">
            <Typography
              color="blue"
              className="flex items-center font-bold text-lg mb-5"
            >
    Empowering You to Find the Right Opportunities and Build Your Skills
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-4 leading-tight"
            >
Your Trusted Partner for Talent and Career Growth
            </Typography>
            <Typography color="blue-gray" className="lg:pr-32">
            We are your trusted partner for talent, committed to helping you find the right opportunities, secure meaningful roles, and develop the skills that matter. Let us guide you in building a successful and fulfilling career
            </Typography>
          </div>
          <img src="img11.jpg" alt="components" className="mx-auto hidden md:flex" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default DevPresentation;
