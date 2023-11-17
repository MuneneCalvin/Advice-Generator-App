import { useEffect, useState } from "react";
import axios from "axios";

import "../Styles/tailwind.css";
import button from "../assets/icon-dice.svg";
import divider from "../assets/pattern-divider-desktop.svg";

export default function AdviceContainer() {
    const [advice, setAdvice] = useState({ id: null, advice: "" });

    const handleGetAdvice = () => {
        axios.get("https://api.adviceslip.com/advice")  // This is the original API
        .then((response) => {
            const newAdvice = response.data.slip || { id: null, advice: "No advice available" };
            setAdvice(newAdvice);
            // console.log("Advice:", newAdvice.advice);
        })
        .catch((error) => {
            console.error("Error fetching advice:", error);  //
        });
    };

    useEffect(() => {
        handleGetAdvice();
    }, []);

    return (
        <main className="flex flex-col justify-center items-center min-h-screen bg-black">
            <div className="rounded-lg bg-gray-700 w-11/12 md:w-4/5 lg:w-2/5 h-custom text-center relative p-4 md:p-8 flex flex-col items-center space-y-4">
                {/* Advice Message */}
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-green-500 mb-2">
                Advice #{advice?.id}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-white">
                {advice.advice}
                </p>

                {/* Divider */}
                <img
                src={divider}
                alt="divider"
                className="mt-4"
                />

                {/* Button */}
                <button
                type="button"
                onClick={handleGetAdvice}
                className="w-16 h-16 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center glow-on-hover"
                >
                <img src={button} alt="dice" />
                </button>
            </div>
        </main>
    );
}
