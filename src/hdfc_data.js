export default{
    "resourceType": "Questionnaire",
    "id": "hdfc-123456",
    "meta": {
      "profile": [
        "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnairerequest"
      ]
    },
    "status": "active",
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "94500-6",
          "display": "COVID-19 assessment panel"
        }
      ]
    },
    "date": "2024-05-18",
    "description": "HDFC Questionnaire for assessing COVID-19 management in patients.",
    "item": [
      {
        "linkId": "1",
        "text": "General Information",
        "type": "group",
        "item": [
          {
            "linkId": "1.1",
            "text": "Patient Name",
            "type": "string"
          },
          {
            "linkId": "1.2",
            "text": "Date of Birth",
            "type": "date"
          },
          {
            "linkId": "1.3",
            "text": "Gender",
            "type": "choice",
            "answerOption": [
              {"valueCoding": {"code": "M", "display": "Male"}},
              {"valueCoding": {"code": "F", "display": "Female"}},
              {"valueCoding": {"code": "O", "display": "Other"}}
            ]
          }
        ]
      },
      {
        "linkId": "3",
        "text": "COVID-19 diagnosis",
        "type": "group",
        "item": [
          {
            "linkId": "3.1",
            "text": "Have you travelled outside India in the last 15 days or do you plan to travel outside India during the next 3 months?",
            "type": "boolean"
          },
          {
            "linkId": "3.2",
            "text": "Country:",
            "type": "string",
            "enableWhen": [
              {
                "question": "3.1",
                "operator": "=",
                "answerBoolean": true
              }
            ]
          },
          {
            "linkId": "3.3",
            "text": "City:",
            "type": "string",
            "enableWhen": [
              {
                "question": "3.1",
                "operator": "=",
                "answerBoolean": true
              }
            ]
          },
          {
            "linkId": "3.4",
            "text": "Date of travel:",
            "type": "date",
            "enableWhen": [
              {
                "question": "3.1",
                "operator": "=",
                "answerBoolean": true
              }
            ]
          },
          {
            "linkId": "3.5",
            "text": "Have you been tested positive for COVID-19* or are awaiting results of such a test or been advised to be under quarantine due to COVID-19*?",
            "type": "boolean"
          },
          {
            "linkId": "3.6",
            "text": "Date of diagnosis test",
            "type": "date",
            "enableWhen": [
              {
                "question": "3.5",
                "operator": "=",
                "answerBoolean": true
              }
            ]
          },
          {
            "linkId": "3.7",
            "text": "Were you hospitalised ",
            "type": "boolean",
            "enableWhen": [
              {
                "question": "3.5",
                "operator": "=",
                "answerBoolean": true
              }
            ]
          },
          {
            "linkId": "3.8",
            "text": "Provide date of negative test report or hospital discharge date or last day of quarantine whichever is later ",
            "type": "date",
            "enableWhen": [
              {
                "question": "3.5",
                "operator": "=",
                "answerBoolean": true
              }
            ]
          },
          {
            "linkId": "3.9",
            "text": "Details# of subsequent tests done post hospitalisation/ quarantine during recovery like RTPCR, CXR, HRCT, Ddimer etc",
            "type": "string",
            "enableWhen": [
              {
                "question": "3.5",
                "operator": "=",
                "answerBoolean": true
              }
            ]
          },
          {
            "linkId": "3.10",
            "text": "#Please submit copies of hospitalisation reports, Discharge Summary, investigation reports like RTPCR, CXR, HRCT, Ddimer, etc along with this form",
            "type": "display",
            "enableWhen": [
              {
                "question": "3.5",
                "operator": "=",
                "answerBoolean": true
              }
            ]
          },
          {
            "linkId": "3.11",
            "text": "Have you made a full recovery to good health without complications and returned to normal physical function and activities?",
            "type": "boolean",
            "enableWhen": [
              {
                "question": "3.5",
                "operator": "=",
                "answerBoolean": true
              }
            ]
          },
          {
            "linkId": "3.12",
            "text": "Are you currently suffering from or in the last 1 month, have suffered from fever, persistent dry cough, sore throat, breathing dificulties, body pain, fatigue, conjunctivitis,gastro-intestinal symptoms (vomiting/diarrhoea) or been in contact with an individual suspected or confirmed to have COVID-19 *?",
            "type": "boolean"
          },
          {
            "linkId": "3.13",
            "text": " Are you a Healthcare professional, volunteer or enrolled as a Corona virus Warrior in hospital/ clinic with COVID-19* facility and/ or treating/ in contact with COVID-19* infected individuals or contaminated material?",
            "type": "boolean"
          }
        ]
      },
      {
        "linkId": "4",
        "text": "COVID-19 Vaccination",
        "type": "group",
        "item": [
          {
            "linkId": "4.1",
            "text": "Have you received a COVID-19 vaccine?",
            "type": "boolean"
          },
          {
            "linkId": "4.2",
            "text": "Date of administration of the 1st dose",
            "type": "date",
            "enableWhen": [
              {
                "question": "4.1",
                "operator": "=",
                "answerBoolean": true
              }
            ]
          },
          {
            "linkId": "4.3",
            "text": "Date of administration of the 2nd dose",
            "type": "date",
            "enableWhen": [
              {
                "question": "4.1",
                "operator": "=",
                "answerBoolean": true
              }
            ]
          },
          {
            "linkId": "4.4",
            "text": "3. Select name of the vaccine^",
            "type": "choice",
            "repeats": true,
            "enableWhen": [
              {
                "question": "4.1",
                "operator": "=",
                "answerBoolean": true
              }
            ],
            "answerOption": [
              {"valueCoding": {"code": "Covaxin", "display": "Covaxin"}},
              {"valueCoding": {"code": "Covishield", "display": "Covishield"}},
              {"valueCoding": {"code": "Sputnik", "display": "JSputnik"}},
              {"valueCoding": {"code": "Sinopharm", "display": "Sinopharm"}},
              {"valueCoding": {"code": "Sinovac", "display": "Sinovac"}},
              {"valueCoding": {"code": "Moderna", "display": "Moderna"}},
              {"valueCoding": {"code": "Janssen", "display": "Janssen"}}
            ]
          },
          {
            "linkId": "4.5",
            "text": "Others:",
            "type": "string",
            "enableWhen": [
              {
                "question": "4.1",
                "operator": "=",
                "answerBoolean": true
              }
            ]
          },
          {
            "linkId": "4.6",
            "text": "^Please attach copies of vaccination certificate (or copy of any official documentation confirming complete vaccination issued by the relevant health authority",
            "type": "display",
            "enableWhen": [
              {
                "question": "4.1",
                "operator": "=",
                "answerBoolean": true
              }
            ]
          },
          {
            "linkId": "4.7",
            "text": "Did you experience any adverse reaction post vaccination?",
            "type": "boolean",
            "enableWhen": [
              {
                "question": "4.1",
                "operator": "=",
                "answerBoolean": true
              }
            ]
          },
          {
            "linkId": "4.8",
            "text": "share details including treatment taken for the same",
            "type": "string",
            "enableWhen": [
              {
                "question": "4.7",
                "operator": "=",
                "answerBoolean": true
              }
            ]
          },
          {
            "linkId": "4.9",
            "text": "Date of complete recovery from vaccine reaction ",
            "type": "date",
            "enableWhen": [
              {
                "question": "4.7",
                "operator": "=",
                "answerBoolean": true
              }
            ]
          }
        ]
      }
    ]
  }