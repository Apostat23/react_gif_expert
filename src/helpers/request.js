export const request  = async(subject) => {
  try{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI (subject)}&limit=9&api_key=lHHwNJKzpGjwI58XwybGXMAlNY8P7oMl`
    const response = await fetch(url)
    const {data} = await response.json()
    const images = data.map( image => {
      return { id: image.id, title: image.title, url: image.images?.downsized_medium.url }
    })
    return images
  } catch(error) { return error.messages}
 }