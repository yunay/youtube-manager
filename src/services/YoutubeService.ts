import axios from 'axios'

export class YoutubeService {

    //TODO: Да се замени key да се изчита от конфигурация.
    public getVideos(searchString: string) {

        return axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${searchString}&key=AIzaSyCAc86b5gdtJL31lbLlPzENLRNccB6u12k`).then(result => {
            return result.data.items;
        })

    }

    public getVideoId(videoId:string){
        return axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=contentDetails&key=AIzaSyCAc86b5gdtJL31lbLlPzENLRNccB6u12k`).then(result => {
            return result.data.items;
        })
    }
}