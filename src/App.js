/*
 * Copyright (c) 2022 climeight.de
 * All rights reserved.
 * Author: d5chahannam
 */

import React from 'react';

// stylesheets
import './App.css'
import { AboutSection, HeaderSection, HomeSection, IntroductionSection, ClimateSection, 
         ShowcaseSection } from './sections';

const App = () => {
    return(
      <div>
        <HeaderSection />
        <HomeSection />
        <IntroductionSection />
        <ShowcaseSection />
        <AboutSection />
        <ClimateSection />
      </div>
    )
}

export default App