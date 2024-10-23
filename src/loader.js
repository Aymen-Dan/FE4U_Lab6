import { useState, CSSProperties } from "react";
import RotateLoader from "react-spinners/RotateLoader";

const override: CSSProperties = {
  //display: "block",
  margin: "0 500 100 100",
};

function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#866546");

  return (
    <div className="sweet-loading">


      <RotateLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;