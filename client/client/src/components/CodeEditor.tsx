import React, { useState, useEffect } from "react";
import { FileCode } from "phosphor-react";
import Bg from "./Bg";
import EncryptButtonForAssets from "./EncryptButtonForAssets";
import EncryptButtonForDeepfake from "./EncryptButtonForDeepFake";

const CodeEditor = () => {
  const [logs, setLogs] = useState<React.ReactNode[]>([]);
  const [step, setStep] = useState(0);
  const [audioChosen, setAudioChosen] = useState(false);
  const [audioGender, setAudioGender] = useState<string>("");
  const hasStarted = React.useRef(false);

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const addLog = (msg: React.ReactNode) =>
    setLogs((prev) => [...prev, msg]);

  const clearLogs = () => {
    setLogs([]);
    setStep(0);
    setAudioGender("");
    setAudioChosen(false);
  };

  const handleViewAsset= async()=>{
    addLog(
      <div className="text-neutral-500 mt-4">
        &gt;Here are the assets used in this DeepFake Generation
      </div>
    );
    await delay (800);

    addLog(
      <div className="text-neutral-500 mt-4">
        &gt;You can choose the gender of the voice by selecting Male or Female. 
        View source audio below
      </div>
    );
    await delay(800);
    
    addLog(
      <div className="text-neutral-500 mt-4">
        &gt;Refresh to try again with a new gender
      </div>
    );

    await delay(800);


    addLog(
      <div className="flex flex-col space-y-2 text-[#40ffaa] underline">
        <a
          href={
            audioGender.toLowerCase() === "male"
              ? "/Male_Voice.wav"
              : "/female-voice.mp3"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
        Listen to Audio ({audioGender})
        </a>
        <a href="/Video_Asset.mp4" target="_blank" rel="noopener noreferrer">
        View Source Video
        </a>
      </div>
    );
  }

  const handleAudioSelection = async (gender: string) => {
    setAudioGender(gender);
    setAudioChosen(true);

    // Replace last line (with buttons) with selected audio
    setLogs((prev) => [
      ...prev.slice(0, -1),
      <div>
        <span className="text-[#40ffaa]">$~ Upload audio file:</span>{" "}
        <span className="text-white">audio_{gender.toLowerCase()}.mp3</span>
      </div>,
    ]);

    await delay(800);
    addLog(<div className="text-white">&gt;Uploading audio file...</div>);
    await delay(1000);
    addLog(<div className="text-white">&gt;Received audio successfully</div>);
    await delay(1000);
    addLog(<div className="text-white">&gt;Connecting to AI engine...</div>);
    await delay(1000);
    addLog(<div className="text-white">&gt;Processing animation...</div>);
    await delay(1000);
    addLog(<div className="text-white">&gt;Generating deepfake...</div>);
    await delay(1000);
    addLog(<div className="text-green-400">✅ Deepfake generated!</div>);
    setStep(2);
  };

  const startSimulation = async () => {
    setLogs([]);
    setStep(1);

    await delay(2000);

    addLog(
      <div>
        <span className="text-[#40ffaa]">$~ Upload Video:</span>{" "}
        <span className="text-white">video.mp4</span>
      </div>
    );
    await delay(800);

    addLog(<div className="text-white">&gt;Uploading video file...</div>);
    await delay(1000);

    addLog(
      <div className="text-white">&gt;Received video file successfully</div>
    );
    await delay(1000);

    addLog(
      <div className="flex items-center gap-2">
        <span className="text-[#40ffaa]">$~ Upload audio file:</span>
        <button
          onClick={() => handleAudioSelection("Male")}
          className="px-2 py-1 bg-white text-black rounded text-sm"
        >
          Male
        </button>
        <button
          onClick={() => handleAudioSelection("Female")}
          className="px-2 py-1 bg-white text-black rounded text-sm"
        >
          Female
        </button>
      </div>
    );
  };

  // Only run startSimulation once when the component mounts
  useEffect(() => {
    if (!hasStarted.current){
      hasStarted.current=true;
      console.log("starting simulation");
      startSimulation();
    }
    
  }, []);

  return (
    <Bg>
      <div className="flex min-h-screen flex-col justify-center items-center text-white font-mono px-4">
        {/* Header */}
        <div className="relative bg-black w-[1200px] h-10 rounded-t-md flex items-center justify-center">
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <FileCode size={20} weight="duotone" color="#40ffaa" />
          </div>
          <span className="text-sm">DeepFake-Engine.dev</span>
        </div>

        {/* Terminal Body */}
        <div className="bg-white/10 backdrop-blur-md w-[1200px] h-[500px] rounded-b-md p-4 overflow-y-auto space-y-2">
          <p className="text-[#40ffaa]">
            Hi, take a look at how our deep learning model takes a static image
            and an audio file to generate photorealistic DeepFake videos{" "}
            <span className="animate-pulse">█</span>
          </p>
          <p className="text-neutral-500">
            Checkout assets used here down below
          </p>

          {/* LOG TERMINAL */}
          {logs.map((log, index) => (
            <div key={index}>{log}</div>
          ))}

          {/* Buttons shown after processing */}
          {step === 2 && (
            <div className="flex flex-wrap gap-2 mt-4">
              <button ><EncryptButtonForDeepfake gender={audioGender}  /></button>
              <div onClick={handleViewAsset}><EncryptButtonForAssets/></div>
              
            </div>
          )}
        </div>
      </div>
    </Bg>
  );
};

export default CodeEditor;
