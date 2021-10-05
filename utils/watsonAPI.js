const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const fs = require('fs');
const path = require('path');
require('dotenv').config();


const textToSpeech = new TextToSpeechV1({
  voice: 'pt-BR_IsabelaVoice',
  version: 'v1',
  authenticator: new IamAuthenticator({
    apikey: process.env.TEXT_TO_SPEECH_APIKEY,
  }),
    serviceUrl: process.env.TEXT_TO_SPEECH_URL,
    headers: {
      'X-Watson-Learning-Opt-Out': 'true'
    }
})

const synthesizeAudio = (params, coment) => {
  textToSpeech
    .synthesize(params)
    .then((response) =>{
      const audio = response.result;
      audio.pipe(
        fs.createWriteStream(path.join(__dirname, '..', `/audios/${coment}.mp3`))
      );
    })
    .catch((err) =>{
      console.log("error:", err)
    });
};



module.exports = synthesizeAudio;

  
  