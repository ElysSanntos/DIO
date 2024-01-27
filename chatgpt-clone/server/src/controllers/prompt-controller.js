const openai = require("../config/openia")
const inputPrompt = require("../models/input-prompt")


module.exports = {
    async sendText(req, res){ //A API recebe uma requisição (req) e dá uma resposta (res)
        const openaiAPI = openai.configuration() //Resgata a instancia da OpenIA já criada 
        const inputModel = new inputPrompt(req.body)

        try {
            const response = await openaiAPI
            .createCompletion(
                openai
                .textCompletion(inputModel)
            )

            return res.status(200).json({
                sucess: true,
                data: response.data.choices[0].text
            })
            
        } catch (error) {
            return res.status(400).json({
                sucess: false,
                error: error.response ? error.response.data : "There was an inssue on the server"
            })
        }
    }
}