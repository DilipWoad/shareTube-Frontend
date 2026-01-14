const YOUTUBE_VIDEOS_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  import.meta.env.VITE_YOUTUBE_API_KEY;

const YOUTUBE_SEARCH_URL = "https://thingproxy.freeboard.io/fetch/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

const OFFSET_LIVE_CHAT = 10;

const LOWER_ICON = "https://static-00.iconduck.com/assets.00/chevron-down-icon-512x311-8kvkjj1g.png"
const UPPER_ICON = "https://static-00.iconduck.com/assets.00/chevron-up-icon-512x311-nptyyto0.png"
export { YOUTUBE_VIDEOS_URL,YOUTUBE_SEARCH_URL,OFFSET_LIVE_CHAT,LOWER_ICON,UPPER_ICON };
