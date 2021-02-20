import http from "../http-common";
import axios from "axios";

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return axios.post('https://bot9p1l589.execute-api.us-east-2.amazonaws.com/dev/upload',formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getFiles() {
    return new Promise(resolve => {});
  }
}

export default new UploadFilesService();
