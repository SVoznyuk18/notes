import moment from 'moment';

export const formatDate = (noteDate) => {
    const dayMs = 24 * 60 * 60 * 1000;
    const currentDate = Date.now();
    let formatedDate = '';

    if ((currentDate - noteDate) > dayMs) {
        formatedDate = moment(noteDate).format('MM/DD/YY');
    } else {
        formatedDate = moment(noteDate).format('h:mm a');
    }

    return formatedDate;
}

export const formatFullDate = (noteDate) => {
    if (noteDate) {
        const formatedFullDate = moment(noteDate).format('MMMM Do YYYY, h:mm a');
        return formatedFullDate;
    }
    
    return false;
}