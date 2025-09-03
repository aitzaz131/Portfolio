import React from "react";

type VideoItem = {
    id: string;          // YouTube video ID (the part after ?v=)
    title: string;
    description?: string;
};

const videos: VideoItem[] = [
    { id: "C9ENBxDd5pE?si=-3g4MT0oR48UuxYG", title: "Cooking World", description: "Trailer / gameplay highlights." },
    { id: "bCHESVLaupk?si=ET5Ia0vMa7Mir8ly", title: "Shopping Mall", description: "Trailer / gameplay highlights." },
    { id: "oXTJsAyLCbE?si=MhCAFJrA9P0mbSP5", title: "Rise of Ooze", description: "Trailer / gameplay highlights." },
    { id: "B_PSZMaJjOM?si=g0ejKhV71skKGhpZ", title: "Clean it", description: "Trailer / gameplay highlights." },
    { id: "TBT3LYkTbU0?si=XbGEQ3WhhyWcH134", title: "Cozy Rooms", description: "Trailer / gameplay highlights." },
    { id: "KbCOwE1lPDA?si=r18Rjiu196x39xiU", title: "Hidden Objects Diorama", description: "Trailer / gameplay highlights." },
    { id: "3pL2vnFVv1Q?si=VnixWyLddT5OHieY", title: "Color Whooper", description: "Trailer / gameplay highlights." },
    { id: "CQS6-ahJKGw?si=XNs5xNYBCmzTetPt", title: "Ninja Gun", description: "Trailer / gameplay highlights." },
    { id: "FGaMHvSE29o?si=PwsFF5CfJbPObVju", title: "Ice hockey", description: "Trailer / gameplay highlights." },
    { id: "Hh4epRMSs2I?si=ZMVnxD2ReilL73F7", title: "Goal Kick", description: "Trailer / gameplay highlights." },
    { id: "IlAsnNkuEdw?si=rSQ0uAv7-MrfF3fe", title: "Mini Games", description: "Trailer / gameplay highlights." },
    { id: "YP3WYPA-3ow?si=8_iNmE5NMwWF3z8-", title: "Auction Hunter", description: "Trailer / gameplay highlights." },
    { id: "6jtjWWffNQs?si=yM6M6c0RCl5tUxJr", title: "Merge Blocks", description: "Trailer / gameplay highlights." },
    // add more...
];
//https://youtu.be/6jtjWWffNQs?si=yM6M6c0RCl5tUxJr
const wrapper: React.CSSProperties = {
    position: "relative",
    paddingBottom: "56.25%", // 16:9
    height: 0,
    overflow: "hidden",
    borderRadius: 8,
};

const iframe: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    border: "none",
};

const grid: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "24px",
};

const Videos: React.FC = () => {
    return (
        <div className="projects-container" id="videos">
            <h1>Game Trailers</h1>

            <div style={grid}>
                {videos.map((v) => (
                    <div className="project" key={v.id}>
                        <div style={wrapper}>
                            <iframe
                                style={iframe}
                                src={`https://www.youtube.com/embed/${v.id}`}
                                title={v.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                        <h2>{v.title}</h2>
                        {v.description && <p>{v.description}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Videos;
