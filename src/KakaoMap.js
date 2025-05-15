import React from 'react';
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";

const KakaoMap = () => {
  const locations = [
    { name: '학생회관', lat: 37.587508265803436, lng: 126.99327462014972 },
    { name: '금잔디광장', lat: 37.58804884662883, lng: 126.99301982043244 },
    { name: '중앙학술정보관', lat: 37.58846336587846, lng: 126.99417465968467 },
    { name: '중앙학술정보관 열람실', lat: 37.58814351433764, lng: 126.99419166803891 },
    { name: '교수회관', lat: 37.58869306625981, lng: 126.99318959578807 },
    { name: '경영관', lat: 37.588566892572075, lng: 126.99261216750372 },
    { name: '다산경제관', lat: 37.589075927136335, lng: 126.99220450986357 },
    { name: '호암관', lat: 37.58830106752593, lng: 126.99211401220931 },
    { name: '퇴계인문관', lat: 37.58914345839881, lng: 126.99157610762403 },
    { name: '농구코트', lat: 37.5875442393276, lng: 126.99219900850849 },
    { name: '대운동장', lat: 37.58743157606342, lng: 126.99162725034493 },
    { name: '수선관', lat: 37.58789102828314, lng: 126.99089691399716 },
    { name: '수선관 별관', lat: 37.58814782244803, lng: 126.99104407243036 },
    { name: '법학관', lat: 37.58754411850516, lng: 126.99054596824028 },
    { name: '600주년기념관', lat: 37.58741371767798, lng: 126.99434457409652 },
    { name: '국제관', lat: 37.58685964861994, lng: 126.99529001053546 },
  ];

  const [selected, setSelected] = React.useState(null);
  const [showInputBox, setShowInputBox] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [complaints, setComplaints] = React.useState(
    Array(locations.length).fill().map(() => [])
  );

  const handleAddComplaint = (index) => {
    if (!inputValue.trim()) return;
    const updated = [...complaints];
    updated[index].push({ id: Date.now(), text: inputValue.trim(), likes: 0 });
    setComplaints(updated);
    setInputValue("");
    setShowInputBox(false);
  };

  const handleLike = (locIdx, complaintId) => {
    const updated = complaints.map((compList, idx) =>
      idx === locIdx
        ? compList.map((c) =>
            c.id === complaintId ? { ...c, likes: c.likes + 1 } : c
          )
        : compList
    );
    setComplaints(updated);
  };

  return (
    <div style={{ width: "100%", height: "900px" }}>
      <Map
        center={{ lat: 37.5880, lng: 126.9930 }}
        style={{ width: "100%", height: "100%" }}
        level={3}
      >
        {locations.map((loc, index) => (
          <React.Fragment key={index}>
            <MapMarker
              position={{ lat: loc.lat, lng: loc.lng }}
              onClick={() => {
                setSelected(index);
                setShowInputBox(false);
              }}
            />
            {selected === index && (
              <CustomOverlayMap position={{ lat: loc.lat, lng: loc.lng }}>
                <div
                  style={{
                    position: "relative",
                    background: "white",
                    border: "1px solid #888",
                    padding: "10px",
                    borderRadius: "8px",
                    width: "800px",
                    height: "500px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.3)"
                  }}
                >
                  {/* Close button */}
                  <button
                    onClick={() => setSelected(null)}
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      background: "transparent",
                      border: "none",
                      fontSize: "16px",
                      cursor: "pointer"
                    }}
                  >
                    ✕
                  </button>

                  {/* Title */}
                  <strong>{loc.name}</strong>

                  {/* Floating '+' Button */}
                  <button
                    onClick={() => setShowInputBox(true)}
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      right: "10px",
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      background: "#4CAF50",
                      color: "white",
                      border: "none",
                      fontSize: "20px",
                      cursor: "pointer",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                    }}
                  >
                    +
                  </button>

                  {/* Input Popup */}
                  {showInputBox && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "50px",
                        right: "10px",
                        background: "white",
                        padding: "10px",
                        borderRadius: "6px",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
                        width: "250px"
                      }}
                    >
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleAddComplaint(index);
                        }}
                        placeholder="Write a complaint"
                        style={{
                          width: "100%",
                          marginBottom: "6px",
                          padding: "6px"
                        }}
                      />
                      <button
                        onClick={() => handleAddComplaint(index)}
                        style={{
                          background: "#2196F3",
                          color: "white",
                          border: "none",
                          padding: "4px 8px",
                          fontSize: "12px",
                          borderRadius: "4px",
                          cursor: "pointer",
                          maxWidth: "100%",
                          display: "block",
                          margin: "4px auto 0"  // adds top spacing and centers the button
                        }}
                      >
                        Submit
                      </button>

                    </div>
                  )}

                  {/* Post-it Notes Section */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "flex-start",
                      gap: "10px",
                      padding: "10px"
                    }}
                  >
                    {complaints[index]
                      .slice()
                      .sort((a, b) => b.likes - a.likes)
                      .map((c) => (
                        <div
                          key={c.id}
                          style={{
                            background: "#fffbe7",
                            border: "1px solid #ddd",
                            borderRadius: "6px",
                            padding: `${8 + c.likes}px`,
                            fontSize: `${12 + c.likes}px`,
                            fontWeight: "bold",
                            boxShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                            wordWrap: "break-word",
                            overflowWrap: "break-word",
                            whiteSpace: "pre-wrap",
                            minWidth: "100px",
                            maxWidth: "140px",
                            height: "auto",
                            flexShrink: 0,
                            alignSelf: "flex-start"
                          }}
                        >
                          <div>{c.text}</div>
                          <button
                            onClick={() => handleLike(index, c.id)}
                            style={{
                              marginTop: "6px",
                              fontSize: "12px",
                              background: "transparent",
                              border: "none",
                              cursor: "pointer"
                            }}
                          >
                            👍 {c.likes}
                          </button>
                        </div>
                      ))}
                  </div>
                </div>
              </CustomOverlayMap>
            )}
          </React.Fragment>
        ))}
      </Map>
    </div>
  );
};

export default KakaoMap;