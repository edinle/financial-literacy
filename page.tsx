"use client";

import Navbar from "@/app/components/Navbar";
import PageWrapper from "@/app/components/PageWrapper";
import Footer from "@/app/components/Footer";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { projectOverview } from "./constants";

import "./00ff00.css";
import Link from "next/link";

const Green = () => {
    const [isHoveringTop, setIsHoveringTop] = useState(false);
    const hoverTimer = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleMouseMove = (event: any) => {
          const hoverThreshold = 50;
          const hoverDelay = 250;
    
          if (event.clientY <= hoverThreshold) {
            if (!hoverTimer.current) {
              hoverTimer.current = setTimeout(() => {
                setIsHoveringTop(true);
              }, hoverDelay);
            }
          } else {
            if (hoverTimer.current) {
              clearTimeout(hoverTimer.current);
              hoverTimer.current = null;
            }
            setIsHoveringTop(false);
          }
        };
    
        document.addEventListener("mousemove", handleMouseMove);
    
        // Cleanup on unmount
        return () => {
          document.removeEventListener("mousemove", handleMouseMove);
          if (hoverTimer.current) {
            clearTimeout(hoverTimer.current);
          }
        };
      }, []);

    return (
        <PageWrapper>
            <motion.div
                className="w-full h-fit"
                initial={{ y: 0 }}
                animate={{ y: isHoveringTop ? 0 : -80.5 }}
                transition={{ delay: isHoveringTop ? 0 : 0.75, duration: 0.75 }}
            >
                <Navbar />
            </motion.div>
            <div className="flex justify-between w-[75%] pb-10">
                <div>
                    <h1 className="tk-gelica"><i>Innovative Design at UCLA</i></h1>
                    <h2 className="tk-nohemi-lt text-[#BCBCBC]">#00FF00 Project</h2>
                </div>
                <div className="flex relative items-center justify-center">
                    <div id="burst-12" className="box-e"></div>
                    <p
                        style={{
                            fontFamily: "Condiment, cursive",
                            fontSize: 50,
                            rotate: "-27deg",
                            transformOrigin: "center",
                            textAlign: "center",
                            marginTop: "20px",
                        }}
                        className="absolute text-[#CAF0DC]"
                    >
                        innod
                    </p>
                </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 justify-between w-[75%] gap-10">
              {projectOverview.map((project, index) => 
                <div 
                  className={`col-span-1 w-[100%] border-[#505050] border-2 rounded-md place-content-center place-items-center p-5`}
                  style={{ 
                      backgroundColor: project.bgColor,
                      backgroundImage: project.bgTexture !== "" ? `url(${project.bgTexture})` : ""
                  }}
                  key={index}
                >
                  <div className="w-[90%] flex items-center justify-evenly h-full flex-col">
                    <div className="w-full flex items-center justify-between py-5">
                      <div>
                        <h3 className="max-w-[65%] tk-nohemi">{project.name}</h3>
                        <p>{project.description}</p>
                      </div>
                      <Link
                        href={project.link}
                      >
                        <img src="/hex-class/00ff00/Link.png"/>
                      </Link>
                    </div>
                    <img src={project.img} className="w-[80%] py-5"/>
                  </div>
                </div>
              )}
            </div>
            <Footer/>
        </PageWrapper>
    );
}

export default Green