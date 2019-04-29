import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyCJpMlKrjQ6G9Jf7I8jp1RObNp4C7LvRJc");

export async function getLatLng(address) {
  try {
    const response = await Geocode.fromAddress(address);
    const { location } = response.results[0].geometry;
    const { lat: latitude, lng: longitude } = location;

    return { latitude, longitude };
  } catch (e) {
    console.error(e);
    // Return Default lat, lng value
    // return { lat: 37.33939, lng: -121.89696 };
    return { latitude: 37.33939, longitude: -121.89696 };
  }
}
