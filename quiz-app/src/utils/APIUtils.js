import { API_BASE_URL } from '../constants/constants';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json'
        // 'Access-Control-Allow-Origin': '*'
    })
    
    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    const requestOptions = {
        method: options.method
    }

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

export function castVote(voteData){

    return request({
        url: API_BASE_URL +"/poll"+ "/vote/" + voteData.id + "/" + voteData.choiceId,
        method: 'PUT'
    });
}