import React from "react";
import { TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent:"center",
        paddingTop:"20px",
        height:"100vh"
      }}
    >
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#7BD3EA"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
