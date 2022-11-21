class Api {
    constructor (url, headers) {
        this._url = url
        this._headers = headers
    }

    getRecipes ({
                    page = 1,
                    limit = 6,
                 } = {}) {
        const token = localStorage.getItem('token')
        const authorization = token ? { 'authorization': `Token ${token}` } : {}
        return fetch(
            `/api/hotels/advertisements/`,
            {
                method: 'GET',
                headers: {
                    ...this._headers,
                    ...authorization
                }
            }
        ).then(this.checkResponse)
    }

}

export default new Api(process.env.API_URL || 'https://localhost:5001', { 'content-type': 'application/json' })
