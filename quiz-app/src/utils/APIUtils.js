import { API_BASE_URL, ACCESS_TOKEN } from '../constants/constants';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json'
        // 'Access-Control-Allow-Origin': '*'
    })

    if(localStorage.getItem(ACCESS_TOKEN)){
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }
    
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

export function createPoll(pollData) {
    return request({
        url: API_BASE_URL,
        method: 'POST'
    });
}

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/signin",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

export function getCurrentUser(){
    if(!localStorage.getItem(ACCESS_TOKEN)){
        return Promise.reject("No Access token available");
    }

    return request({
        url : API_BASE_URL + "/user/me",
        method : 'GET'
    });
}