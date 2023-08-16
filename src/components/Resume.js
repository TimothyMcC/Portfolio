import { AcademicCapIcon } from "@heroicons/react/solid";
import React from "react";
import resume from 'C:\Users\tmkgw\Desktop\my-portfolio\public\resume.pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';


export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <AcademicCapIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            My Resume!
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            This is the most up-to-date version of my Resume. In addition to information on the Projects and Skills you see listed on this portfolio you'll see academic and work history!
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <Document file={resume}>
    
          </Document> 
        </div>
      </div>
    </section>
  );
}