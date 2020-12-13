import moment from "moment";
import { ContentDetails, YoutubeResult } from "./YoutubeResult";

export class AudioPlayerResult {

    constructor(result: YoutubeResult, contentDetails: ContentDetails, currentTime: moment.Duration, isPlaying: boolean) {
        this.youtubeResult = result;
        this.contentDetails = contentDetails;
        this.currentTime = currentTime;
        this.isPlaying = isPlaying;
    }

    public youtubeResult: YoutubeResult;

    public contentDetails: ContentDetails;

    public currentTime: moment.Duration;

    public isPlaying: boolean
}