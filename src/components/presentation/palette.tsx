import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function PalettePresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-8">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="hidden lg:flex">
            <img src="palette.png" alt="iphone" className="max-w-xl rounded-3xl mx-auto" />
          </div>
          
          <div className="text-center lg:text-left">
            <Typography
              color="blue"
              className="flex items-center justify-center lg:justify-start !font-bold text-lg mb-5"
            >
    Embarking on Your Journey with Dishha:
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
     Your Partner for Talent Solutions
            </Typography>
            <Typography color="gray" className="lg:pr-20">
            At Dishha, we believe that every journey begins with the right partner. As you embark on your professional path, we are here to guide you every step of the way. Our commitment is to provide you with the tools, resources, and support you need to thrive in today’s ever-changing job market. Whether you’re seeking to enhance your skills, find meaningful work, or connect with top talent, Dishha is dedicated to helping you achieve your goals and unlock your full potential. 
            </Typography>
            
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default PalettePresentation;
