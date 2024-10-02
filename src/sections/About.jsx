import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopiedEmail, setHasCopiedEmail] = useState(false);
  const [hasCopiedNumber, setHasCopiedNumber] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jparekh4@asu.edu');
    setHasCopiedEmail(true);

    setTimeout(() => {
      setHasCopiedEmail(false);
    }, 2000);
  };

  const handleCopyNumber = () => {
    navigator.clipboard.writeText('4692385720');
    setHasCopiedNumber(true);

    setTimeout(() => {
      setHasCopiedNumber(false);
    }, 2000);
  }

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-1">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Jaykumar Parekh</p>
              <p className="grid-subtext">
                <ul className='list-disc space-y-5 text-lg'>
                  <li>Collaborated with Google[X] engineers on Machine Learning research project via vendor company for 2+ years.</li>
                  <li>Have good amount of experience in building scalable and robust software solutions.</li>

                </ul>
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-2 xl:row-span-1">
          <div className="grid-container">
            <img src="assets/development.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Programming Languages</p>
              <div className='grid grid-cols-4'>
                <span className="grid-subtext">
                  C++
                </span>
                <span className="grid-subtext">
                  Python
                </span>
                <span className="grid-subtext">
                  Javascript
                </span>
                <span className="grid-subtext">
                  Typescript
                </span>
              </div>
            </div>
            <div>
              <p className="grid-headtext">Frontend</p>
              <div className='grid grid-cols-5'>
                <span className="grid-subtext">
                  HTML
                </span>
                <span className="grid-subtext">
                  CSS
                </span>
                <span className="grid-subtext">
                  Angular
                </span>
                <span className="grid-subtext">
                  AJAX
                </span>
                <span className="grid-subtext">
                  JQUERY
                </span>
              </div>
            </div>
            <div>
              <p className="grid-headtext">Backend</p>
              <div className='grid grid-cols-5'>
                <span className="grid-subtext">
                  NodeJS
                </span>
                <span className="grid-subtext">
                  ExpressJS
                </span>
                <span className="grid-subtext">
                  MongoDB
                </span>
                <span className="grid-subtext">
                  MySQL
                </span>
                <span className="grid-subtext">
                  POSTMAN
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-1 ">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Version Control / Task Management</p>
              <div className='grid grid-cols-4'>
                <span className="grid-subtext">
                  GIT
                </span>
                <span className="grid-subtext">
                  GitHub
                </span>
                <span className="grid-subtext">
                  Bitbucket
                </span>
                <span className="grid-subtext">
                  JIRA
                </span>
                <span className="grid-subtext">
                  Gerrit
                </span>
              </div>
            </div>
            <div>
              <p className="grid-headtext">Cloud Services</p>
              <div className='grid grid-cols-2'>
                <span className="grid-subtext">
                  AWS(DynamoDB, API, Lambda)
                </span>
                <span className="grid-subtext">
                  GCP
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-1">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[326px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Machine Learning</p>
              <div className='grid grid-cols-4'>
                <span className="grid-subtext">
                  NLP
                </span>
                <span className="grid-subtext">
                  LLM
                </span>
                <span className="grid-subtext">
                  RAG
                </span>
                <span className="grid-subtext">
                  UNET
                </span>
                <span className="grid-subtext">
                  openCV
                </span>
                <span className="grid-subtext">
                  EffiecientNET
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-1">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[326px] sm:h-[326px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-4">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopyEmail}>
                <img src={hasCopiedEmail ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">jparekh@asu.edu</p>
              </div>
              <div className="copy-container" onClick={handleCopyNumber}>
                <img src={hasCopiedNumber ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">(469)-238-5720</p>
              </div>
              <div className='copy-container space-x-4'>
                <a href="https://www.linkedin.com/in/jay-parekh-a2a5b81a4/" target='_blank'>
                  <img src="assets/linked_in.png" alt="copy" className="w-8 h-8 rounded-full"/>
                </a>
                <a href='https://www.geeksforgeeks.org/user/jayparekh0408/' target='_blank'>
                  <img src="assets/gfg.png" alt="copy" className="w-8 h-8 rounded-full"/>
                </a>
                <a href="https://leetcode.com/u/jayparekh0408/" target='_blank'>
                  <img src="assets/leetcode.png" alt="copy" className="w-8 h-8 rounded-full"/>
                </a>
                <a href='https://github.com/jayparekh4801' target='_blank'>
                  <img src="assets/github.svg" alt="copy" className="w-8 h-8 rounded-full"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
