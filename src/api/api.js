import axios from "axios";
import config from "../config";

export default {
  getInvoices: () => {
    let method = "get";
    let url = config.baseUrl + "/invoices";
    return axios({ method, url });
  },
  addInvoice: (data) => {
    let method = "post";
    let url = config.baseUrl + "/invoices";
    return axios({ method, url, data });
  },
  deleteInvoice: (id) => {
    let method = "delete";
    let url = config.baseUrl + `/invoices/${id}`;
    return axios({ method, url });
  },
};
