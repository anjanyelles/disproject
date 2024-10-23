import React from "react";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";

import {
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";

export function HeroPresentation() {
 
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-full w-screen place-items-center bg-white relative px-8 py-8 lg:mb-36">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="text-center lg:text-left pt-32">
            <div className="mb-8 inline-flex items-center">
              <Typography
                variant="small"
                className="mr-3 py-0.5 px-3 font-bold text-dark uppercase border-r border-dark"
              >
                New
              </Typography>
              <Typography
                color="dark"
                variant="small"
                className="flex items-center font-bold uppercase"
              >
             Disaha
              </Typography>
            </div>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 lg:mr-32 leading-tight font-black"
            >
              Helping You Reach <span className="text-blue">Your Dreams</span>
            </Typography>
            <Typography variant="lead" color="blue-gray" className="lg:pr-32">
            Get expert advice and personalized study plans to achieve your educational goals.
            </Typography>
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="#pricing">
                <Button color="dark" className="flex items-center">
  Register Now
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex">
          <img src="img11.jpg" alt="components" className="absolute -top-10 right-0 w-1/2" />
        </div>
      </header>

      {/* <PagesFreePresentation client:only="react" />
    <PricingPresentation client:only="react" /> */}
    </ThemeProvider>
  );
}

export default HeroPresentation;
