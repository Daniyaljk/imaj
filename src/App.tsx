import {useEffect,useState} from "react";
import {getImages} from "./api";
import {CLog} from "./utils/cLog.ts";
import GalleryContainer from "./components/GalleryContainer.tsx";
import SearchBox from "./components/SearchBox.tsx";


function App() {
    const [images, setImages] = useState([])

    useEffect(()=>{
        (async ()=>{
            const {total_pages,total,results} = await getImages();

            setImages(results)
        })()
    },[])

    // CLog(images)

    return (
        <>
            <SearchBox />

            <GalleryContainer galleryData={images} />

            <h1>pagination</h1>
        </>
    )
}

export default App
