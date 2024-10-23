import React from "react";
import {
  Button,
  Card,
  Typography
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

function StatsCard({ count, title, desc }) {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h1" className="mb-4 text-5xl text-dark">
        {count}
      </Typography>
      <Typography variant="h5" color="blue-gray">
        {title}
      </Typography>
      <Typography color="gray">
        {desc}
      </Typography>
    </Card>
  );
}

const stats = [
  {
    count: "10+",
    title: "Study Plans:",
    desc: "Our team crafts tailored study schedules that adapt to your specific learning pace and objectives."
  },
  {
    count: "10+",
    title: "University Admissions:",
    desc: "Gain strategic guidance on selecting the best universities and preparing compelling applications to enhance your chances of acceptance."
  },
  {
    count: "30+",
    title: "DCareer Counseling:",
    desc: "Receive personalized advice and resources to explore diverse career pathways and develop a plan to achieve your professional aspirations."
  },
  {
    count: "40+",
    title: "Study Plans",
    desc: "Gain strategic guidance on selecting the best universities and preparing compelling applications to enhance your chances of acceptance."
  },
];

export function FigmaPresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-20">
        <div className="container mx-auto relative">
          <div className="text-left">
            <Typography
              color="blue"
              className="font-bold text-lg mb-5"
            >
Sustainability Report: 
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
         Empowering Talent and Communities
            </Typography>
            <Typography color="blue-gray" className="mb-5 lg:w-[30rem]">
            At Dishha, we are committed to fostering a more equitable and sustainable future. Our Sustainability Report highlights our positive impact on communities and how we promote fairness in the labor market, workplace equity, and support for the green transition. Learn how we are making a difference through our partnerships and initiatives.
            </Typography>
          </div>
          <div className="lg:flex relative">
            <div className="lg:w-1/2">
              <div className="p-2 lg:p-0 mb-8">
                <div className="grid gap-y-16 gap-x-8 grid-cols-2 md:grid-cols-2 mb-8">
                  {stats.map((props, key) => (
                    <StatsCard key={key} {...props} />
                  ))}
                </div>
                <a href="https://www.creative-tim.com/product/astro-launch-ui-pro" target="_blank">
                  <Button color="dark" className="flex items-center">
              Register Now  
                  </Button>
                </a>
              </div>
            </div>
            <img src="components.png" alt="iphone" className="lg:w-1/2 rounded-3xl hidden md:flex ml-auto lg:absolute -right-32 -top-24" />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default FigmaPresentation;
