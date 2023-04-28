import axios from "axios";

const API_BASE = 'https://maps.googleapis.com/maps/api/place'
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

export const getPlaces = async (query) => {
    const response = await axios.get(`${API_BASE}/findplacefromtext/json?input=${query}&inputtype=textquery&fields=photos,formatted_address,name,rating,place_id&key=${API_KEY}`)
    const places = response.data
    return places
}

export const getPlaceDetails = async (placeID) => {
    const response = await axios.get(`${API_BASE}/details/json?place_id=${placeID}&fields=name%2Crating%2Ceditorial_summary%2Cformatted_phone_number%2Cprice_level%2Cphoto%2Cformatted_address%2Cwebsite&key=${API_KEY}`)
    const place = response.data
    return place
}