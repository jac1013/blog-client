import React from "react";
import LoaderGif from "../../assets/Loader.gif";

const GifLoader = () => {
    return(
        <div>
            <img src={LoaderGif} alt="gif"  width="300" height="300" />
        </div>
    )
}

export default GifLoader;