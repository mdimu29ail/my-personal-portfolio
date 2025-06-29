import React, { useEffect } from 'react';
import Banner from '../Components/Banner/Banner';
import About from '../Components/About/About';
import Skills from '../Components/Skills/Skills';

import { scrollToHash } from '../Components/utils/scrollToHash/utils/scrollToHash';
import ProjectData from '../Components/ProjectData/ProjectData';
import Contacts from '../Components/Contacts/Contacts';
import Testimonial from '../Components/Testimonial/Testimonial';

const Home = () => {
  useEffect(() => {
    scrollToHash();
  }, []);
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <ProjectData></ProjectData>
      <Contacts></Contacts>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
