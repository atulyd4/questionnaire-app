import httpClient from './client';



export const getallQuestion = () => {
  
  return httpClient('getallquestionnaires');
};