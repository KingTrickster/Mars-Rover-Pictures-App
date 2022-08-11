import React, { useState, useEffect } from "react";
import './roverPictures.css';
import axios from 'axios';
import { Clickable } from 'react-clickable'
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const RoverPictures = () => {
    const toggleClassFhaz = () => {
        if(!isFhazActive){
            setRhazActive(false)
            setMastActive(false)
            setChemcamActive(false)
            setMahliActive(false)
            setMardiActive(false)
            setNavcamActive(false)
        }
        setFhazActive(!isFhazActive)
    }
    const toggleClassRhaz = () => {
        if(!isRhazActive){
            setFhazActive(false)
            setMastActive(false)
            setChemcamActive(false)
            setMahliActive(false)
            setMardiActive(false)
            setNavcamActive(false)
        }
        setRhazActive(!isRhazActive)
    }
    const toggleClassMast = () => {
        if(!isMastActive){
            setFhazActive(false)
            setRhazActive(false)
            setChemcamActive(false)
            setMahliActive(false)
            setMardiActive(false)
            setNavcamActive(false)
        }
        setMastActive(!isMastActive)
    }
    const toggleClassChemcam = () => {
        if(!isChemcamActive){
            setFhazActive(false)
            setRhazActive(false)
            setMahliActive(false)
            setMastActive(false)
            setMardiActive(false)
            setNavcamActive(false)
        }
        setChemcamActive(!isChemcamActive)
    }
    const toggleClassMahli = () => {
        if(!isMahliActive){
            setFhazActive(false)
            setRhazActive(false)
            setChemcamActive(false)
            setMastActive(false)
            setMardiActive(false)
            setNavcamActive(false)
        }
        setMahliActive(!isMahliActive)
    }
    const toggleClassMardi = () => {
        if(!isMardiActive){
            setFhazActive(false)
            setRhazActive(false)
            setChemcamActive(false)
            setMastActive(false)
            setMahliActive(false)
            setNavcamActive(false)
        }
        setMardiActive(!isMardiActive)
    }
    const toggleClassNavcam = () => {
        if(!isNavcamActive){
            setFhazActive(false)
            setRhazActive(false)
            setChemcamActive(false)
            setMastActive(false)
            setMahliActive(false)
            setMardiActive(false)
        }
        setNavcamActive(!isNavcamActive)
    }
 
    const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=edW1ANVHmh1zJuWm5yTZOlGA84Wg2Vxa8w06nBcT&camera='
    const fhazPicturesApi = url  +'fhaz&sol=1000' 
    const rhazPicturesApi = url + 'rhaz&sol=1000'
    const mastPicturesApi = url + 'mast&sol=1000&page=1'
    const chemcamPicturesApi = url + 'chemcam&sol=2000'
    const mahliPicturesApi = url + 'mahli&sol=2000'
    const mardiPicturesApi = url + 'mardi&sol=3000'
    const navcamPicturesApi = url + 'navcam&sol=2000'
    const [isFhazActive, setFhazActive] = useState(false)
    const [isRhazActive, setRhazActive] = useState(false)
    const [isMastActive, setMastActive] = useState(false)
    const [isChemcamActive, setChemcamActive] = useState(false)
    const [isMahliActive, setMahliActive] = useState(false)
    const [isMardiActive, setMardiActive] = useState(false)
    const [isNavcamActive, setNavcamActive] = useState(false)
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
            const fhazPictures = allData[0].data.photos.slice(0,20)
            const rhazPictures = allData[1].data.photos.slice(0,20)
            const mastPictures = allData[2].data.photos.slice(0,20)
            const chemcamPictures = allData[3].data.photos.slice(0,20)
            const mahliPictures = allData[4].data.photos.slice(0,20)
            const mardiPictures = allData[5].data.photos.slice(0,20)
            const navcamPictures = allData[6].data.photos.slice(0,20)

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
    <div className="rover-info-container ">
        <Row>
            <Col sm>
        <div className="cameras-list">
            <h3>List of Cameras available</h3>
                <li className={isFhazActive ? 'clickable title active': 'clickable title inActive'} id = "fhaz" onClick={toggleClassFhaz}>
                    Front Hazard Avoidance Camera
                </li>
                <li className= {isRhazActive ? 'clickable title active' : 'clickable title inActive'} onClick={toggleClassRhaz}>
                    Rear Hazard Avoidance Camera
                </li>
                <li className={isMastActive ? 'clickable title active' : 'clickable title inActive'} onClick={toggleClassMast}>
                    Mast Camera
                </li>
                <li className={isChemcamActive ? 'clickable title active' : 'clickable title inActive'} onClick={toggleClassChemcam}>
                    Chemistry and Camera Complex
                </li>
                <li className={isMahliActive ? 'clickable title active' : 'clickable title inActive'} onClick={toggleClassMahli}>
                    Mars Hand Lens Imager
                </li>
                <li className={isMardiActive ? 'clickable title active' : 'clickable title inActive'} onClick={toggleClassMardi}>
                    Mars Descent Imager
                </li>
                <li className={isNavcamActive ? 'clickable title active' : 'clickable title inActive'} onClick={toggleClassNavcam}>
                    Navigation Camera
                </li>
            </div>
            </Col>
            <Col >
            <div className="camera-container ">
            <div className="fhaz-pictures grid">
                   
                   { !fhazPhotos ? '' : fhazPhotos?.map((photo) => {
                       return <img className={isFhazActive ? 'carousel-picture item': 'hidden'} key={photo.id} photo={photo} src={photo.img_src} alt="Fhaz camera" />;
                   })}
               </div>
               <div className="rhaz-pictures grid">
                   { !rhazPhotos ? 'Loading...' : rhazPhotos?.map((photo) => {
                       return <img className={isRhazActive ? 'carousel-picture item': 'hidden'} key={photo.id} photo={photo} src={photo.img_src} alt="Rhaz camera" />;
                   })}
               </div>
               <div className="mast-pictures  grid">
                   { !mastPhotos ? 'Loading...' : mastPhotos?.map((photo) => {
                       return <img className={isMastActive ? 'carousel-picture item': 'hidden'} key={photo.id} photo={photo} src={photo.img_src} alt="mast camera" />;
                   })}
               </div>
               <div className="chemcam-pictures  grid">
                   { !chemcamPhotos ? 'Loading...' : chemcamPhotos?.map((photo) => {
                       return <img className={isChemcamActive ? 'carousel-picture item': 'hidden'} key={photo.id} photo={photo} src={photo.img_src} alt="chemcam camera" />;
                   })}
               </div>
               <div className="mahli-pictures  grid">
                   { !mahliPhotos ? 'Loading...' : mahliPhotos?.map((photo) => {
                       return <img className={isMahliActive ? 'carousel-picture item': 'hidden'} key={photo.id} photo={photo} src={photo.img_src} alt="mahli camera" />;
                   })}
               </div>
               <div className="mardi-pictures  grid">
                   { !mardiPhotos ? 'Loading...' : mardiPhotos?.map((photo) => {
                       return <img className={isMardiActive ? 'carousel-picture item': 'hidden'} key={photo.id} photo={photo} src={photo.img_src} alt="mardi camera" />;
                   })}
               </div>
               <div className="navcam-pictures  grid">
                   { !navcamPhotos ? 'Loading...' : navcamPhotos?.map((photo) => {
                       return <img className={isNavcamActive ? 'carousel-picture item': 'hidden'} key={photo.id} photo={photo} src={photo.img_src} alt="navcam camera" />;
                   })}
               </div>
        </div>
        </Col>
        </Row>
    </div>
    )
}

export default RoverPictures