import React, { useEffect } from "react";
//import Nabvar from "./components/nabvar/Nabvar"
import Home from "./pages/home/Home.jsx";
import { getDataFromApi } from "./api/Api.js";
import useFetch from "./hooks/useFetch";
import { useSelector, useDispatch } from "react-redux";
import { imgconfig } from "./store/Slice.js";
import Detalis from "./pages/detalis/Detalis.jsx";
import Videopopup from "./components/videopopup/Videopopup.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nabvar from "./components/navbar/Nabvar.jsx";
import Searchresult from "./pages/searchresult/Searchresult.jsx";
import Explore from "./pages/explore/Explore.jsx";
import Footer from "./components/footer/Footer.jsx";

const App = () => {
    const dispatch = useDispatch();

    const Fetchimgconfig = async () => {
        const { images } = await getDataFromApi("/configuration");
        // console.log(images)
        const img_url = images?.secure_base_url + "original";
        dispatch(imgconfig(img_url));
    };

    useEffect(() => {
        Fetchimgconfig();
    }, []);

    return (
        <BrowserRouter>
            <Nabvar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:mediaType/:id" element={<Detalis />} />
                <Route path="/search/:query" element={<Searchresult />} />
                <Route path="/explore/:mediaType" element={<Explore />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
