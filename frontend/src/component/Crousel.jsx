import { useEffect, useState } from "react";

function Crousal({ data = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (data.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [data]);

  if (data.length === 0) {
    return <p>No images found</p>;
  }

  return (
    <div className="crousel">
      <img className="img" src={data[currentIndex]}
       
      />
    </div>
  );
}

export default Crousal;