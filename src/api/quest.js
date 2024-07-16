import httpClient from './client';

export const getallQuestion = () => {
  return httpClient('getallquestionnaires');
};

export const addQuestionnaireResponse = (response) => {
  return httpClient('managequestionnaireresponse', {
    method: 'POST',
    body: {
      id: 'COVID',
      request: JSON.stringify(response),
      "operationType": "Add"
    }
  })
}