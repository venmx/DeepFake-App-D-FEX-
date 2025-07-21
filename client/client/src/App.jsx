import React from 'react';
import './App.css';
import Bg from "./components/Bg.jsx";
import EncryptButton from './components/EncryptedButtonForHomePage.jsx';
import SpotlightCard from './components/SpotlightCard/SpotlightCard.jsx';
import GradientText from './textAnimation/GradientText/GradientText.jsx';
import { Cpu, Code, FileVideo, ShieldCheck } from "phosphor-react";
import Uploads from "./Upload.jsx";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';




function HomePage() {
  const navigate = useNavigate();

  return (
    <Bg>
      <header className='text-4xl font-bold text-center p-4 mt-10'>
        <GradientText
          colors={["#40ffaa", "#000000", "#40ffaa", "#000000", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
          Next-Gen AI Technology for DeepFake Generation
        </GradientText>

        <main className='text-center'>
          <h1 className='text-gray-200 text-sm'>
            D-FEX lets you create stunning, photorealistic AI videos from a single photo using cutting-edge deepfake technology — securely, ethically, and instantly.
          </h1>

          
          <button
            onClick={()=>navigate('/Upload')}
            className='rounded-md text-center  mt-40 p-3 text-sm'
          >
            <GradientText
              colors={["#40ffaa", "#000000", "#40ffaa", "#000000", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              <EncryptButton/>
            </GradientText>
          </button>
        </main>

        <footer className="text-sm text-center p-6 flex justify-center gap-25 mt-10 flex-wrap">
         
          <SpotlightCard className="custom-spotlight-card w-60 h-60 shadow-[0_0_30px_#40ffaa]" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className='flex flex-col items-center gap-3'>
              <Cpu size={30} weight='duotone' color="#40ffaa" />
              <p>Built on the Wav2Lip deep learning model — trained on 100K+ video samples with a SyncNet-based discriminator for precision face-audio alignment.</p>
            </div>
          </SpotlightCard>

          {/* CARD 2 */}
          <SpotlightCard className="custom-spotlight-card w-60 h-60 shadow-[0_0_30px_#40ffaa]" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className='flex flex-col items-center gap-3'>
              <Code size={32} weight='duotone' color="#40ffaa" />
              <p>Powered by cloud-based GPU servers via Google Colab — your laptop stays light while heavy ML lifting happens in the cloud.</p>
            </div>
          </SpotlightCard>

          {/* CARD 3 */}
          <SpotlightCard className="custom-spotlight-card w-60 h-60 shadow-[0_0_30px_#40ffaa]" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className='flex flex-col items-center gap-3'>
              <FileVideo size={32} weight='duotone' color="#40ffaa" />
              <p>Turn any voice or dialogue into a synchronized talking face, with photorealistic results even from a single still image through neural animation.</p>
            </div>
          </SpotlightCard>

          {/* CARD 4 */}
          <SpotlightCard className="custom-spotlight-card w-60 h-60 shadow-[0_0_30px_#40ffaa]" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className='flex flex-col items-center gap-3'>
              <ShieldCheck size={32} weight='duotone' color="#40ffaa" />
              <p>At D-FEX we include optional watermarking, metadata tracking, and content labeling — so creators can innovate without compromising ethics.</p>
            </div>
          </SpotlightCard>
        </footer>
      </header>
    </Bg>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<Uploads />} />
      </Routes>
    </Router>
  );
}

export default App;
