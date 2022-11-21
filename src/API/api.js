class Api {
    constructor (url, headers) {
        this._url = url
        this._headers = headers
    }

    checkResponse (res) {
        return new Promise((resolve, reject) => {
            if (res.status === 204) {
                return resolve(res)
            }
            const func = res.status < 400 ? resolve : reject
            res.json().then(data => func(data))
        })
    }

    // signin ({ email, password }) {
    //     return fetch(
    //         '/api/auth/token/login/',
    //         {
    //             method: 'POST',
    //             headers: this._headers,
    //             body: JSON.stringify({
    //                 email, password
    //             })
    //         }
    //     ).then(this.checkResponse)
    // }
    //
    // signout () {
    //     const token = localStorage.getItem('token')
    //     return fetch(
    //         '/api/auth/token/logout/',
    //         {
    //             method: 'POST',
    //             headers: {
    //                 ...this._headers,
    //                 'authorization': `Token ${token}`
    //             }
    //         }
    //     ).then(this.checkResponse)
    // }

    signup ({ username, email, password}) {
        return fetch(
            `/api/authentication/registrationUser`,
            {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                    username, email, password
                })
            }
        ).then(this.checkResponse)
    }
}

export default new Api(process.env.API_URL || 'https://localhost:5001', { 'content-type': 'application/json' })
