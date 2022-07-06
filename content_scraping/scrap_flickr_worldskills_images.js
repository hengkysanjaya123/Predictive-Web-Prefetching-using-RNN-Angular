var divs = document.getElementsByClassName("view photo-list-photo-view awake")
urls = []
for(let d of divs) {
    urls.push(d.style.backgroundImage.slice(4, -1).replace(/"/g, ""))
}

console.log(urls);
