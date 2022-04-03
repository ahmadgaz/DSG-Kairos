import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  BuildingCommunity,
  CommunityCollaboration,
  ComputerEducation,
  Homes,
  EnglishFluency,
  FinancialLiteracy,
  GivingBack,
  LifeSkillsClasses,
  NutritionHealth,
  Consultations,
  ParentingEffectiveness,
  PathToCollege,
  PromotingAcademics,
  StemEducation,
  ViolencePrevention,
  Writing
} from "./pages"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route exact path="building-community" element={<BuildingCommunity />} />
        <Route exact path="community-collaborations" element={<CommunityCollaboration />} />
        <Route exact path="continuing-in-the-homes" element={<Homes />} />
        <Route exact path="computer-education" element={<ComputerEducation />} />
        <Route exact path="english-fluency" element={<EnglishFluency />} />
        <Route exact path="financial-literacy" element={<FinancialLiteracy />} />
        <Route exact path="giving-back" element={<GivingBack />} />
        <Route exact path="life-skills-classes" element={<LifeSkillsClasses />} />
        <Route exact path="nutrition-and-health" element={<NutritionHealth />} />
        <Route exact path="one-on-one-consultations" element={<Consultations />} />
        <Route eact path="parenting-effectiveness" element={<ParentingEffectiveness />} />
        <Route exact path="path-to-college" element={<PathToCollege />} />
        <Route exact path="promoting-academics" element={<PromotingAcademics />} />
        <Route exact path="stem-education" element={<StemEducation />} />
        <Route exact path="violence-prevention" element={<ViolencePrevention />} />
        <Route exact path="writing" element={<Writing />} />
      </Routes>
    </Router>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
