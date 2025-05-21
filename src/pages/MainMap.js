import React from 'react';
import { Map, MapMarker} from "react-kakao-maps-sdk";
import ComplainBoard from "../components/ComplainBoard";

const MainMap = () => {
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

  return (
    <div style={{ width: "100%", height: "900px" }}>
      <Map
        center={{ lat: 37.5880, lng: 126.9930 }}
        style={{ width: "100%", height: "100%" }}
        level={2}
      >
        {locations.map((loc, index) => (
          <React.Fragment key={index}>
            <MapMarker
              position={{ lat: loc.lat, lng: loc.lng }}
              onClick={() =>
                setSelected(loc)}
            />
            </React.Fragment>
        ))}
            {selected && (
            <ComplainBoard isOpen={true} buildingName={selected.name}
            onClose={() => setSelected(null)}/>
        )}
      </Map>
    </div>
  );
};

export default MainMap;