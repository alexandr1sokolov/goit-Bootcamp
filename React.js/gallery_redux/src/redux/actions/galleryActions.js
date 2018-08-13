import axios from 'axios';
const Gallery = (data) =>({
    type: 'DEFAULT_GALLERY',
    payload: data,
});

const END_POINT = 'https://pixabay.com/api/?key=';
const API_KEY = '5018958-ed49ccd90878e6614abdf24a6';

function getStandartGallery(category){
    return axios.get(`${END_POINT}${API_KEY}&category=${category}&per_page=10`)
}

function getGallery(query){
    return axios.get(`${END_POINT}${API_KEY}&per_page=10&q=${query}`)
}


export const StandartGallerySearchAsync=(category)=> dispatch=>{
    getStandartGallery(category).then(data=>dispatch(Gallery(data.data.hits)));
};

export const GallerySearchAsync=(query)=> dispatch=>{
    getGallery(query).then(data=>dispatch(Gallery(data.data.hits)));
};