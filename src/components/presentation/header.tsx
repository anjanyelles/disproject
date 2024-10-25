import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";

import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

export function HeroPresentation() {
  return (
    <ThemeProvider>
      <Navbar />
      <header className="relative w-screen h-full px-8 py-8 bg-white place-items-center lg:mb-36">
        <div className="container grid items-center mx-auto lg:grid-cols-2">
          <div className="pt-32 text-center lg:text-left">
            <div className="inline-flex items-center mb-8">
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
              className="mb-8 font-black leading-tight lg:mr-32"
            >
              Helping You Reach <span className="text-blue">Your Dreams</span>
            </Typography>
            <Typography variant="lead" color="blue-gray" className="lg:pr-32">
              Get expert advice and personalized study plans to achieve your
              educational goals.
            </Typography>
            <div className="flex flex-wrap justify-center gap-3 mt-12 lg:justify-start">
              <a href="#pricing">
                <Button color="dark" className="flex items-center">
                  Register Now
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex">
          <img
            src="12.png"
            alt="components"
            className="absolute right-0 w-1/2 -top-10"
          />
        </div>
      </header>

      {/* <PagesFreePresentation client:only="react" />
    <PricingPresentation client:only="react" /> */}
    </ThemeProvider>
  );
}

export default HeroPresentation;
