import { API_BASE_URL } from '../constants/constants'

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    // if(localStorage.getItem(ACCESS_TOKEN)) {
    //     headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    // }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

export function getPolls(page, size) {
    page = page || 0;
    //size = size || POLL_LIST_SIZE;
    size = size;

    return request({
        // url: API_BASE_URL + "/polls?page=" + page + "&size=" + size,
        url: API_BASE_URL + "/poll",
        method: 'GET'
    });
}

export function castVote(pollId, choiceId){

    return request({
        url: API_BASE_URL + "/vote",
        method: 'PUT'
    });
}