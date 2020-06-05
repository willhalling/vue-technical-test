/* eslint-disable no-debugger */

import axios from 'axios'

export default {
  /* #####################################################################
  *
  *      Videos
  *
  * #####################################################################
  */
  getAllVideos(api) {
    return axios.get(api).then((response) => {
      return response.data
    })
  },
  getSingleVideo(apiParams) {
    return axios.get(apiParams.url).then((response) => {
      const data = response.data.data
      return data[apiParams.index]
    })
  }
}
