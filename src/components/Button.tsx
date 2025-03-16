import React from "react";

export default function Button() {
    return (
        <div className="m-0 flex h-screen w-screen items-center justify-center bg-[#318CFE]">
            <div className="relative h-20 w-[250px] cursor-pointer rounded-full border-2 border-[#3d93ff] bg-[#54ABFB] opacity-80">
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-[#316FE] text-2xl font-medium text-blue-500 shadow-[-20px_30px_16px_#1B6CFB,-40px_60px_32px_#1b6cfb,inset_-6px_6px_10px_#1B6CFB,inset_2p_6px_10px_#1A74E5,inset_20px_-20px_22px_#afd5ff,inset_40px_-40px_44px_#a8ceff">Click Me</div>
            </div>
        </div>
    )
}