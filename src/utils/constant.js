const YOUTUBE_VIDEOS_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=GB&key=" +
  import.meta.env.VITE_YOUTUBE_API_KEY;

export { YOUTUBE_VIDEOS_URL };
