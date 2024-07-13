{
    "success": true,
        "data": [
            {
                "id": {
                    "value": "COVID-19"
                },
                "meta": {
                    "extension": [
                        {
                            "url": "https://fhir.aidbox.app/fhir/StructureDefinition/created-at",
                            "value": {
                                "value": "2024-07-04T10:34:17.097295+00:00"
                            }
                        }
                    ],
                    "versionId": {
                        "value": "25"
                    },
                    "lastUpdated": {
                        "value": "2024-07-04T10:34:17.097295+00:00"
                    },
                    "profile": [
                        {
                            "value": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnairerequest"
                        }
                    ]
                },
                "status": {
                    "value": "active"
                },
                "date": {
                    "value": "2024-05-18"
                },
                "description": {
                    "value": "QuestionnaireforassessingCOVID-19managementinpatients."
                },
                "item": [
                    {
                        "linkId": {
                            "value": "1"
                        },
                        "text": {
                            "value": "GeneralInformation"
                        },
                        "type": {
                            "value": "group"
                        },
                        "item": [
                            {
                                "linkId": {
                                    "value": "1.1"
                                },
                                "text": {
                                    "value": "PatientName"
                                },
                                "type": {
                                    "value": "string"
                                },
                                "required": {
                                    "value": true
                                }
                            },
                            {
                                "extension": [
                                    {
                                        "url": "http://hl7.org/fhir/StructureDefinition/minValue",
                                        "value": {
                                            "value": "1900-01-01"
                                        }
                                    },
                                    {
                                        "url": "http://hl7.org/fhir/StructureDefinition/maxValue",
                                        "value": {
                                            "value": "2024-12-31"
                                        }
                                    }
                                ],
                                "linkId": {
                                    "value": "1.2"
                                },
                                "text": {
                                    "value": "DateofBirth"
                                },
                                "type": {
                                    "value": "date"
                                },
                                "required": {
                                    "value": true
                                }
                            },
                            {
                                "linkId": {
                                    "value": "1.3"
                                },
                                "text": {
                                    "value": "Gender"
                                },
                                "type": {
                                    "value": "choice"
                                },
                                "answerOption": [
                                    {
                                        "value": {
                                            "code": {
                                                "value": "M"
                                            },
                                            "display": {
                                                "value": "Male"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "F"
                                            },
                                            "display": {
                                                "value": "Female"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "O"
                                            },
                                            "display": {
                                                "value": "Other"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "1.4"
                                },
                                "text": {
                                    "value": "Areyoucurrentlypregnant?"
                                },
                                "type": {
                                    "value": "boolean"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "1.3"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "code": {
                                                "value": "F"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "1.5"
                                },
                                "text": {
                                    "value": "ExpectedDueDate"
                                },
                                "type": {
                                    "value": "date"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "1.4"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "value": true
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "1.6"
                                },
                                "text": {
                                    "value": "PregnancyHistory"
                                },
                                "type": {
                                    "value": "group"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "1.4"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "value": true
                                        }
                                    }
                                ],
                                "item": [
                                    {
                                        "linkId": {
                                            "value": "1.7"
                                        },
                                        "text": {
                                            "value": "Numberofpreviouspregnancies"
                                        },
                                        "type": {
                                            "value": "integer"
                                        },
                                        "required": {
                                            "value": true
                                        }
                                    },
                                    {
                                        "linkId": {
                                            "value": "1.8"
                                        },
                                        "text": {
                                            "value": "Numberofpreviouslivebirths"
                                        },
                                        "type": {
                                            "value": "integer"
                                        },
                                        "required": {
                                            "value": true
                                        }
                                    },
                                    {
                                        "linkId": {
                                            "value": "1.9"
                                        },
                                        "text": {
                                            "value": "Numberofpreviousmiscarriages"
                                        },
                                        "type": {
                                            "value": "integer"
                                        },
                                        "required": {
                                            "value": true
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "1.10"
                                },
                                "text": {
                                    "value": "CurrentPregnancyDetails"
                                },
                                "type": {
                                    "value": "group"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "1.4"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "value": true
                                        }
                                    }
                                ],
                                "item": [
                                    {
                                        "linkId": {
                                            "value": "1.11"
                                        },
                                        "text": {
                                            "value": "Firstdayoflastmenstrualperiod(LMP)"
                                        },
                                        "type": {
                                            "value": "date"
                                        }
                                    },
                                    {
                                        "linkId": {
                                            "value": "1.12"
                                        },
                                        "text": {
                                            "value": "Currentgestationalage(weeks)"
                                        },
                                        "type": {
                                            "value": "integer"
                                        }
                                    },
                                    {
                                        "linkId": {
                                            "value": "1.13"
                                        },
                                        "text": {
                                            "value": "Anycomplicationsduringthispregnancy?"
                                        },
                                        "type": {
                                            "value": "string"
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "1.14"
                                },
                                "text": {
                                    "value": "Whatisyourappointmenttime?"
                                },
                                "type": {
                                    "value": "dateTime"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "1.15"
                                },
                                "text": {
                                    "value": "Uploadyourmedicalrecords."
                                },
                                "type": {
                                    "value": "attachment"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "1.16"
                                },
                                "text": {
                                    "value": "Howmanysiblingsdoyouhave?"
                                },
                                "type": {
                                    "value": "integer"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "1.17"
                                },
                                "text": {
                                    "value": "Whattimedidyouwakeuptoday?"
                                },
                                "type": {
                                    "value": "time"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "1.18"
                                },
                                "text": {
                                    "value": "Whatisyourpersonalwebsite?"
                                },
                                "type": {
                                    "value": "url"
                                }
                            },
                            {
                                "extension": [
                                    {
                                        "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                                        "value": {
                                            "system": {
                                                "value": "http://unitsofmeasure.org"
                                            },
                                            "code": {
                                                "value": "kg"
                                            },
                                            "display": {
                                                "value": "kg"
                                            }
                                        }
                                    }
                                ],
                                "linkId": {
                                    "value": "1.19"
                                },
                                "text": {
                                    "value": "Yourweightinkg?"
                                },
                                "type": {
                                    "value": "integer"
                                }
                            },
                            {
                                "extension": [
                                    {
                                        "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                                        "value": {
                                            "system": {
                                                "value": "http://unitsofmeasure.org"
                                            },
                                            "code": {
                                                "value": "cm"
                                            },
                                            "display": {
                                                "value": "cm"
                                            }
                                        }
                                    }
                                ],
                                "linkId": {
                                    "value": "1.20"
                                },
                                "text": {
                                    "value": "Yourheightincm?"
                                },
                                "type": {
                                    "value": "integer"
                                }
                            }
                        ]
                    },
                    {
                        "linkId": {
                            "value": "2"
                        },
                        "text": {
                            "value": "DiabetesManagement"
                        },
                        "type": {
                            "value": "group"
                        },
                        "item": [
                            {
                                "linkId": {
                                    "value": "2.1"
                                },
                                "text": {
                                    "value": "TypeofDiabetes"
                                },
                                "type": {
                                    "value": "choice"
                                },
                                "answerOption": [
                                    {
                                        "value": {
                                            "code": {
                                                "value": "type1"
                                            },
                                            "display": {
                                                "value": "Type1"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "type2"
                                            },
                                            "display": {
                                                "value": "Type2"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "gestational"
                                            },
                                            "display": {
                                                "value": "Gestational"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "2.2"
                                },
                                "text": {
                                    "value": "Howlonghaveyoubeendiagnosed?"
                                },
                                "type": {
                                    "value": "integer"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "2.3"
                                },
                                "text": {
                                    "value": "Doyoutakeinsulin?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "2.4"
                                },
                                "text": {
                                    "value": "Howoftendoyoumonitoryourbloodglucoselevels?"
                                },
                                "type": {
                                    "value": "choice"
                                },
                                "answerOption": [
                                    {
                                        "value": {
                                            "code": {
                                                "value": "daily"
                                            },
                                            "display": {
                                                "value": "Daily"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "weekly"
                                            },
                                            "display": {
                                                "value": "Weekly"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "monthly"
                                            },
                                            "display": {
                                                "value": "Monthly"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "2.5"
                                },
                                "text": {
                                    "value": "WhatwasyourlastHbA1clevel?"
                                },
                                "type": {
                                    "value": "decimal"
                                }
                            }
                        ]
                    },
                    {
                        "linkId": {
                            "value": "3"
                        },
                        "text": {
                            "value": "COVID-19diagnosis"
                        },
                        "type": {
                            "value": "group"
                        },
                        "item": [
                            {
                                "linkId": {
                                    "value": "3.1"
                                },
                                "text": {
                                    "value": "Doyousmoke?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.2"
                                },
                                "text": {
                                    "value": "Doyouhaveanyunderlyinghealthconditions?"
                                },
                                "type": {
                                    "value": "string"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.3"
                                },
                                "text": {
                                    "value": "Haveyouexperiencedfeverinthelast24hours?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.4"
                                },
                                "text": {
                                    "value": "Haveyouexperiencedcoughinthelast24hours?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.5"
                                },
                                "text": {
                                    "value": "Haveyouexperiencedshortnessofbreathinthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.6"
                                },
                                "text": {
                                    "value": "Haveyouexperiencedfatigueinthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.7"
                                },
                                "text": {
                                    "value": "Haveyouexperiencedmuscleorbodyachesinthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.8"
                                },
                                "text": {
                                    "value": "Haveyouexperiencedheadacheinthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.9"
                                },
                                "text": {
                                    "value": "Haveyouexperiencednewlossoftasteorsmellinthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.10"
                                },
                                "text": {
                                    "value": "Haveyouexperiencedsorethroatinthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.11"
                                },
                                "text": {
                                    "value": "Haveyouexperiencedcongestionorrunnynoseinthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.12"
                                },
                                "text": {
                                    "value": "Haveyouexperiencednauseaorvomitinginthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.13"
                                },
                                "text": {
                                    "value": "Haveyouexperienceddiarrheainthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.14"
                                },
                                "text": {
                                    "value": "HaveyourecentlytraveledtoaCOVID-19affectedarea?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.15"
                                },
                                "text": {
                                    "value": "HaveyoutestedpositiveforCOVID-19inthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.16"
                                },
                                "text": {
                                    "value": "HaveyouhadclosecontactwithsomeonewhotestedpositiveforCOVID-19inthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.17"
                                },
                                "text": {
                                    "value": "Selectanyknownmedicalconditions."
                                },
                                "type": {
                                    "value": "open-choice"
                                },
                                "answerOption": [
                                    {
                                        "value": {
                                            "code": {
                                                "value": "diabetes"
                                            },
                                            "display": {
                                                "value": "Diabetes"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "hypertension"
                                            },
                                            "display": {
                                                "value": "Hypertension"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "asthma"
                                            },
                                            "display": {
                                                "value": "Asthma"
                                            }
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "linkId": {
                            "value": "4"
                        },
                        "text": {
                            "value": "COVID-19Vaccination"
                        },
                        "type": {
                            "value": "group"
                        },
                        "item": [
                            {
                                "linkId": {
                                    "value": "4.1"
                                },
                                "text": {
                                    "value": "HaveyoureceivedaCOVID-19vaccine?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "4.2"
                                },
                                "text": {
                                    "value": "WhichCOVID-19vaccinedidyoureceive?"
                                },
                                "type": {
                                    "value": "choice"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "4.1"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "value": true
                                        }
                                    }
                                ],
                                "answerOption": [
                                    {
                                        "value": {
                                            "code": {
                                                "value": "pfizer"
                                            },
                                            "display": {
                                                "value": "Pfizer-BioNTech"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "moderna"
                                            },
                                            "display": {
                                                "value": "Moderna"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "janssen"
                                            },
                                            "display": {
                                                "value": "Johnson&Johnson'sJanssen"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "astrazeneca"
                                            },
                                            "display": {
                                                "value": "AstraZeneca"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "sinopharm"
                                            },
                                            "display": {
                                                "value": "Sinopharm"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "sinovac"
                                            },
                                            "display": {
                                                "value": "Sinovac"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "4.3"
                                },
                                "text": {
                                    "value": "DateofthelastCOVID-19vaccination"
                                },
                                "type": {
                                    "value": "date"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "4.1"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "value": true
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "4.4"
                                },
                                "text": {
                                    "value": "Didyouexperienceanysideeffects?"
                                },
                                "type": {
                                    "value": "boolean"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "4.1"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "value": true
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "4.5"
                                },
                                "text": {
                                    "value": "Pleasedescribethesideeffectsyouexperienced."
                                },
                                "type": {
                                    "value": "text"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "4.4"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "value": true
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "4.6"
                                },
                                "text": {
                                    "value": "Didyoureceiveaboosterdose?"
                                },
                                "type": {
                                    "value": "boolean"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "4.1"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "value": true
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "4.7"
                                },
                                "text": {
                                    "value": "Dateoftheboosterdose"
                                },
                                "type": {
                                    "value": "date"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "4.6"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "value": true
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": {
                    "value": "COVID-XYZ1234"
                },
                "meta": {
                    "extension": [
                        {
                            "url": "https://fhir.aidbox.app/fhir/StructureDefinition/created-at",
                            "value": {
                                "value": "2024-07-05T04:28:24.303465+00:00"
                            }
                        }
                    ],
                    "versionId": {
                        "value": "50"
                    },
                    "lastUpdated": {
                        "value": "2024-07-05T04:28:24.303465+00:00"
                    },
                    "profile": [
                        {
                            "value": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnairerequest"
                        }
                    ]
                },
                "status": {
                    "value": "active"
                },
                "date": {
                    "value": "2024-05-18"
                },
                "description": {
                    "value": "QuestionnaireforassessingCOVID-19managementinpatients."
                },
                "item": [
                    {
                        "linkId": {
                            "value": "1"
                        },
                        "text": {
                            "value": "GeneralInformation"
                        },
                        "type": {
                            "value": "group"
                        },
                        "item": [
                            {
                                "linkId": {
                                    "value": "1.1"
                                },
                                "text": {
                                    "value": "PatientName"
                                },
                                "type": {
                                    "value": "string"
                                },
                                "required": {
                                    "value": true
                                }
                            },
                            {
                                "extension": [
                                    {
                                        "url": "http://hl7.org/fhir/StructureDefinition/minValue",
                                        "value": {
                                            "value": "1900-01-01"
                                        }
                                    },
                                    {
                                        "url": "http://hl7.org/fhir/StructureDefinition/maxValue",
                                        "value": {
                                            "value": "2024-12-31"
                                        }
                                    }
                                ],
                                "linkId": {
                                    "value": "1.2"
                                },
                                "text": {
                                    "value": "DateofBirth"
                                },
                                "type": {
                                    "value": "date"
                                },
                                "required": {
                                    "value": true
                                }
                            },
                            {
                                "linkId": {
                                    "value": "1.3"
                                },
                                "text": {
                                    "value": "Gender"
                                },
                                "type": {
                                    "value": "choice"
                                },
                                "answerOption": [
                                    {
                                        "value": {
                                            "code": {
                                                "value": "M"
                                            },
                                            "display": {
                                                "value": "Male"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "F"
                                            },
                                            "display": {
                                                "value": "Female"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "O"
                                            },
                                            "display": {
                                                "value": "Other"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "1.4"
                                },
                                "text": {
                                    "value": "Areyoucurrentlypregnant?"
                                },
                                "type": {
                                    "value": "boolean"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "1.3"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "code": {
                                                "value": "F"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "1.5"
                                },
                                "text": {
                                    "value": "ExpectedDueDate"
                                },
                                "type": {
                                    "value": "date"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "1.4"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "value": true
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "1.6"
                                },
                                "text": {
                                    "value": "PregnancyHistory"
                                },
                                "type": {
                                    "value": "group"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "1.4"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "value": true
                                        }
                                    }
                                ],
                                "item": [
                                    {
                                        "linkId": {
                                            "value": "1.7"
                                        },
                                        "text": {
                                            "value": "Numberofpreviouspregnancies"
                                        },
                                        "type": {
                                            "value": "integer"
                                        },
                                        "required": {
                                            "value": true
                                        }
                                    },
                                    {
                                        "linkId": {
                                            "value": "1.8"
                                        },
                                        "text": {
                                            "value": "Numberofpreviouslivebirths"
                                        },
                                        "type": {
                                            "value": "integer"
                                        },
                                        "required": {
                                            "value": true
                                        }
                                    },
                                    {
                                        "linkId": {
                                            "value": "1.9"
                                        },
                                        "text": {
                                            "value": "Numberofpreviousmiscarriages"
                                        },
                                        "type": {
                                            "value": "integer"
                                        },
                                        "required": {
                                            "value": true
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "1.10"
                                },
                                "text": {
                                    "value": "CurrentPregnancyDetails"
                                },
                                "type": {
                                    "value": "group"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "1.4"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "value": true
                                        }
                                    }
                                ],
                                "item": [
                                    {
                                        "linkId": {
                                            "value": "1.11"
                                        },
                                        "text": {
                                            "value": "Firstdayoflastmenstrualperiod(LMP)"
                                        },
                                        "type": {
                                            "value": "date"
                                        }
                                    },
                                    {
                                        "linkId": {
                                            "value": "1.12"
                                        },
                                        "text": {
                                            "value": "Currentgestationalage(weeks)"
                                        },
                                        "type": {
                                            "value": "integer"
                                        }
                                    },
                                    {
                                        "linkId": {
                                            "value": "1.13"
                                        },
                                        "text": {
                                            "value": "Anycomplicationsduringthispregnancy?"
                                        },
                                        "type": {
                                            "value": "string"
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "1.14"
                                },
                                "text": {
                                    "value": "Whatisyourappointmenttime?"
                                },
                                "type": {
                                    "value": "dateTime"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "1.15"
                                },
                                "text": {
                                    "value": "Uploadyourmedicalrecords."
                                },
                                "type": {
                                    "value": "attachment"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "1.16"
                                },
                                "text": {
                                    "value": "Howmanysiblingsdoyouhave?"
                                },
                                "type": {
                                    "value": "integer"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "1.17"
                                },
                                "text": {
                                    "value": "Whattimedidyouwakeuptoday?"
                                },
                                "type": {
                                    "value": "time"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "1.18"
                                },
                                "text": {
                                    "value": "Whatisyourpersonalwebsite?"
                                },
                                "type": {
                                    "value": "url"
                                }
                            },
                            {
                                "extension": [
                                    {
                                        "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                                        "value": {
                                            "system": {
                                                "value": "http://unitsofmeasure.org"
                                            },
                                            "code": {
                                                "value": "kg"
                                            },
                                            "display": {
                                                "value": "kg"
                                            }
                                        }
                                    }
                                ],
                                "linkId": {
                                    "value": "1.19"
                                },
                                "text": {
                                    "value": "Yourweightinkg?"
                                },
                                "type": {
                                    "value": "integer"
                                }
                            },
                            {
                                "extension": [
                                    {
                                        "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                                        "value": {
                                            "system": {
                                                "value": "http://unitsofmeasure.org"
                                            },
                                            "code": {
                                                "value": "cm"
                                            },
                                            "display": {
                                                "value": "cm"
                                            }
                                        }
                                    }
                                ],
                                "linkId": {
                                    "value": "1.20"
                                },
                                "text": {
                                    "value": "Yourheightincm?"
                                },
                                "type": {
                                    "value": "integer"
                                }
                            }
                        ]
                    },
                    {
                        "linkId": {
                            "value": "2"
                        },
                        "text": {
                            "value": "DiabetesManagement"
                        },
                        "type": {
                            "value": "group"
                        },
                        "item": [
                            {
                                "linkId": {
                                    "value": "2.1"
                                },
                                "text": {
                                    "value": "TypeofDiabetes"
                                },
                                "type": {
                                    "value": "choice"
                                },
                                "answerOption": [
                                    {
                                        "value": {
                                            "code": {
                                                "value": "type1"
                                            },
                                            "display": {
                                                "value": "Type1"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "type2"
                                            },
                                            "display": {
                                                "value": "Type2"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "gestational"
                                            },
                                            "display": {
                                                "value": "Gestational"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "2.2"
                                },
                                "text": {
                                    "value": "Howlonghaveyoubeendiagnosed?"
                                },
                                "type": {
                                    "value": "integer"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "2.3"
                                },
                                "text": {
                                    "value": "Doyoutakeinsulin?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "2.4"
                                },
                                "text": {
                                    "value": "Howoftendoyoumonitoryourbloodglucoselevels?"
                                },
                                "type": {
                                    "value": "choice"
                                },
                                "answerOption": [
                                    {
                                        "value": {
                                            "code": {
                                                "value": "daily"
                                            },
                                            "display": {
                                                "value": "Daily"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "weekly"
                                            },
                                            "display": {
                                                "value": "Weekly"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "monthly"
                                            },
                                            "display": {
                                                "value": "Monthly"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "2.5"
                                },
                                "text": {
                                    "value": "WhatwasyourlastHbA1clevel?"
                                },
                                "type": {
                                    "value": "decimal"
                                }
                            }
                        ]
                    },
                    {
                        "linkId": {
                            "value": "3"
                        },
                        "text": {
                            "value": "COVID-19diagnosis"
                        },
                        "type": {
                            "value": "group"
                        },
                        "item": [
                            {
                                "linkId": {
                                    "value": "3.1"
                                },
                                "text": {
                                    "value": "Doyousmoke?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.2"
                                },
                                "text": {
                                    "value": "Doyouhaveanyunderlyinghealthconditions?"
                                },
                                "type": {
                                    "value": "string"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.3"
                                },
                                "text": {
                                    "value": "Haveyouexperiencedfeverinthelast24hours?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.4"
                                },
                                "text": {
                                    "value": "Haveyouexperiencedcoughinthelast24hours?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.5"
                                },
                                "text": {
                                    "value": "Haveyouexperiencedshortnessofbreathinthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.6"
                                },
                                "text": {
                                    "value": "Haveyouexperiencedfatigueinthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.7"
                                },
                                "text": {
                                    "value": "Haveyouexperiencedmuscleorbodyachesinthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.8"
                                },
                                "text": {
                                    "value": "Haveyouexperiencedheadacheinthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.9"
                                },
                                "text": {
                                    "value": "Haveyouexperiencednewlossoftasteorsmellinthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.10"
                                },
                                "text": {
                                    "value": "Haveyouexperiencedsorethroatinthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.11"
                                },
                                "text": {
                                    "value": "Haveyouexperiencedcongestionorrunnynoseinthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.12"
                                },
                                "text": {
                                    "value": "Haveyouexperiencednauseaorvomitinginthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.13"
                                },
                                "text": {
                                    "value": "Haveyouexperienceddiarrheainthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.14"
                                },
                                "text": {
                                    "value": "HaveyourecentlytraveledtoaCOVID-19affectedarea?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.15"
                                },
                                "text": {
                                    "value": "HaveyoutestedpositiveforCOVID-19inthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.16"
                                },
                                "text": {
                                    "value": "HaveyouhadclosecontactwithsomeonewhotestedpositiveforCOVID-19inthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.17"
                                },
                                "text": {
                                    "value": "Selectanyknownmedicalconditions."
                                },
                                "type": {
                                    "value": "open-choice"
                                },
                                "answerOption": [
                                    {
                                        "value": {
                                            "code": {
                                                "value": "diabetes"
                                            },
                                            "display": {
                                                "value": "Diabetes"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "hypertension"
                                            },
                                            "display": {
                                                "value": "Hypertension"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "asthma"
                                            },
                                            "display": {
                                                "value": "Asthma"
                                            }
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "linkId": {
                            "value": "4"
                        },
                        "text": {
                            "value": "COVID-19Vaccination"
                        },
                        "type": {
                            "value": "group"
                        },
                        "item": [
                            {
                                "linkId": {
                                    "value": "4.1"
                                },
                                "text": {
                                    "value": "HaveyoureceivedaCOVID-19vaccine?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "4.2"
                                },
                                "text": {
                                    "value": "WhichCOVID-19vaccinedidyoureceive?"
                                },
                                "type": {
                                    "value": "choice"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "4.1"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "value": true
                                        }
                                    }
                                ],
                                "answerOption": [
                                    {
                                        "value": {
                                            "code": {
                                                "value": "pfizer"
                                            },
                                            "display": {
                                                "value": "Pfizer-BioNTech"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "moderna"
                                            },
                                            "display": {
                                                "value": "Moderna"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "janssen"
                                            },
                                            "display": {
                                                "value": "Johnson&Johnson'sJanssen"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "astrazeneca"
                                            },
                                            "display": {
                                                "value": "AstraZeneca"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "sinopharm"
                                            },
                                            "display": {
                                                "value": "Sinopharm"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "sinovac"
                                            },
                                            "display": {
                                                "value": "Sinovac"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "4.3"
                                },
                                "text": {
                                    "value": "DateofthelastCOVID-19vaccination"
                                },
                                "type": {
                                    "value": "date"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "4.1"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "value": true
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "4.4"
                                },
                                "text": {
                                    "value": "Didyouexperienceanysideeffects?"
                                },
                                "type": {
                                    "value": "boolean"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "4.1"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "value": true
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "4.5"
                                },
                                "text": {
                                    "value": "Pleasedescribethesideeffectsyouexperienced."
                                },
                                "type": {
                                    "value": "text"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "4.4"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "value": true
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "4.6"
                                },
                                "text": {
                                    "value": "Didyoureceiveaboosterdose?"
                                },
                                "type": {
                                    "value": "boolean"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "4.1"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "value": true
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "4.7"
                                },
                                "text": {
                                    "value": "Dateoftheboosterdose"
                                },
                                "type": {
                                    "value": "date"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "4.6"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "value": true
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": {
                    "value": "24fe2545-9813-4f30-ad2b-f8cf5ac39a3a"
                },
                "meta": {
                    "extension": [
                        {
                            "url": "https://fhir.aidbox.app/fhir/StructureDefinition/created-at",
                            "value": {
                                "value": "2024-07-05T04:29:36.47334+00:00"
                            }
                        }
                    ],
                    "versionId": {
                        "value": "52"
                    },
                    "lastUpdated": {
                        "value": "2024-07-05T04:29:36.47334+00:00"
                    },
                    "profile": [
                        {
                            "value": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnairerequest"
                        }
                    ]
                },
                "status": {
                    "value": "active"
                },
                "date": {
                    "value": "2024-05-18"
                },
                "description": {
                    "value": "QuestionnaireforassessingCOVID-19managementinpatients."
                },
                "item": [
                    {
                        "linkId": {
                            "value": "1"
                        },
                        "text": {
                            "value": "GeneralInformation"
                        },
                        "type": {
                            "value": "group"
                        },
                        "item": [
                            {
                                "linkId": {
                                    "value": "1.1"
                                },
                                "text": {
                                    "value": "PatientName"
                                },
                                "type": {
                                    "value": "string"
                                },
                                "required": {
                                    "value": true
                                }
                            },
                            {
                                "extension": [
                                    {
                                        "url": "http://hl7.org/fhir/StructureDefinition/minValue",
                                        "value": {
                                            "value": "1900-01-01"
                                        }
                                    },
                                    {
                                        "url": "http://hl7.org/fhir/StructureDefinition/maxValue",
                                        "value": {
                                            "value": "2024-12-31"
                                        }
                                    }
                                ],
                                "linkId": {
                                    "value": "1.2"
                                },
                                "text": {
                                    "value": "DateofBirth"
                                },
                                "type": {
                                    "value": "date"
                                },
                                "required": {
                                    "value": true
                                }
                            },
                            {
                                "linkId": {
                                    "value": "1.3"
                                },
                                "text": {
                                    "value": "Gender"
                                },
                                "type": {
                                    "value": "choice"
                                },
                                "answerOption": [
                                    {
                                        "value": {
                                            "code": {
                                                "value": "M"
                                            },
                                            "display": {
                                                "value": "Male"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "F"
                                            },
                                            "display": {
                                                "value": "Female"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "O"
                                            },
                                            "display": {
                                                "value": "Other"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "1.4"
                                },
                                "text": {
                                    "value": "Areyoucurrentlypregnant?"
                                },
                                "type": {
                                    "value": "boolean"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "1.3"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "code": {
                                                "value": "F"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "1.5"
                                },
                                "text": {
                                    "value": "ExpectedDueDate"
                                },
                                "type": {
                                    "value": "date"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "1.4"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "value": true
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "1.6"
                                },
                                "text": {
                                    "value": "PregnancyHistory"
                                },
                                "type": {
                                    "value": "group"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "1.4"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "value": true
                                        }
                                    }
                                ],
                                "item": [
                                    {
                                        "linkId": {
                                            "value": "1.7"
                                        },
                                        "text": {
                                            "value": "Numberofpreviouspregnancies"
                                        },
                                        "type": {
                                            "value": "integer"
                                        },
                                        "required": {
                                            "value": true
                                        }
                                    },
                                    {
                                        "linkId": {
                                            "value": "1.8"
                                        },
                                        "text": {
                                            "value": "Numberofpreviouslivebirths"
                                        },
                                        "type": {
                                            "value": "integer"
                                        },
                                        "required": {
                                            "value": true
                                        }
                                    },
                                    {
                                        "linkId": {
                                            "value": "1.9"
                                        },
                                        "text": {
                                            "value": "Numberofpreviousmiscarriages"
                                        },
                                        "type": {
                                            "value": "integer"
                                        },
                                        "required": {
                                            "value": true
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "1.10"
                                },
                                "text": {
                                    "value": "CurrentPregnancyDetails"
                                },
                                "type": {
                                    "value": "group"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "1.4"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "value": true
                                        }
                                    }
                                ],
                                "item": [
                                    {
                                        "linkId": {
                                            "value": "1.11"
                                        },
                                        "text": {
                                            "value": "Firstdayoflastmenstrualperiod(LMP)"
                                        },
                                        "type": {
                                            "value": "date"
                                        }
                                    },
                                    {
                                        "linkId": {
                                            "value": "1.12"
                                        },
                                        "text": {
                                            "value": "Currentgestationalage(weeks)"
                                        },
                                        "type": {
                                            "value": "integer"
                                        }
                                    },
                                    {
                                        "linkId": {
                                            "value": "1.13"
                                        },
                                        "text": {
                                            "value": "Anycomplicationsduringthispregnancy?"
                                        },
                                        "type": {
                                            "value": "string"
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "1.14"
                                },
                                "text": {
                                    "value": "Whatisyourappointmenttime?"
                                },
                                "type": {
                                    "value": "dateTime"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "1.15"
                                },
                                "text": {
                                    "value": "Uploadyourmedicalrecords."
                                },
                                "type": {
                                    "value": "attachment"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "1.16"
                                },
                                "text": {
                                    "value": "Howmanysiblingsdoyouhave?"
                                },
                                "type": {
                                    "value": "integer"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "1.17"
                                },
                                "text": {
                                    "value": "Whattimedidyouwakeuptoday?"
                                },
                                "type": {
                                    "value": "time"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "1.18"
                                },
                                "text": {
                                    "value": "Whatisyourpersonalwebsite?"
                                },
                                "type": {
                                    "value": "url"
                                }
                            },
                            {
                                "extension": [
                                    {
                                        "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                                        "value": {
                                            "system": {
                                                "value": "http://unitsofmeasure.org"
                                            },
                                            "code": {
                                                "value": "kg"
                                            },
                                            "display": {
                                                "value": "kg"
                                            }
                                        }
                                    }
                                ],
                                "linkId": {
                                    "value": "1.19"
                                },
                                "text": {
                                    "value": "Yourweightinkg?"
                                },
                                "type": {
                                    "value": "integer"
                                }
                            },
                            {
                                "extension": [
                                    {
                                        "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                                        "value": {
                                            "system": {
                                                "value": "http://unitsofmeasure.org"
                                            },
                                            "code": {
                                                "value": "cm"
                                            },
                                            "display": {
                                                "value": "cm"
                                            }
                                        }
                                    }
                                ],
                                "linkId": {
                                    "value": "1.20"
                                },
                                "text": {
                                    "value": "Yourheightincm?"
                                },
                                "type": {
                                    "value": "integer"
                                }
                            }
                        ]
                    },
                    {
                        "linkId": {
                            "value": "2"
                        },
                        "text": {
                            "value": "DiabetesManagement"
                        },
                        "type": {
                            "value": "group"
                        },
                        "item": [
                            {
                                "linkId": {
                                    "value": "2.1"
                                },
                                "text": {
                                    "value": "TypeofDiabetes"
                                },
                                "type": {
                                    "value": "choice"
                                },
                                "answerOption": [
                                    {
                                        "value": {
                                            "code": {
                                                "value": "type1"
                                            },
                                            "display": {
                                                "value": "Type1"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "type2"
                                            },
                                            "display": {
                                                "value": "Type2"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "gestational"
                                            },
                                            "display": {
                                                "value": "Gestational"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "2.2"
                                },
                                "text": {
                                    "value": "Howlonghaveyoubeendiagnosed?"
                                },
                                "type": {
                                    "value": "integer"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "2.3"
                                },
                                "text": {
                                    "value": "Doyoutakeinsulin?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "2.4"
                                },
                                "text": {
                                    "value": "Howoftendoyoumonitoryourbloodglucoselevels?"
                                },
                                "type": {
                                    "value": "choice"
                                },
                                "answerOption": [
                                    {
                                        "value": {
                                            "code": {
                                                "value": "daily"
                                            },
                                            "display": {
                                                "value": "Daily"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "weekly"
                                            },
                                            "display": {
                                                "value": "Weekly"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "monthly"
                                            },
                                            "display": {
                                                "value": "Monthly"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "2.5"
                                },
                                "text": {
                                    "value": "WhatwasyourlastHbA1clevel?"
                                },
                                "type": {
                                    "value": "decimal"
                                }
                            }
                        ]
                    },
                    {
                        "linkId": {
                            "value": "3"
                        },
                        "text": {
                            "value": "COVID-19diagnosis"
                        },
                        "type": {
                            "value": "group"
                        },
                        "item": [
                            {
                                "linkId": {
                                    "value": "3.1"
                                },
                                "text": {
                                    "value": "Doyousmoke?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.2"
                                },
                                "text": {
                                    "value": "Doyouhaveanyunderlyinghealthconditions?"
                                },
                                "type": {
                                    "value": "string"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.3"
                                },
                                "text": {
                                    "value": "Haveyouexperiencedfeverinthelast24hours?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.4"
                                },
                                "text": {
                                    "value": "Haveyouexperiencedcoughinthelast24hours?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.5"
                                },
                                "text": {
                                    "value": "Haveyouexperiencedshortnessofbreathinthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.6"
                                },
                                "text": {
                                    "value": "Haveyouexperiencedfatigueinthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.7"
                                },
                                "text": {
                                    "value": "Haveyouexperiencedmuscleorbodyachesinthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.8"
                                },
                                "text": {
                                    "value": "Haveyouexperiencedheadacheinthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.9"
                                },
                                "text": {
                                    "value": "Haveyouexperiencednewlossoftasteorsmellinthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.10"
                                },
                                "text": {
                                    "value": "Haveyouexperiencedsorethroatinthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.11"
                                },
                                "text": {
                                    "value": "Haveyouexperiencedcongestionorrunnynoseinthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.12"
                                },
                                "text": {
                                    "value": "Haveyouexperiencednauseaorvomitinginthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.13"
                                },
                                "text": {
                                    "value": "Haveyouexperienceddiarrheainthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.14"
                                },
                                "text": {
                                    "value": "HaveyourecentlytraveledtoaCOVID-19affectedarea?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.15"
                                },
                                "text": {
                                    "value": "HaveyoutestedpositiveforCOVID-19inthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.16"
                                },
                                "text": {
                                    "value": "HaveyouhadclosecontactwithsomeonewhotestedpositiveforCOVID-19inthepast14days?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "3.17"
                                },
                                "text": {
                                    "value": "Selectanyknownmedicalconditions."
                                },
                                "type": {
                                    "value": "open-choice"
                                },
                                "answerOption": [
                                    {
                                        "value": {
                                            "code": {
                                                "value": "diabetes"
                                            },
                                            "display": {
                                                "value": "Diabetes"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "hypertension"
                                            },
                                            "display": {
                                                "value": "Hypertension"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "asthma"
                                            },
                                            "display": {
                                                "value": "Asthma"
                                            }
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "linkId": {
                            "value": "4"
                        },
                        "text": {
                            "value": "COVID-19Vaccination"
                        },
                        "type": {
                            "value": "group"
                        },
                        "item": [
                            {
                                "linkId": {
                                    "value": "4.1"
                                },
                                "text": {
                                    "value": "HaveyoureceivedaCOVID-19vaccine?"
                                },
                                "type": {
                                    "value": "boolean"
                                }
                            },
                            {
                                "linkId": {
                                    "value": "4.2"
                                },
                                "text": {
                                    "value": "WhichCOVID-19vaccinedidyoureceive?"
                                },
                                "type": {
                                    "value": "choice"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "4.1"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "value": true
                                        }
                                    }
                                ],
                                "answerOption": [
                                    {
                                        "value": {
                                            "code": {
                                                "value": "pfizer"
                                            },
                                            "display": {
                                                "value": "Pfizer-BioNTech"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "moderna"
                                            },
                                            "display": {
                                                "value": "Moderna"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "janssen"
                                            },
                                            "display": {
                                                "value": "Johnson&Johnson'sJanssen"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "astrazeneca"
                                            },
                                            "display": {
                                                "value": "AstraZeneca"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "sinopharm"
                                            },
                                            "display": {
                                                "value": "Sinopharm"
                                            }
                                        }
                                    },
                                    {
                                        "value": {
                                            "code": {
                                                "value": "sinovac"
                                            },
                                            "display": {
                                                "value": "Sinovac"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "4.3"
                                },
                                "text": {
                                    "value": "DateofthelastCOVID-19vaccination"
                                },
                                "type": {
                                    "value": "date"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "4.1"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "value": true
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "4.4"
                                },
                                "text": {
                                    "value": "Didyouexperienceanysideeffects?"
                                },
                                "type": {
                                    "value": "boolean"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "4.1"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "value": true
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "4.5"
                                },
                                "text": {
                                    "value": "Pleasedescribethesideeffectsyouexperienced."
                                },
                                "type": {
                                    "value": "text"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "4.4"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "value": true
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "4.6"
                                },
                                "text": {
                                    "value": "Didyoureceiveaboosterdose?"
                                },
                                "type": {
                                    "value": "boolean"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "4.1"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "value": true
                                        }
                                    }
                                ]
                            },
                            {
                                "linkId": {
                                    "value": "4.7"
                                },
                                "text": {
                                    "value": "Dateoftheboosterdose"
                                },
                                "type": {
                                    "value": "date"
                                },
                                "enableWhen": [
                                    {
                                        "question": {
                                            "value": "4.6"
                                        },
                                        "operator": {
                                            "value": "="
                                        },
                                        "answer": {
                                            "value": true
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
            "messageTitle": null,
                "message": "Success",
                    "code": 0,
                        "responseWidget": null
}