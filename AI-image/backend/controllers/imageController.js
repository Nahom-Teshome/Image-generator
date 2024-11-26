const Together = require('together-ai')
require('dotenv').config()

const apikey = process.env.TOGETHER_API_KEY
const together = new Together({apikey})

async function sendQuery(req,res){
    const {query} = req.body

    const response = await together.images.create({
        model:"black-forest-labs/FLUX.1-dev",
        prompt:query,
        width: 1024,
        height: 768,
        steps: 28,
        n: 1,
        response_format: "b64_json"
    })

    const data = response.data[0].b64_json

    res.status(200).json({image:data})
}

module.exports ={sendQuery}