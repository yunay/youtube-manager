//require the ffmpeg package so we can use ffmpeg using JS
const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
import { remote } from 'electron'


export const AppInitiailzer = (): Promise<void> => {
    //tell the ffmpeg package where it can find the needed binaries.
    ffmpeg.setFfprobePath("./bin/ffmpeg");

    return Promise.resolve();
}