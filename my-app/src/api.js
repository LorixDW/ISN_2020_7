import axios from "axios";

export default axios.create({
    baseURL: `https://www.vyatsu.ru/internet-gazeta.html/page:1`
})