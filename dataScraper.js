const axios = require('axios')
const cheerio = require('cheerio')

const URL = 'https://visitseattle.org/partners/?frm=partners&ptype=visitors-guide&s=&neighborhood=Capitol+Hill';

axios.get(URL).then(res => {
    let $ = cheerio.load(res.data)
    let results = $('.search-result-preview')

    let singleResult = $('.search-result-preview').html()

    let filteredResults = results.map((index, element) => {
        let doctoredImageUrl = $(element).find('div').attr('style').slice(22, -15)
        return {
            title: $(element).find('a').attr('title'),
            img: doctoredImageUrl
        }
    })
    console.log(filteredResults.get())
})