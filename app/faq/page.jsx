"use client";
import { useState, useRef } from "react";
import { faqs } from "@/constants/data.js";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const contentRefs = useRef({});

  const toggleSingleSelection = (id) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/backgrounds/faq.jpeg')" }}
    >
      <div className="h-screen inline-flex items-center justify-center mt-12 mb-16">
        <div className="max-w-[80vw] md:max-w-2xl lg:max-w-4xl bg-white/10 p-6 rounded-xl shadow-lg border border-white/20 max-h-[95vh] overflow-y-auto scroll-hidden">

          {faqs.length > 0 ? (
            faqs.map((item) => (
              <div
                key={item.id}
                className="mb-2 p-4 rounded-lg bg-white/10 border border-white/10 text-white transition-all duration-300 shadow-md"
              >
                <button
                  onClick={() => toggleSingleSelection(item.id)}
                  className="flex justify-between items-center w-full cursor-pointer font-medium focus:outline-none"
                  aria-expanded={selected === item.id}
                >
                  <h1 className="text-md text-white md:text-2xl">{item.title}</h1>
                  <span
                    className={`text-md md:text-2xl font-bold transition-transform duration-300 ${selected === item.id ? "rotate-45" : "rotate-0"
                      }`}
                  >
                    +
                  </span>
                </button>
                <div
                  ref={(el) => (contentRefs.current[item.id] = el)}
                  className="overflow-hidden transition-[height] duration-300 ease-in-out"
                  style={{
                    height: selected === item.id ? contentRefs.current[item.id]?.scrollHeight + "px" : "0px",
                    opacity: selected === item.id ? 1 : 0,
                  }}
                >
                  <p className="text-white text-base md:text-xl mt-2">{item.answer}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-white text-center">No Data Found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
