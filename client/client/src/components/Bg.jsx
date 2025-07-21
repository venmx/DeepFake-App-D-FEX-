import GradientText from "../textAnimation/GradientText/GradientText";
import SpotlightCard from "./SpotlightCard/SpotlightCard";


const Bg=({children})=>{
    return(
        <div className="relative h-screen w-full overflow-hidden">
            <video className="absolute top-0 left-0 object-cover -z-10 w-full h-full"
            autoPlay
            loop
            muted >
                <source src="/bg.webm" type="video/webm"/>
                Ypur browser does not support the video tag.
            </video>
            <div className="relative z-10 flex flex-col justify-between min-h-screen text-white">
                {children}
            </div>
        </div>
    );
}

export default Bg;