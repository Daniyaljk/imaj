import  axios from "axios";


export const getImages = async ()=>{

    try{
        const {data} = await axios.get("https://api.unsplash.com/search/photos",{
            headers:{
                Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_KEY}`
            },
            params:{
                query : 'cars',
                page : 1,
                per_page : 20,
            }
        })

        return {
            total_pages : data. total_pages,
            total : data. total,
            results : data. results
        }

    }catch (err){
        console.log("getImages",err)

        return {
            total_pages : 0,
            total : 0,
            results : []
        }
    }
}
