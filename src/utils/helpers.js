import moment from "jalali-moment";
import jwtDecode from "jwt-decode";

export const decodeToken = (token) => {
    return jwtDecode(token);
}

export const numberFormat = (number) => {
    return new Intl.NumberFormat().format(number)
}

export const formatDate = (date) => {
    return moment(date).locale("fa").format("YYYY/MM/DD");
};
