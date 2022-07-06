// import axios from 'axios';
import axios from "axios";
import { Tweet } from "../../store/ducks/tweets/contracts/state";

export const TweetApi = {
  async fetchTweet(id: string): Promise<Tweet> {
    const { data } = await axios.get(`/tweets?_id=${id}`);
    return data;
  },
};
