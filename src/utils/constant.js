const YOUTUBE_VIDEOS_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  import.meta.env.VITE_YOUTUBE_API_KEY;

const YOUTUBE_SEARCH_URL = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

const OFFSET_LIVE_CHAT = 10;
export { YOUTUBE_VIDEOS_URL,YOUTUBE_SEARCH_URL,OFFSET_LIVE_CHAT };
