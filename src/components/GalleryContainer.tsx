import "./gallery.css"

interface GalleryContainer {
    galleryData : galleryProps[]
}

interface galleryProps {
    id : string
    alt_description : string,
    urls : {
        full : string,
        raw : string,
        regular : string,
        small: string,
        small_s3: string,
        thumb : string,
    }
}

export default function GalleryContainer({galleryData}:GalleryContainer){



    return(
        <div className={"gallery-container"}>
            {galleryData.map(({id,alt_description,urls})=> (
                <img
                    alt={alt_description}
                    src={urls.small}
                    className={"image"}
                    key={id}
                />
            ))}
        </div>
    )
}
