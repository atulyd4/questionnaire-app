export default{
    "resourceType": "Questionnaire",
    "id": "123456",
    "meta": {
      "profile": [
        "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnairerequest"
      ]
    },
    "status": "active",
    "date": "2024-05-18",
    "description": "Questionnaire for assessing COVID-19 management in patients.",
    "item": [
      {
        "linkId": "1",
        "text": "General Information",
        "type": "group",
        "item": [
          {
            "linkId": "1.1",
            "text": "Patient Name",
            "type": "string",
            "required": true
          },
          {
            "linkId": "1.2",
            "text": "Date of Birth",
            "type": "date",
            "required": true,
            "extension": [
              {
                "url": "http://hl7.org/fhir/StructureDefinition/minValue",
                "valueDate": "1900-01-01"
              },
              {
                "url": "http://hl7.org/fhir/StructureDefinition/maxValue",
                "valueDate": "2024-12-31"
              }
            ]
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
          },
          {
            "linkId": "1.4",
            "text": "Are you currently pregnant?",
            "type": "boolean",
            "enableWhen": [
              {
                "question": "1.3",
                "operator": "=",
                "answerCoding": {
                  "code": "F"
                }
              }
            ]
          },
          {
            "linkId": "1.5",
            "text": "Expected Due Date",
            "type": "date",
            "enableWhen": [
              {
                "question": "1.4",
                "operator": "=",
                "answerBoolean": true
              }
            ]
          },
          {
            "linkId": "1.6",
            "text": "Pregnancy History",
            "type": "group",
            "enableWhen": [
              {
                "question": "1.4",
                "operator": "=",
                "answerBoolean": true
              }
            ],
            "item": [
              {
                "linkId": "1.7",
                "text": "Number of previous pregnancies",
                "type": "integer",
                "required": true
              },
              {
                "linkId": "1.8",
                "text": "Number of previous live births",
                "type": "integer",
                "required": true
              },
              {
                "linkId": "1.9",
                "text": "Number of previous miscarriages",
                "type": "integer",
                "required": true
              }
            ]
          },
          {
            "linkId": "1.10",
            "text": "Current Pregnancy Details",
            "type": "group",
            "enableWhen": [
              {
                "question": "1.4",
                "operator": "=",
                "answerBoolean": true
              }
            ],
            "item": [
              {
                "linkId": "1.11",
                "text": "First day of last menstrual period (LMP)",
                "type": "date"
              },
              {
                "linkId": "1.12",
                "text": "Current gestational age (weeks)",
                "type": "integer"
              },
              {
                "linkId": "1.13",
                "text": "Any complications during this pregnancy?",
                "type": "string"
              }
            ]
          },
          {
            "linkId": "1.14",
            "text": "What is your appointment time?",
            "type": "dateTime"
          },
          {
            "linkId": "1.15",
            "text": "Upload your medical records.",
            "type": "attachment"
          },
          {
            "linkId": "1.16",
            "text": "How many siblings do you have?",
            "type": "integer"
          },
          {
            "linkId": "1.17",
            "text": "What time did you wake up today?",
            "type": "time"
          },
          {
            "linkId": "1.18",
            "text": "What is your personal website?",
            "type": "url"
          },
          {
            "linkId": "1.19",
            "text": "Your weight in kg?",
            "type": "integer",
            "extension": [
              {
                "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                "valueCoding": {
                  "system": "http://unitsofmeasure.org",
                  "code": "kg",
                  "display": "kg"
                }
              }
            ]
          },
          {
            "linkId": "1.20",
            "text": "Your height in cm?",
            "type": "integer",
            "extension": [
              {
                "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                "valueCoding": {
                  "system": "http://unitsofmeasure.org",
                  "code": "cm",
                  "display": "cm"
                }
              }
            ]
          }
        ]
      },
      {
        "linkId": "2",
        "text": "Diabetes Management",
        "type": "group",
        "item": [
          {
            "linkId": "2.1",
            "text": "Type of Diabetes",
            "type": "choice",
            "answerOption": [
              {"valueCoding": {"code": "type1", "display": "Type 1"}},
              {"valueCoding": {"code": "type2", "display": "Type 2"}},
              {"valueCoding": {"code": "gestational", "display": "Gestational"}}
            ]
          },
          {
            "linkId": "2.2",
            "text": "How long have you been diagnosed?",
            "type": "integer"
          },
          {
            "linkId": "2.3",
            "text": "Do you take insulin?",
            "type": "boolean"
          },
          {
            "linkId": "2.4",
            "text": "How often do you monitor your blood glucose levels?",
            "type": "choice",
            "answerOption": [
              {"valueCoding": {"code": "daily", "display": "Daily"}},
              {"valueCoding": {"code": "weekly", "display": "Weekly"}},
              {"valueCoding": {"code": "monthly", "display": "Monthly"}}
            ]
          },
          {
            "linkId": "2.5",
            "text": "What was your last HbA1c level?",
            "type": "decimal"
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
              "text": "Do you smoke?",
              "type": "boolean"
          },
          {
            "linkId": "3.2",
            "text": "Do you have any underlying health conditions?",
            "type": "string"
          },
          {
            "linkId": "3.3",
            "text": "Have you experienced fever in the last 24 hours?",
            "type": "boolean"
          },
          {
            "linkId": "3.4",
            "text": "Have you experienced cough in the last 24 hours?",
            "type": "boolean"
          },
          {
            "linkId": "3.5",
            "text": "Have you experienced shortness of breath in the past 14 days?",
            "type": "boolean"
          },
          {
            "linkId": "3.6",
            "text": "Have you experienced fatigue in the past 14 days?",
            "type": "boolean"
          },
          {
            "linkId": "3.7",
            "text": "Have you experienced muscle or body aches in the past 14 days?",
            "type": "boolean"
          },
          {
            "linkId": "3.8",
            "text": "Have you experienced headache in the past 14 days?",
            "type": "boolean"
          },
          {
            "linkId": "3.9",
            "text": "Have you experienced new loss of taste or smell in the past 14 days?",
            "type": "boolean"
          },
          {
            "linkId": "3.10",
            "text": "Have you experienced sore throat in the past 14 days?",
            "type": "boolean"
          },
          {
            "linkId": "3.11",
            "text": "Have you experienced congestion or runny nose in the past 14 days?",
            "type": "boolean"
          },
          {
            "linkId": "3.12",
            "text": "Have you experienced nausea or vomiting in the past 14 days?",
            "type": "boolean"
          },
          {
            "linkId": "3.13",
            "text": "Have you experienced diarrhea in the past 14 days?",
            "type": "boolean"
          },
          {
            "linkId": "3.14",
            "text": "Have you recently traveled to a COVID-19 affected area?",
            "type": "boolean"
          },
          {
            "linkId": "3.15",
            "text": "Have you tested positive for COVID-19 in the past 14 days?",
            "type": "boolean"
          },
          {
            "linkId": "3.16",
            "text": "Have you had close contact with someone who tested positive for COVID-19 in the past 14 days?",
            "type": "boolean"
          },
          {
            "linkId": "3.17",
            "text": "Select any known medical conditions.",
            "type": "open-choice",
            "answerOption": [
              {
                "valueCoding": {
                  "code": "diabetes",
                  "display": "Diabetes"
                }
              },
              {
                "valueCoding": {
                  "code": "hypertension",
                  "display": "Hypertension"
                }
              },
              {
                "valueCoding": {
                  "code": "asthma",
                  "display": "Asthma"
                }
              }
            ]
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
            "text": "Which COVID-19 vaccine did you receive?",
            "type": "choice",
            "enableWhen": [
              {
                "question": "4.1",
                "operator": "=",
                "answerBoolean": true
              }
            ],
            "answerOption": [
              {"valueCoding": {"code": "pfizer", "display": "Pfizer-BioNTech"}},
              {"valueCoding": {"code": "moderna", "display": "Moderna"}},
              {"valueCoding": {"code": "janssen", "display": "Johnson & Johnson's Janssen"}},
              {"valueCoding": {"code": "astrazeneca", "display": "AstraZeneca"}},
              {"valueCoding": {"code": "sinopharm", "display": "Sinopharm"}},
              {"valueCoding": {"code": "sinovac", "display": "Sinovac"}}
            ]
          },
          {
            "linkId": "4.3",
            "text": "Date of the last COVID-19 vaccination",
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
            "text": "Did you experience any side effects?",
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
            "linkId": "4.5",
            "text": "Please describe the side effects you experienced.",
            "type": "text",
            "enableWhen": [
              {
                "question": "4.4",
                "operator": "=",
                "answerBoolean": true
              }
            ]
          },
          {
            "linkId": "4.6",
            "text": "Did you receive a booster dose?",
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
            "linkId": "4.7",
            "text": "Date of the booster dose",
            "type": "date",
            "enableWhen": [
              {
                "question": "4.6",
                "operator": "=",
                "answerBoolean": true
              }
            ]
          }
        ]
      }
    ]
  }