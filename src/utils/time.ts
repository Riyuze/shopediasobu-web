import moment from "moment"

export const convertDateToString = (dateString: string) => {
    const date = moment(dateString).format('MMMM Do YYYY, h:mm:ss a')
    return date
}