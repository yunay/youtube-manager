import axios from 'axios'

export class YoutubeService {

    public getVideos(searchString: string) {

        return axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${searchString}&key=AIzaSyCAc86b5gdtJL31lbLlPzENLRNccB6u12k`).then(result => {

            return result.data.items;
        })

    }
}