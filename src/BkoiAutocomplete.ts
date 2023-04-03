class BkoiAutocomplete {
    AUTOCOMPLETE_API = 'https://api.bmapsbd.com/search/autocomplete/web?search='
    constructor(apiUrl?: string) {
        if(apiUrl){
            this.AUTOCOMPLETE_API = apiUrl
        }
    }

    search(s: string) {
        const { AUTOCOMPLETE_API } = this
        return fetch(`${ AUTOCOMPLETE_API }${s}`)
            .then((response) => response.json())
            .catch(err => { throw err })
    }
}

export { BkoiAutocomplete }
export default BkoiAutocomplete