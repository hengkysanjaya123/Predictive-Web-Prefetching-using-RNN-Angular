images = document.getElementsByTagName('img')

urls = []
for (image of images) {
    
    if(image.src.startsWith("url")){
        urls.append(image.src)
    }
}

console.log(urls);
