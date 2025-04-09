import axios from "axios";
const searchImages = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=ugjbx8gD_edl87la8VPeDJyG9Sn3sPdSRMZ8kNv6bUw'

    const response = await axios.get(url, {
        params: {
            query: 'cars'
        }
    })

    console.log(response)
    return response.data.results
}

export default searchImages