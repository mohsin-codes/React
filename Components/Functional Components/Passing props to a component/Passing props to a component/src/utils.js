function getImageURL(imageId){
    var imageUrl = `https://i.imgur.com/${imageId}.jpg` 
    console.log(imageUrl);
    return imageUrl;
}

export default getImageURL;