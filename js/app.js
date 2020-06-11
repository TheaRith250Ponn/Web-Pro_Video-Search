//Thearith Ponn | Sec: 1 | ID: 5988250

const API_KEY = 'AIzaSyCxdbCQI5SIYt4Rd_vPckFH2-hWl45wrmg'// the api key that i got from goodle api
const BASE_URL = `https://www.googleapis.com/youtube/v3/search`//Base URL to sent API

//A search function
function search() {
    //To send API to request information 
    $.get(BASE_URL, {
        //The imformation that youtube request
        q: $('#Search-Box').val(),//To search key word 
        part: 'snippet', 
        maxResults: 20, // get the maximun result 20 video 
        key: API_KEY // TheAPI key
    }).done(function (response) {
        //if it's success, do this function
        var element = $('#resultSearch') // get id from HTML
        element.html('') // to clear the resultSearch area to be emtyp every time that users search new things
        $.each(response.items, function (index, item) {
            console.log(item)
            //loop to spread each result of searching (20 items)
            //to show the video title
            //to show the image of video
            //to show the url with emneded
            let html = `
                    <a>Title: ${item.snippet.title}</a>
                    <div class="bg" style="background-image:url(${item.snippet.thumbnails.high.url})"></div>
                    <a>URL: </a>
                    <a href="https://www.youtube.com/embed/${item.id.videoId}">https://www.youtube.com/embed/${item.id.videoId}</a></br></br>
                    `
            //CANNOT PLAY SOME VIDEO FROM YOUTUBE
            // For example Seacrhing "Lover" but cannot play video
            //Searching for "Tell me goodbye" can play the video
        element.append(html) //To add each card in to resultSearch area
        })
    });
}