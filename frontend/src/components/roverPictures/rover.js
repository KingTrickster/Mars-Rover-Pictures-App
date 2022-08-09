import React, { useState, useEffect } from "react";
import './rover.css';
import axios from 'axios';

const Rover = () => {
    const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=edW1ANVHmh1zJuWm5yTZOlGA84Wg2Vxa8w06nBcT&sol=1000&camera='
    const fhazPicturesApi = url  +'fhaz' 
    const rhazPicturesApi = url + 'rhaz'
    const mastPicturesApi = url + 'mast&page=1'
    const chemcamPicturesApi = url + 'chemcam'
    const mahliPicturesApi = url + 'mahli'
    const mardiPicturesApi = url + 'mardi'
    const navcamPicturesApi = url + 'navcam'
    const [fhazPhotos, setFhazPhotos] = useState([])
    const [rhazPhotos, setRhazPhotos] = useState([])
    const [mastPhotos, setMastPhotos] = useState([])
    const [chemcamPhotos, setChemcamPhotos] = useState([])
    const [mahliPhotos, setMahliPhotos] = useState([])
    const [mardiPhotos, setMardiPhotos] = useState([])
    const [navcamPhotos, setNavcamPhotos] = useState([])

    const fetchData = () =>{
        const getFhazPictures = axios.get(fhazPicturesApi)
        const getRhazPictures = axios.get(rhazPicturesApi)
        const getMastPictures = axios.get(mastPicturesApi)
        const getChemcamPictures = axios.get(chemcamPicturesApi)
        const getMahliPictures = axios.get(mahliPicturesApi)
        const getMardiPictures = axios.get(mardiPicturesApi)
        const getNavcamPictures = axios.get(navcamPicturesApi)
        axios.all([getFhazPictures, getRhazPictures, getMastPictures, getChemcamPictures, getMahliPictures, getMardiPictures, getNavcamPictures])
        .then(axios.spread((...allData) => {
            const fhazPictures = allData[0].data.photos
            const rhazPictures = allData[1].data.photos
            const mastPictures = allData[2].data.photos
            const chemcamPictures = allData[3].data.photos
            const mahliPictures = allData[4].data.photos
            const mardiPictures = allData[5].data.photos
            const navcamPictures = allData[6].data.photos

            setFhazPhotos(fhazPictures)
            setRhazPhotos(rhazPictures)
            setMastPhotos(mastPictures)
            setChemcamPhotos(chemcamPictures)
            setMahliPhotos(mahliPictures)
            setMardiPhotos(mardiPictures)
            setNavcamPhotos(navcamPictures)
            

        }))
    }

    useEffect(() => {
        fetchData()
    }, [])
    return(
    <div className="rover-info-container">
        <div className="cameras-list">
            <div className="fhaz-camera pictures-title">
                <li className="clickable">
                    Front Hazard Avoidance Camera
                </li>
                <div className="fhaz-pictures">
            { !fhazPhotos ? 'Loading...' : fhazPhotos?.map((photo) => {
                return <img className="carousel-picture" key={photo.id} photo={photo} src={photo.img_src} alt="Fhaz camera" />;
            })}
        </div>
            </div>
            <div className="rhaz-camera pictures-title">
                <li className="clickable">
                    Rear Hazard Avoidance Camera
                </li>
                <div className="rhaz-pictures pictures-title">
            { !rhazPhotos ? 'Loading...' : rhazPhotos?.map((photo) => {
                return <img className="" key={photo.id} photo={photo} src={photo.img_src} alt="Rhaz camera" />;
            })}
        </div>
            </div>
            <div className="mast-camera pictures-title">
                <li className="clickable">
                    Mast Camera
                </li>
                <div className="mast-pictures">
            { !mastPhotos ? 'Loading...' : mastPhotos?.map((photo) => {
                return <img className="" key={photo.id} photo={photo} src={photo.img_src} alt="mast camera" />;
            })}
        </div>
            </div>
            <div className="chemcam-camera">
                <li className="clickable">
                    Chemistry and Camera Complex
                </li>
            </div>
            <div className="mahli-camera">
                <li className="clickable">
                    Mars Hand Lens Imager
                </li>
            </div>
            <div className="mardi-camera">
                <li className="clickable">
                    Mars Descent Imager
                </li>
            </div>
            <div className="navcam-camera">
                <li className="clickable">
                    Navigation Camera
                </li>
            </div>
        </div>
        {/* <div className="rover-pictures">
            {fhaz.map((item) => (
                <div key={ item.id }>
                    <p>
                        { item.sol }
                    </p>
                </div>
            ))}
        </div> */}
        {/* <div className="pictures">
            { !photos ? 'Loading...' : photos?.map((photo) => {
                return <img className="" key={photo.id} photo={photo} src={photo.img_src} alt="Fhaz camera" />;
                // return <img src={pictures.img_src}></img>
            })}
            <p> 
            </p>
        </div> */}
    </div>
    )
}

export default Rover