import React, { useState } from "react";

function LiggendeInfocard(props) {
    const [expanded, setExpanded] = useState(false);

    return (
        <section
            className={
                "flex border rounded-xl shadow-md bg-white max-w-2xl p-4 shadow-gray-300 justify-start overflow-hidden flex-wrap " +
                (expanded ? "h-fit " : "max-h-full")
            }
        >
            <img className="p-4" src={props.bilde} alt={props.bildeAlt} />
            <section className={"flex flex-col p-4 self-center items-start gap-4"}>
                <p
                    className={
                        " transition-all duration-300 " +
                        (expanded
                            ? "whitespace-pre-line text-base leading-relaxed"
                            : "line-clamp-6")
                    }
                >
                    {props.undertekstLiggende}
                </p>
                <div className="flex w-full justify-end">
                    {!expanded && (
                        <button
                            className="border-2 px-4 py-2 rounded-xl hover:bg-blue-50 transition"
                            onClick={() => setExpanded(true)}
                        >
                            Les mer
                        </button>
                    )}
                    {expanded && (
                        <button
                            className="border-2 px-4 py-2 rounded-xl hover:bg-blue-50 transition"
                            onClick={() => setExpanded(false)}
                        >
                            Lukk
                        </button>
                    )}
                </div>
            </section>
        </section>
    );
}

export default LiggendeInfocard;
