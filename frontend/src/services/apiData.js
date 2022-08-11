const apiUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&sol=1000'

export const getFhazCameraPictures = () => {
    fetch(`${apiUrl}&camera=fhaz`)
    .then((res) => res.json())
    .then((data) => data.results)
    .catch((error) => console.log(error))
}
