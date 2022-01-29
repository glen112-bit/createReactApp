const apiKey = 'ZQAsg96yoB0d1XX7OyJrcbS32xAaDRz7'

const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const {images, title, id} = image
      const { url } = images.downsized
      return { title, id, url }
    })
    return gifs
  }
  return []
}

export default function getGifs ({limit = 25, keyword = 'morty'} = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&${limit}&offset=0&rating=G&lang=en` 

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}
