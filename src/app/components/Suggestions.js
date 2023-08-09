// import { useEffect, useState } from "react";
import Image from "next/image";
import avatar from "/public/admin.jpg";
import avatar1 from "/public/admin.jpg";
import avatar2 from "/public/admin.jpg";
import avatar3 from "/public/admin.jpg";
const Suggestions = () => {

    // const [suggestions, setSuggestions] = useState([])

    // useEffect(() => {
    //     const suggestions = [...Array(5)].map((_, i) => ({...NoFallbackError.helpers.contextualCard(), id:1}));

    //     setSuggestions(suggestions)
    // }, [])

    const Suggestions1 = [
        avatar,
        avatar1,
        avatar2,
        avatar3,
    ]
    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
                <button className="text-red-400 font-bold">See All</button>
            </div>

            {Suggestions1.map((profile, idx) => (
                <div
                    key={idx}
                    className="flex items-center justify-between mt-3"
                >
                    <Image className="w-10 h-10 rounded-full border p-[2px]" src={profile} alt="" />
                </div>
            ))}
        </div>
    );
};

export default Suggestions;