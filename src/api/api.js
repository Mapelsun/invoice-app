import axios from "axios";
import config from "../config";

export default {
  getInvoices: () => {
    let method = "get";
    let url = config.baseUrl + "/invoices";
    return axios({ method, url });
  },
};
