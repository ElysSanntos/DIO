// const {Configuration, OpenAIApi} = require("openai");

// module.exports = class openai{
//     static configuration(){
//         const configuration = new Configuration({
//             apiKey: process.env.OPEN_IA_KEY
//         });
//             return  new OpenAIApi(configuration);
//     }

//        static textCompletion({prompt}){
//         return{
//         model: "gpt-4-1106-preview",
//         prompt: `${prompt}`,
//         temperature: 0.5,
//         max_tokens: 3500,
//         top_p: 1,
//         frequency_penalty: 0.5,
//         presence_penalty: 0,
//         }
//     }

// }
const { Configuration, OpenAIApi } = require("openai");

module.exports = class openai {
  static configuration() {
    const configuration = new Configuration({
      apiKey: process.env.OPEN_IA_KEY
    });
    return new OpenAIApi(configuration);
  }

  static textCompletion({ prompt }) {
    return {
      model: "gpt-4-1106-preview",
      prompt: `${prompt}`,
      temperature: 0.5,
      max_tokens: 3500,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    };
  }
};
