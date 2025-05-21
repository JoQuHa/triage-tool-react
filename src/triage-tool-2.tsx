  // Sore Throat Screen
  const SoreThroatScreen = () => (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Triage: Sore throat</h1>
      </div>
      
      <div className="p-6">
        <BreadcrumbNav />
        
        <div className="bg-gray-100 p-4 mb-6 rounded-lg border-l-4 border-gray-400">
          <h2 className="text-lg font-semibold mb-2">Rules for Triage:</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Triage is available Monday through Friday 8am to 8pm CST</li>
            <li>Triage only services existing patients, if a new patient expresses Triage symptoms, please advise them to reach out to their existing provider. This includes patients that have not been seen in three years.</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <SectionTitle title="Is this a new or existing chronic issue?" />
          <p className="mb-2 text-gray-600"><strong>New:</strong> the patient has not experienced this condition before or has been receiving treatment less than 1 month</p>
          <p className="mb-2 text-gray-600"><strong>Existing:</strong> the patient has been receiving treatment for this condition for over 1 month and the condition is getting worse.</p>
          
          <div className="mt-3">
            <RadioGroup
              options={[
                { value: 'new', label: 'New' },
                { value: 'existing', label: 'Existing' }
              ]}
              value={patientResponses.soreThroatConditionType}
              onChange={handleRadioChange}
              name="soreThroatConditionType"
              required={true}
            />
          </div>
        </div>
        
        <div className="mb-6">
          <SectionTitle title="Things to listen for (do not ask these questions)" />
          <p className="mb-2">Sore Throat Symptoms may include:</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Scratchy</li>
            <li>Painful swallowing</li>
            <li>Hoarse</li>
            <li>Raw</li>
            <li>Dry throat</li>
            <li>Irritation</li>
            <li>Burning sensation</li>
            <li>Swollen throat</li>
            <li>Tightness</li>
            <li>Throat discomfort</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <SectionTitle title="Questions to ask" />
          <ol className="list-decimal pl-6 text-gray-700">
            <li className="mb-1">Do you choke when swallowing food, liquids or saliva?</li>
            <li className="mb-1">Are you drooling?</li>
            <li className="mb-1">Do you have any new or unexplained rash?</li>
            <li className="mb-1">Have you had no urination in the last 8 hours, dark urine, very dry mouth and no tears?</li>
            <li>Has your sore throat lasted more than 1 week along with temperature greater than 100.4F?</li>
          </ol>
        </div>
        
        <div className="mb-6">
          <RadioGroup
            question="Does the patient indicate yes to any of the questions above?"
            options={[
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' }
            ]}
            value={patientResponses.soreThroatQuestionsYes}
            onChange={handleRadioChange}
            name="soreThroatQuestionsYes"
            required={true}
          />
        </div>
        
        {patientResponses.soreThroatQuestionsYes === 'yes' && (
          <>
            <div className="mb-6">
              <RadioGroup
                question="Are they a value-based care patient?"
                options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' }
                ]}
                value={patientResponses.soreThroatVBC}
                onChange={handleRadioChange}
                name="soreThroatVBC"
              />
            </div>
            
            {patientResponses.soreThroatVBC === 'yes' && (
              <div className="mb-6">
                <p className="underline text-blue-600 mb-2">VBC Tiers in Athena</p>
                <div className="bg-purple-50 p-4 rounded border border-purple-200">
                  <div className="flex justify-center">
                    <div className="bg-purple-100 border border-purple-300 px-4 py-2 rounded inline-flex items-center">
                      <span className="font-semibold text-purple-700 mr-1">VBC | Tier1 |</span>
                      <span className="text-purple-700">Patient Information</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="mb-6">
              <RadioGroup
                question="Is the patient calling from Colorado?"
                options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' }
                ]}
                value={patientResponses.soreThroatColorado}
                onChange={handleRadioChange}
                name="soreThroatColorado"
              />
            </div>
            
            {patientResponses.soreThroatColorado === 'yes' && (
              <div className="mb-6">
                <p className="mb-2">Transfer them to:</p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>(5995678143, VMD-Nurse Triage-Colorado ENG)</li>
                  <li>(5995678144, VMD-Nurse Triage-Colorado SPA)</li>
                </ul>
              </div>
            )}
            
            {patientResponses.soreThroatColorado === 'no' && (
              <div className="bg-blue-50 p-4 mb-6 rounded-lg shadow-sm border border-blue-200">
                <p className="mb-2">Follow the steps listed in the <span className="underline text-blue-600 font-medium">Transfers and Conferencing Calls in Five9</span> and Warm transfer to Triage.</p>
                <p className="mt-2">If triage doesn't answer, follow the steps listed in <span className="underline text-blue-600 font-medium">Case Scenario</span> and send an urgent case.</p>
                <p className="mt-2">If you need to send a case, paste the following question and answer into the case description:</p>
                <ul className="list-disc pl-6 text-gray-700 mt-2">
                  <li>Did it start today or within the past 24 hours AND the patient has a temperature of 101 or higher AND the patient cannot swallow liquids/saliva and is drooling.</li>
                </ul>
                <p className="mt-2">If you need to send a case, the type will be "other" and the in the Case Subject: indicate "Call Center Sore Throat"</p>
              </div>
            )}
          </>
        )}
        
        {patientResponses.soreThroatQuestionsYes === 'no' && (
          <>
            <div className="mb-6">
              <RadioGroup
                question="Are they a value-based care patient?"
                options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' }
                ]}
                value={patientResponses.soreThroatVBC}
                onChange={handleRadioChange}
                name="soreThroatVBC"
              />
            </div>
            
            {patientResponses.soreThroatVBC === 'yes' && (
              <div className="mb-6">
                <p className="underline text-blue-600 mb-2">VBC Tiers in Athena</p>
                <div className="bg-purple-50 p-4 rounded border border-purple-200">
                  <div className="flex justify-center">
                    <div className="bg-purple-100 border border-purple-300 px-4 py-2 rounded inline-flex items-center">
                      <span className="font-semibold text-purple-700 mr-1">VBC | Tier1 |</span>
                      <span className="text-purple-700">Patient Information</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="mb-6">
              <RadioGroup
                question="Is the patient calling from Colorado?"
                options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' }
                ]}
                value={patientResponses.soreThroatColorado}
                onChange={handleRadioChange}
                name="soreThroatColorado"
              />
            </div>
            
            {patientResponses.soreThroatColorado === 'yes' && (
              <div className="mb-6">
                <p className="mb-2">Transfer the call to the Colorado triage team using one of the following speed dials.</p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>VMD-Nurse Triage-Colorado (Hive) RN ENG</li>
                  <li>VMD-Nurse Triage-Colorado (Hive) RN SPA</li>
                </ul>
                <p className="mt-2">If the Colorado triage team is unavailable, attempt to transfer the call to the clinic's backline. If the backline is unresponsive, create and send an urgent patient case.</p>
              </div>
            )}
            
            {patientResponses.soreThroatColorado === 'no' && (
              <>
                <div className="mb-6">
                  <p className="mb-2">Follow the steps listed in the <span className="underline text-blue-600 font-medium">Appointment Scheduling</span> and get them scheduled for the earliest available appointment.</p>
                </div>
                
                <div className="mb-6">
                  <RadioGroup
                    question="Where you able to locate an appointment within the next five days?"
                    options={[
                      { value: 'yes', label: 'Yes' },
                      { value: 'no', label: 'No' }
                    ]}
                    value={patientResponses.appointmentAvailable}
                    onChange={handleRadioChange}
                    name="appointmentAvailable"
                  />
                </div>
                
                {patientResponses.appointmentAvailable === 'yes' && (
                  <div className="mb-6 bg-green-50 p-4 rounded-lg shadow-sm border border-green-200">
                    <p className="text-green-700">Schedule the patient and you are done</p>
                  </div>
                )}
                
                {patientResponses.appointmentAvailable === 'no' && (
                  <div className="mb-6 bg-blue-50 p-4 rounded-lg shadow-sm border border-blue-200">
                    <p className="font-semibold mb-2">If you are not able to find an appointment</p>
                    <ol className="list-decimal pl-6 text-gray-700 mb-3">
                      <li>Create an "Other case"</li>
                      <li>Paste in the case description notes the questions used to identify if the call should go to triage.</li>
                      <li>Does the patient have history of any of the following (just one-does not have to be all):
                        <ol className="list-decimal pl-6 mt-2 mb-2">
                          <li>Would you describe your pain as squeezing, crushing, heaviness or pressure?</li>
                          <li>Does the pain go down your left arm or in your left jaw?</li>
                          <li>Does the pain get worse when you take a deep breath?</li>
                          <li>Do you have a history of heart attack?</li>
                          <li>Do you have a history of blood clots?</li>
                          <li>Did you have surgery in the past 30 days?</li>
                          <li>Females: Is there a possibility you may be pregnant?</li>
                        </ol>
                      </li>
                      <li>Answer the questions and provide the clinic with as much information from the patient as possible.</li>
                      <li>Mark the case urgent and advise the caller that someone will contact them back within the next 1 business day.</li>
                    </ol>
                    <p className="mt-2">If you need to send a case, the type will be "other" and the in the Case Subject: indicate "Call Center Chest Pain"</p>
                  </div>
                )}
              </>
            )}
          </>
        )}
        
        <div className="flex justify-between">
          <button 
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
            onClick={goBack}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );import React, { useState, useEffect } from 'react';

const EnhancedTriageTool = () => {
  // Main state management
  const [currentScreen, setCurrentScreen] = useState('main');
  const [patientType, setPatientType] = useState('');
  const [symptomType, setSymptomType] = useState('');
  const [patientResponses, setPatientResponses] = useState({});
  const [history, setHistory] = useState([]);
  const [breadcrumbs, setBreadcrumbs] = useState([{ name: 'Home', screen: 'main' }]);
  const [pregnancyComplicationType, setPregnancyComplicationType] = useState('');

  // Update breadcrumbs when screens change
  useEffect(() => {
    updateBreadcrumbs(currentScreen);
  }, [currentScreen]);

  // Function to update breadcrumbs based on current screen
  const updateBreadcrumbs = (screen) => {
    let newBreadcrumbs = [{ name: 'Home', screen: 'main' }];
    
    if (screen === 'main') {
      setBreadcrumbs(newBreadcrumbs);
      return;
    }
    
    if (screen === 'symptoms') {
      let patientTypeName = '';
      if (patientType === 'infant') patientTypeName = 'Infant/Pediatric';
      if (patientType === 'adult') patientTypeName = 'Adult';
      if (patientType === 'pregnant') patientTypeName = 'Pregnancy';
      
      newBreadcrumbs.push({ name: patientTypeName, screen: 'symptoms' });
    }
    
    if (screen === 'dryMouthPediatric') {
      newBreadcrumbs.push({ name: 'Infant/Pediatric', screen: 'symptoms' });
      newBreadcrumbs.push({ name: 'Dry Mouth', screen: 'dryMouthPediatric' });
    }
    
    if (screen === 'chestPain') {
      newBreadcrumbs.push({ name: 'Adult', screen: 'symptoms' });
      newBreadcrumbs.push({ name: 'Chest Pain', screen: 'chestPain' });
    }
    
    if (screen === 'pregnancyComplications') {
      newBreadcrumbs.push({ name: 'Pregnancy', screen: 'symptoms' });
      newBreadcrumbs.push({ name: 'Complications', screen: 'pregnancyComplications' });
    }
    
    if (screen === 'bloodSugar') {
      newBreadcrumbs.push({ name: 'Adult', screen: 'symptoms' });
      newBreadcrumbs.push({ name: 'Blood Sugar', screen: 'bloodSugar' });
    }
    
    if (screen === 'diarrheaPediatric') {
      newBreadcrumbs.push({ name: 'Infant/Pediatric', screen: 'symptoms' });
      newBreadcrumbs.push({ name: 'Diarrhea', screen: 'diarrheaPediatric' });
    }
    
    if (screen === 'bloodyNose') {
      newBreadcrumbs.push({ name: 'Adult', screen: 'symptoms' });
      newBreadcrumbs.push({ name: 'Bloody Nose', screen: 'bloodyNose' });
    }
    
    setBreadcrumbs(newBreadcrumbs);
  };

  // Function to handle radio button changes
  const handleRadioChange = (questionId, value) => {
    setPatientResponses({
      ...patientResponses,
      [questionId]: value
    });
  };

  // Function to navigate to a new screen
  const navigateTo = (screenId) => {
    setHistory([...history, currentScreen]);
    setCurrentScreen(screenId);
  };

  // Function to go back to the previous screen
  const goBack = () => {
    if (history.length > 0) {
      const prevScreen = history[history.length - 1];
      setHistory(history.slice(0, -1));
      setCurrentScreen(prevScreen);
    }
  };

  // Function to handle patient type selection
  const handlePatientTypeChange = (type) => {
    setPatientType(type);
    navigateTo('symptoms');
  };

  // Function to handle symptom selection
  const handleSymptomSelection = (symptom) => {
    setSymptomType(symptom);
    
    if (patientType === 'infant') {
      if (symptom === 'dryMouth') {
        navigateTo('dryMouthPediatric');
      } else if (symptom === 'diarrhea') {
        navigateTo('diarrheaPediatric');
      } else if (symptom === 'vomiting') {
        navigateTo('vomitingPediatric');
      } else if (symptom === 'sleepy') {
        navigateTo('sleepyPediatric');
      } else if (symptom === 'rash') {
        navigateTo('rashPediatric');
      }
    } else if (patientType === 'adult') {
      if (symptom === 'chestPain') {
        navigateTo('chestPain');
      } else if (symptom === 'bloodyNose') {
        navigateTo('bloodyNose');
      } else if (symptom === 'bloodSugar') {
        navigateTo('bloodSugar');
      } else if (symptom === 'shortnessOfBreath') {
        navigateTo('shortnessOfBreath');
      } else if (symptom === 'soreThroat') {
        navigateTo('soreThroat');
      } else if (symptom === 'utiSymptoms') {
        navigateTo('utiSymptoms');
      } else if (symptom === 'trauma') {
        navigateTo('trauma');
      } else if (symptom === 'strokeSymptoms') {
        navigateTo('strokeSymptoms');
      } else if (symptom === 'rash') {
        navigateTo('rash');
      }
    } else if (patientType === 'pregnant') {
      navigateTo('pregnancyComplications');
    }
  };

  // Breadcrumb navigation component
  const BreadcrumbNav = () => (
    <nav className="mb-6">
      <ol className="flex flex-wrap text-sm text-gray-600">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2 text-gray-400">/</span>}
            {index === breadcrumbs.length - 1 ? (
              <span className="font-semibold text-blue-600">{crumb.name}</span>
            ) : (
              <button 
                className="hover:text-blue-600"
                onClick={() => setCurrentScreen(crumb.screen)}
              >
                {crumb.name}
              </button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );

  // Radio button group component
  const RadioGroup = ({ question, options, value, onChange, name, required = false }) => (
    <div className="mb-4">
      {question && (
        <p className="mb-2 text-gray-700">
          {question}
          {required && <span className="text-red-500 ml-1">*</span>}
        </p>
      )}
      <div className="space-y-2">
        {options.map((option) => (
          <div key={`${name}-${option.value}`} className="flex items-center border border-gray-200 rounded p-2 hover:bg-gray-50">
            <input
              type="radio"
              id={`${name}-${option.value}`}
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(name, option.value)}
              className="mr-2 h-4 w-4 text-blue-600"
            />
            <label htmlFor={`${name}-${option.value}`} className="cursor-pointer w-full">{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );

  // Symptom list component
  const SymptomList = ({ title, symptoms }) => (
    <div className="mb-6 bg-white rounded-lg shadow-sm p-4 border-l-4 border-blue-500">
      <h3 className="font-semibold mb-2 text-gray-800">{title}</h3>
      <ul className="list-disc pl-6 text-gray-700">
        {symptoms.map((symptom, index) => (
          <li key={index} className="mb-1">{symptom}</li>
        ))}
      </ul>
    </div>
  );

  // Questions list component
  const QuestionsList = ({ questions }) => (
    <div className="mb-6 bg-white rounded-lg shadow-sm p-4 border-l-4 border-amber-500">
      <h3 className="font-semibold mb-2 text-gray-800">Questions to ask</h3>
      <ol className="list-decimal pl-6 text-gray-700">
        {questions.map((question, index) => (
          <li key={index} className="mb-2">{question}</li>
        ))}
      </ol>
    </div>
  );

  // Colorado transfer instructions component
  const ColoradoTransferInstructions = () => (
    <div className="mb-6 bg-blue-50 rounded-lg shadow-sm p-4 border border-blue-200">
      <h3 className="font-semibold mb-2 text-gray-800">Colorado Transfer Instructions</h3>
      <p className="mb-2 text-gray-700">Transfer the call to the Colorado triage team using one of the following speed dials:</p>
      <ul className="list-disc pl-6 text-gray-700 mb-3">
        <li>VMD-Nurse Triage-Colorado (Hive) RN ENG</li>
        <li>VMD-Nurse Triage-Colorado (Hive) RN SPA</li>
      </ul>
      <p className="text-gray-700">If the Colorado triage team is unavailable, attempt to transfer the call to the clinic's backline. If the backline is unresponsive, create and send an urgent patient case.</p>
    </div>
  );

  // Transfer instructions component
  const TransferInstructions = ({ type }) => (
    <div className="mb-6 bg-blue-50 rounded-lg shadow-sm p-4 border border-blue-200">
      <h3 className="font-semibold mb-2 text-gray-800">Transfer Instructions</h3>
      <p className="mb-2 text-gray-700">Follow the steps listed in the <span className="underline text-blue-600 font-medium">Transfers and Conferencing Calls in Five9</span> and Warm transfer to Triage.</p>
      <p className="mb-3 text-gray-700">If triage doesn't answer, follow the steps listed in <span className="underline text-blue-600 font-medium">PSR Escalated Calls Queue Workflow</span> and escalate the call.</p>
      
      <h4 className="font-medium mb-2 text-gray-800">Give the triage app the following info:</h4>
      <ol className="list-decimal pl-6 text-gray-700 mb-3">
        <li>Give Market and MRN Number</li>
        <li>Explain Symptoms Briefly</li>
        <li>Give Protocol Used</li>
        <li>Give which question the patient answered yes</li>
      </ol>
      
      <div className="bg-gray-100 p-3 rounded text-gray-700 text-sm italic">
        <p>For example:</p>
        <p>"I have a patient in the Houston market. MRN _____. Patient has been complaining of {type === 'chest' ? 'chest pain, described as crushing pressure' : type === 'uti' ? 'UTI symptoms, pain/burning with urination, back pain for about 3 days' : 'symptoms'} for about 3 days. I used the {type === 'chest' ? 'Chest Pain' : type === 'uti' ? 'UTI' : 'appropriate'} protocol and they answered yes to the question '{type === 'chest' ? 'Would you describe your pain as squeezing or crushing like a heart attack?' : type === 'uti' ? 'Are you having pain/burning with urination?' : 'relevant question'}'. Can you assist me with this patient?"</p>
      </div>
    </div>
  );

  // Case creation instructions component
  const CaseCreationInstructions = ({ symptomType }) => (
    <div className="mb-6 bg-blue-50 rounded-lg shadow-sm p-4 border border-blue-200">
      <h3 className="font-semibold mb-2 text-gray-800">Case Creation Instructions</h3>
      <ul className="list-disc pl-6 text-gray-700 mb-3">
        <li>Create an "Other case"</li>
        <li>Paste in the case description the following questions:
          <ol className="list-decimal pl-6 mt-2 mb-2">
            {symptomType === 'dryMouth' && (
              <>
                <li>Did the dry mouth start within the last few hours or days?</li>
                <li>Is the dry mouth severe?</li>
                <li>Are there any ulcers or sores in the mouth? If yes, are they in a specific part of the mouth?</li>
                <li>Does your child have a fever? If yes, do you know the temperature, how it was measured, and when it started?</li>
                <li>Does your child have any other symptoms, such as vomiting or diarrhea?</li>
              </>
            )}
            {symptomType === 'diarrhea' && (
              <>
                <li>Did the symptoms start within the past 24 hours and has the child vomited more than 4 times in the past 24 hours?</li>
                <li>Is the child experiencing pain that interviews with normal activities or wakes them up and then stomach is tender to the touch?</li>
                <li>Has the child had diarrhea more than 5 times in the past 24 hours, or is urinating less then 3 times in 24 hours, and not able to keep down liquids?</li>
                <li>Did the child travel recently to foreign country or been exposed to someone with Diarrhea?</li>
                <li>Has the child taken antibiotics in the past 30 days?</li>
              </>
            )}
            {symptomType === 'chest' && (
              <>
                <li>Would you describe your pain as squeezing, crushing, heaviness or pressure?</li>
                <li>Does the pain go down your left arm or in your left jaw?</li>
                <li>Does the pain get worse when you take a deep breath?</li>
                <li>Do you have a history of heart attack?</li>
                <li>Do you have a history of blood clots?</li>
                <li>Did you have surgery in the past 30 days?</li>
                <li>Females: Is there a possibility you may be pregnant?</li>
              </>
            )}
          </ol>
        </li>
        <li>Answer the questions and provide the clinic with as much information from the patient as possible.</li>
        <li>Mark the case urgent and advise the caller that someone will contact them back within the next 1 business day.</li>
      </ul>
      
      <div className="bg-gray-100 p-3 rounded text-gray-700">
        <p>If you need to send a case, the type will be "other" and in the Case Subject: indicate "Call Center {symptomType === 'dryMouth' ? 'Dry Mouth Infant' : symptomType === 'diarrhea' ? 'Diarrhea Infant/Pediatric Symptoms' : 'Chest Pain'}"</p>
      </div>
    </div>
  );

  // Section Title component
  const SectionTitle = ({ title, className = "" }) => (
    <h2 className={`text-lg font-semibold mb-3 bg-gray-100 p-2 rounded ${className}`}>
      {title}
    </h2>
  );

  // Card component for options
  const OptionCard = ({ title, description, onClick, selected = false }) => (
    <div 
      className={`bg-white border rounded-lg shadow-sm p-4 transition-colors cursor-pointer hover:shadow-md ${selected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
      onClick={onClick}
    >
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      {description && <p className="text-gray-600 text-sm">{description}</p>}
    </div>
  );

  // Main screen render function
  const MainScreen = () => (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Medical Triage Protocol</h1>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <SectionTitle title="Medical Emergency" className="bg-red-50 text-red-700 border-l-4 border-red-500 pl-3" />
          <ol className="list-decimal pl-6 mb-3">
            <li className="mb-2">If the caller is suicidal: <button className="bg-blue-100 text-blue-700 px-2 py-1 rounded font-semibold text-sm">GUIDANCE FOR SUICIDAL PATIENTS</button></li>
            <li>Is the caller concerned about an accidental poisoning or overdose? If they are, initiate a conference call to 800-222-1222.</li>
          </ol>
          <p className="mt-4 italic text-gray-600">If the patient is experiencing symptoms, move to the next section.</p>
        </div>

        <div className="mb-6">
          <SectionTitle title="General Information For Triage" />
          
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Rules for Triage:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Triage is available Monday through Friday 8am to 8pm CST</li>
              <li>Triage services are only available to clinics supported by the PAC. If a patient calls from a clinic we do not support, transfer the call to the backline. <button className="text-blue-600 underline">Clinics We Don't Support FAQ</button></li>
              <li>Triage only services existing patients, if a new patient expresses Triage symptoms, please advise them to reach out to their existing provider. This includes patients that have not been seen in three years.</li>
              <li>Calls regarding non-critical lab results should go to the backline. If the backline doesn't answer, send a normal patient case (for critical labs please follow the <button className="text-blue-600 underline">PSR Process for Critical Labs</button>)</li>
              <li className="bg-yellow-100 p-2 rounded">If a patient insists on scheduling an appointment instead of completing the triage process, please schedule the appointment and <strong>make sure to note in the appointment details that the patient declined triage</strong>.
                <ul className="list-none pl-6 mt-2">
                  <li className="flex items-start">
                    <span className="text-amber-700 mr-2">•</span>
                    <span>If you cannot find an available appointment at the patient's regular clinic or with their PCP, <strong>do not transfer the call to the backline. Instead, offer to search for availability with other providers at different locations.</strong> If no appointments are available after searching alternative locations, submit an urgent patient case to the patient's provider.</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          
          <p className="italic text-gray-600">Please note: If medical complaint is not listed in the protocols, please schedule appointment. If patient states that they urgently need to see their provider, send urgent patient case.</p>
        </div>

        <div className="mb-6">
          <SectionTitle title="Who is experiencing the symptoms?" />
          <h3 className="font-semibold mb-4">Triage Type Symptoms</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <OptionCard 
              title="Infant/Pediatric" 
              description="(0 to two years old) or Pediatric Symptoms (under 18 years old)"
              onClick={() => handlePatientTypeChange('infant')}
              selected={patientType === 'infant'}
            />
            
            <OptionCard 
              title="Adult" 
              description="Symptoms (18 and older)"
              onClick={() => handlePatientTypeChange('adult')}
              selected={patientType === 'adult'}
            />
            
            <OptionCard 
              title="Pregnant Patient" 
              description="at risk of miscarriage or other alarming symptoms"
              onClick={() => handlePatientTypeChange('pregnant')}
              selected={patientType === 'pregnant'}
            />
          </div>
        </div>
      </div>
    </div>
  );

  // Symptoms screen based on patient type
  const SymptomsScreen = () => {
    let symptomOptions = [];
    let patientTypeTitle = '';
    
    if (patientType === 'infant') {
      patientTypeTitle = 'Infant/Pediatric Symptoms';
      symptomOptions = [
        { title: 'Infant Color Change', description: '*** 12 months or younger', value: 'colorChange' },
        { title: 'Vomiting', description: 'Infant/Pediatric Symptoms', value: 'vomiting' },
        { title: 'Diarrhea', description: 'Infant/Pediatric Symptoms', value: 'diarrhea' },
        { title: 'Dry Mouth', description: 'Infant/Pediatric Symptoms', value: 'dryMouth' },
        { title: 'Little Or No Urinating', description: 'Infant/Pediatric Symptoms', value: 'urinating' },
        { title: 'Very sleepy and does not wake up', description: 'when they normally would', value: 'sleepy' },
        { title: 'Rash', description: 'Infant/Pediatric', value: 'rash' }
      ];
    } else if (patientType === 'adult') {
      patientTypeTitle = 'Adult Symptoms';
      symptomOptions = [
        { title: 'Slurred speech, confusion, weakness', description: 'unexplained drowsiness, facial drooping, fainting', value: 'strokeSymptoms' },
        { title: 'Allergic reaction', description: 'Hives, itching, face/throat swelling or shortness of breath', value: 'allergic' },
        { title: 'Leg swelling', description: 'Can be blood clot, infection or fluid overload', value: 'legSwelling' },
        { title: 'Blood Sugar Issues', description: 'Over 350 or under 60', value: 'bloodSugar' },
        { title: 'Chest Pain', description: '', value: 'chestPain' },
        { title: 'Shortness of breath', description: '', value: 'shortnessOfBreath' },
        { title: 'Trauma', description: 'Fall, possible fracture', value: 'trauma' },
        { title: 'Sore throat', description: '', value: 'soreThroat' },
        { title: 'UTI symptoms', description: 'Urinary tract infections', value: 'utiSymptoms' },
        { title: 'Bloody Nose', description: '', value: 'bloodyNose' },
        { title: 'Rash', description: '', value: 'rash' }
      ];
    } else if (patientType === 'pregnant') {
      patientTypeTitle = 'Pregnancy Complications';
      symptomOptions = [
        { title: 'Pregnancy Complications', description: '', value: 'pregnancyComplications' }
      ];
    }
    
    return (
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold">What symptoms are they having?</h1>
          <p className="text-sm mt-1">{patientTypeTitle}</p>
        </div>
        
        <div className="p-6">
          <BreadcrumbNav />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {symptomOptions.map((option) => (
              <OptionCard
                key={option.value}
                title={option.title}
                description={option.description}
                onClick={() => handleSymptomSelection(option.value)}
                selected={symptomType === option.value}
              />
            ))}
          </div>
          
          <div className="flex justify-between">
            <button 
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
              onClick={goBack}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Dry Mouth Pediatric Screen
  const DryMouthPediatricScreen = () => (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Triage: Dry Mouth Infant/Pediatric Symptoms</h1>
      </div>
      
      <div className="p-6">
        <BreadcrumbNav />
        
        <div className="bg-gray-100 p-4 mb-6 rounded-lg border-l-4 border-gray-400">
          <h2 className="text-lg font-semibold mb-2">Rules for Triage:</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Triage is available Monday through Friday 8am to 8pm CST</li>
            <li>Triage only services existing patients, if a new patient expresses Triage symptoms, please advise them to reach out to their existing provider. This includes patients that have not been seen in three years.</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <SectionTitle title="Market" />
          <RadioGroup
            question="Is the patient in Colorado?"
            options={[
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' }
            ]}
            value={patientResponses.patientInColorado}
            onChange={handleRadioChange}
            name="patientInColorado"
            required={true}
          />
        </div>
        
        {patientResponses.patientInColorado === 'yes' && (
          <ColoradoTransferInstructions />
        )}
        
        {patientResponses.patientInColorado === 'no' && (
          <>
            <SymptomList 
              title="Symptoms may include:"
              symptoms={[
                'Dehydration',
                'Thirst',
                'Thick or Sticky Saliva',
                'Cracked lips',
                'Chapped',
                'Cotton mouth',
                'Dryness',
                'Parched',
                'Difficulty swallowing'
              ]}
            />
            
            <QuestionsList 
              questions={[
                'Did the dry mouth start within the last few hours or days?',
                'Is the dry mouth severe?',
                'Are there any ulcers or sores in the mouth? If yes, are they in a specific part of the mouth?',
                'Does your child have a fever? If yes, do you know the temperature, how it was measured, and when it started?',
                'Does your child have any other symptoms, such as vomiting or diarrhea?'
              ]}
            />
            
            <div className="mb-6">
              <RadioGroup
                question="Does the patient indicate yes to any of the questions above?"
                options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' }
                ]}
                value={patientResponses.dryMouthQuestionsYes}
                onChange={handleRadioChange}
                name="dryMouthQuestionsYes"
                required={true}
              />
            </div>
            
            {patientResponses.dryMouthQuestionsYes === 'yes' && (
              <TransferInstructions type="other" />
            )}
            
            {patientResponses.dryMouthQuestionsYes === 'no' && (
              <>
                <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                  <p className="text-gray-700">Follow the steps listed in the <span className="underline text-blue-600 font-medium">Appointment Scheduling</span> and get them scheduled for the earliest available appointment.</p>
                </div>
                
                <div className="mb-6">
                  <RadioGroup
                    question="Were you able to locate an appointment?"
                    options={[
                      { value: 'yes', label: 'Yes' },
                      { value: 'no', label: 'No' }
                    ]}
                    value={patientResponses.appointmentAvailable}
                    onChange={handleRadioChange}
                    name="appointmentAvailable"
                  />
                </div>
                
                {patientResponses.appointmentAvailable === 'yes' && (
                  <div className="mb-6 bg-green-50 p-4 rounded-lg shadow-sm border border-green-200">
                    <h3 className="font-semibold mb-2 text-green-800">Success</h3>
                    <p className="text-green-700">Schedule the patient and you are done.</p>
                  </div>
                )}
                
                {patientResponses.appointmentAvailable === 'no' && (
                  <CaseCreationInstructions symptomType="dryMouth" />
                )}
              </>
            )}
          </>
        )}
        
        <div className="flex justify-between">
          <button 
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
            onClick={goBack}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
  
  // Chest Pain Screen
  const ChestPainScreen = () => (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Triage: Chest Pain</h1>
      </div>
      
      <div className="p-6">
        <BreadcrumbNav />
        
        <div className="bg-gray-100 p-4 mb-6 rounded-lg border-l-4 border-gray-400">
          <h2 className="text-lg font-semibold mb-2">Rules for Triage:</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Triage is available Monday through Friday 8am to 8pm CST</li>
            <li>Triage only services existing patients, if a new patient expresses Triage symptoms, please advise them to reach out to their existing provider. This includes patients that have not been seen in three years.</li>
          </ul>
        </div>
        
        <div className="mb-6 bg-amber-50 p-4 rounded-lg shadow-sm border border-amber-200">
          <h3 className="font-semibold mb-2 text-amber-800">Things to listen for (do not ask these questions)</h3>
          <p className="mb-2 text-amber-700">Chest pain/ shortness of breath/ palpitations</p>
          
          <div className="bg-white border border-amber-200 p-3 mt-2 rounded">
            <h4 className="font-semibold mb-2 text-amber-800">Chest Pain</h4>
            <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 md:grid-cols-2">
              <li>Tightness</li>
              <li>Pressure</li>
              <li>Sharp pain</li>
              <li>Burning</li>
              <li>Squeezing</li>
              <li>Crushing</li>
              <li>Aching</li>
              <li>Radiating pain (to arm, neck, jaw)</li>
              <li>Heaviness</li>
              <li>Discomfort</li>
            </ul>
          </div>
        </div>
        
        <QuestionsList 
          questions={[
            'Would you describe your pain as squeezing or crushing like a heart attack?',
            'Does the pain go down your left arm or in your left jaw?',
            'Do you have a history of heart attack?',
            'Do you have a history of blood clots?',
            'Did you have surgery in the past 30 days?',
            'Females: Is there a possibility you may be pregnant?'
          ]}
        />
        
        <div className="mb-6">
          <RadioGroup
            question="Does the patient indicate yes to any of the questions above?"
            options={[
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' }
            ]}
            value={patientResponses.chestPainQuestionsYes}
            onChange={handleRadioChange}
            name="chestPainQuestionsYes"
            required={true}
          />
        </div>
        
        {patientResponses.chestPainQuestionsYes === 'yes' && (
          <TransferInstructions type="chest" />
        )}
        
        {patientResponses.chestPainQuestionsYes === 'no' && (
          <>
            <div className="mb-6">
              <RadioGroup
                question="Are they a value-based care patient?"
                options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' }
                ]}
                value={patientResponses.valueBasedCare}
                onChange={handleRadioChange}
                name="valueBasedCare"
              />
            </div>
            
            {patientResponses.valueBasedCare === 'yes' && (
              <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border">
                <p className="underline text-blue-600 font-medium mb-2">VBC Tiers in Athena</p>
                <div className="bg-purple-50 p-4 rounded border border-purple-200">
                  <div className="flex justify-center">
                    <div className="bg-purple-100 border border-purple-300 px-4 py-2 rounded inline-flex items-center">
                      <span className="font-semibold text-purple-700 mr-1">VBC | Tier1 |</span>
                      <span className="text-purple-700">Patient Information</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
              <p className="text-gray-700">Follow the steps listed in the <span className="underline text-blue-600 font-medium">Appointment Scheduling</span> and get them scheduled for the earliest available appointment.</p>
            </div>
          </>
        )}
        
        <div className="flex justify-between">
          <button 
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
            onClick={goBack}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
  
  // Blood Sugar Screen
  const BloodSugarScreen = () => (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Triage: Blood Sugar over 350 or under 60</h1>
      </div>
      
      <div className="p-6">
        <BreadcrumbNav />
        
        <div className="bg-gray-100 p-4 mb-6 rounded-lg border-l-4 border-gray-400">
          <h2 className="text-lg font-semibold mb-2">Rules for Triage:</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Triage is available Monday through Friday 8am to 8pm CST</li>
            <li>For Colorado only, there is a unique process where the Triage nurse may indicate to transfer to "DD-CO-Hive Black Chart issues" told by triage.</li>
            <li>Triage only services existing patients, if a new patient expresses Triage symptoms, please advise them to reach out to their existing provider. This includes patients that have not been seen in three years.</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <RadioGroup
            question="Is the patient reporting that their blood sugar is either above 350 or below 60?"
            options={[
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' }
            ]}
            value={patientResponses.bloodSugarIssue}
            onChange={handleRadioChange}
            name="bloodSugarIssue"
            required={true}
          />
        </div>
        
        {patientResponses.bloodSugarIssue === 'yes' && (
          <>
            <div className="mb-6">
              <RadioGroup
                question="Is the patient calling from Colorado?"
                options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' }
                ]}
                value={patientResponses.patientFromColorado}
                onChange={handleRadioChange}
                name="patientFromColorado"
              />
            </div>
            
            {patientResponses.patientFromColorado === 'yes' && (
              <ColoradoTransferInstructions />
            )}
            
            {patientResponses.patientFromColorado === 'no' && (
              <div className="mb-6 bg-blue-50 p-4 rounded-lg shadow-sm border border-blue-200">
                <p className="text-gray-700">Follow the steps listed in the <span className="underline text-blue-600 font-medium">Transfers and Conferencing Calls in Five9</span> and Warm transfer to Triage.</p>
              </div>
            )}
          </>
        )}
        
        {patientResponses.bloodSugarIssue === 'no' && (
          <>
            <div className="mb-6">
              <RadioGroup
                question="Are they a value-based care patient?"
                options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' }
                ]}
                value={patientResponses.valueBasedCare}
                onChange={handleRadioChange}
                name="valueBasedCare"
              />
            </div>
            
            {patientResponses.valueBasedCare === 'yes' && (
              <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border">
                <p className="underline text-blue-600 font-medium mb-2">VBC Tiers in Athena</p>
                <div className="bg-purple-50 p-4 rounded border border-purple-200">
                  <div className="flex justify-center">
                    <div className="bg-purple-100 border border-purple-300 px-4 py-2 rounded inline-flex items-center">
                      <span className="font-semibold text-purple-700 mr-1">VBC | Tier1 |</span>
                      <span className="text-purple-700">Patient Information</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="mb-6">
              <RadioGroup
                question="Is the patient calling from Colorado?"
                options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' }
                ]}
                value={patientResponses.patientFromColorado}
                onChange={handleRadioChange}
                name="patientFromColorado"
              />
            </div>
            
            {patientResponses.patientFromColorado === 'yes' && (
              <ColoradoTransferInstructions />
            )}
            
            {patientResponses.patientFromColorado === 'no' && (
              <>
                <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                  <p className="text-gray-700">Follow the steps listed in the <span className="underline text-blue-600 font-medium">Appointment Scheduling</span> and get them scheduled for the earliest available appointment.</p>
                </div>
                
                <div className="mb-6">
                  <RadioGroup
                    question="Where you able to locate an appointment within the next five days?"
                    options={[
                      { value: 'yes', label: 'Yes' },
                      { value: 'no', label: 'No' }
                    ]}
                    value={patientResponses.appointmentAvailable}
                    onChange={handleRadioChange}
                    name="appointmentAvailable"
                  />
                </div>
                
                {patientResponses.appointmentAvailable === 'yes' && (
                  <div className="mb-6 bg-green-50 p-4 rounded-lg shadow-sm border border-green-200">
                    <h3 className="font-semibold mb-2 text-green-800">Success</h3>
                    <p className="text-green-700">Schedule the patient and you are done.</p>
                  </div>
                )}
                
                {patientResponses.appointmentAvailable === 'no' && (
                  <div className="mb-6 bg-blue-50 p-4 rounded-lg shadow-sm border border-blue-200">
                    <p className="font-semibold text-gray-700 mb-2">If you are not able to find an appointment</p>
                    <p className="text-gray-700">Create and send a case with relevant information.</p>
                  </div>
                )}
              </>
            )}
          </>
        )}
        
        <div className="flex justify-between">
          <button 
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
            onClick={goBack}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
  
  // Bloody Nose Screen
  const BloodyNoseScreen = () => (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Triage: Bloody Nose</h1>
      </div>
      
      <div className="p-6">
        <BreadcrumbNav />
        
        <div className="bg-gray-100 p-4 mb-6 rounded-lg border-l-4 border-gray-400">
          <h2 className="text-lg font-semibold mb-2">Rules for Triage:</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Triage is available Monday through Friday 8am to 8pm CST</li>
            <li>Triage only services existing patients, if a new patient expresses Triage symptoms, please advise them to reach out to their existing provider. This includes patients that have not been seen in three years.</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <RadioGroup
            question="Is this a new or existing chronic issue?"
            options={[
              { value: 'new', label: 'New: the patient has not experienced this condition before or has been receiving treatment less than 1 month' },
              { value: 'existing', label: 'Existing: the patient has been receiving treatment for this condition for over 1 month and the condition is getting worse.' }
            ]}
            value={patientResponses.bloodyNoseType}
            onChange={handleRadioChange}
            name="bloodyNoseType"
            required={true}
          />
        </div>
        
        <SymptomList 
          title="Things to listen for"
          symptoms={[
            'Bloody nose',
            'Nose bleed'
          ]}
        />
        
        <QuestionsList 
          questions={[
            'Has your nose been bleeding more than 15 minutes with applying pressure/squeezing nose?',
            'Do you have a bleeding disorder?',
            'Are you on a blood thinner (Plavix, Warfarin, Coumadin, Xarelto)?',
            'Are you feeling dizzy or like you are going to faint?'
          ]}
        />
        
        <div className="mb-6">
          <RadioGroup
            question="Does the patient indicate yes to any of the symptoms listed above?"
            options={[
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' }
            ]}
            value={patientResponses.bloodyNoseQuestionsYes}
            onChange={handleRadioChange}
            name="bloodyNoseQuestionsYes"
            required={true}
          />
        </div>
        
        {patientResponses.bloodyNoseQuestionsYes === 'yes' && (
          <TransferInstructions type="other" />
        )}
        
        {patientResponses.bloodyNoseQuestionsYes === 'no' && (
          <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
            <p className="text-gray-700">Follow the steps listed in the <span className="underline text-blue-600 font-medium">Appointment Scheduling</span> and get them scheduled for the earliest available appointment.</p>
          </div>
        )}
        
        <div className="flex justify-between">
          <button 
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
            onClick={goBack}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
  
  // Diarrhea Pediatric Screen
  const DiarrheaPediatricScreen = () => (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Triage: Diarrhea Infant/Pediatric Symptoms</h1>
      </div>
      
      <div className="p-6">
        <BreadcrumbNav />
        
        <div className="bg-gray-100 p-4 mb-6 rounded-lg border-l-4 border-gray-400">
          <h2 className="text-lg font-semibold mb-2">Rules for Triage:</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Triage is available Monday through Friday 8am to 8pm CST</li>
            <li>Triage only services existing patients, if a new patient expresses Triage symptoms, please advise them to reach out to their existing provider. This includes patients that have not been seen in three years.</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <SectionTitle title="Market" />
          <RadioGroup
            question="Is the patient in Colorado?"
            options={[
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' }
            ]}
            value={patientResponses.patientInColorado}
            onChange={handleRadioChange}
            name="patientInColorado"
            required={true}
          />
        </div>
        
        {patientResponses.patientInColorado === 'yes' && (
          <ColoradoTransferInstructions />
        )}
        
        {patientResponses.patientInColorado === 'no' && (
          <>
            <SymptomList 
              title="Diarrhea Symptoms may include:"
              symptoms={[
                'Dehydration',
                'Abdominal Pain and/or Cramping',
                'Watery stool',
                'Frequent',
                'Loose stool',
                'Vomiting'
              ]}
            />
            
            <QuestionsList 
              questions={[
                'Did the symptoms start within the past 24 hours and has the child vomited more than 4 times in the past 24 hours?',
                'Is the child experiencing pain that interviews with normal activities or wakes them up and then stomach is tender to the touch?',
                'Has the child had diarrhea more than 5 times in the past 24 hours, or is urinating less then 3 times in 24 hours, and not able to keep down liquids?',
                'Did the child travel recently to foreign country or been exposed to someone with Diarrhea?',
                'Has the child taken antibiotics in the past 30 days?'
              ]}
            />
            
            <div className="mb-6">
              <RadioGroup
                question="Does the patient indicate yes to any of the questions above?"
                options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' }
                ]}
                value={patientResponses.diarrheaQuestionsYes}
                onChange={handleRadioChange}
                name="diarrheaQuestionsYes"
                required={true}
              />
            </div>
            
            {patientResponses.diarrheaQuestionsYes === 'yes' && (
              <div className="bg-blue-50 p-4 mb-6 rounded-lg shadow-sm border border-blue-200">
                <p className="mb-2 text-gray-700">Follow the steps listed in the <span className="underline text-blue-600 font-medium">Transfers and Conferencing Calls in Five9</span> and Warm transfer to Triage.</p>
                <p className="text-gray-700">If triage doesn't answer, follow the steps listed in <span className="underline text-blue-600 font-medium">PSR Escalated Calls Queue Workflow</span> and escalate the call.</p>
              </div>
            )}
            
            {patientResponses.diarrheaQuestionsYes === 'no' && (
              <>
                <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                  <p className="text-gray-700">Follow the steps listed in the <span className="underline text-blue-600 font-medium">Appointment Scheduling</span> and get them scheduled for the earliest available appointment.</p>
                </div>
                
                <div className="mb-6">
                  <RadioGroup
                    question="Where you able to locate an appointment?"
                    options={[
                      { value: 'yes', label: 'Yes' },
                      { value: 'no', label: 'No' }
                    ]}
                    value={patientResponses.appointmentAvailable}
                    onChange={handleRadioChange}
                    name="appointmentAvailable"
                  />
                </div>
                
                {patientResponses.appointmentAvailable === 'yes' && (
                  <div className="mb-6 bg-green-50 p-4 rounded-lg shadow-sm border border-green-200">
                    <h3 className="font-semibold mb-2 text-green-800">Success</h3>
                    <p className="text-green-700">Schedule the patient and you are done.</p>
                  </div>
                )}
                
                {patientResponses.appointmentAvailable === 'no' && (
                  <CaseCreationInstructions symptomType="diarrhea" />
                )}
              </>
            )}
          </>
        )}
        
        <div className="flex justify-between">
          <button 
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
            onClick={goBack}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
  
  // Pregnancy Complications Screen
  const PregnancyComplicationsScreen = () => (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Triage: Pregnancy Complications</h1>
      </div>
      
      <div className="p-6">
        <BreadcrumbNav />
        
        <div className="bg-gray-100 p-4 mb-6 rounded-lg border-l-4 border-gray-400">
          <h2 className="text-lg font-semibold mb-2">Rules for Triage:</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Triage is available Monday through Friday 8am to 8pm CST</li>
            <li>Triage only services existing patients, if a new patient expresses Triage symptoms, please advise them to reach out to their existing provider. This includes patients that have not been seen in three years.</li>
          </ul>
        </div>
        
        <div className="mb-6 bg-blue-50 p-4 rounded-lg shadow-sm border border-blue-200">
          <h3 className="font-semibold mb-3 text-blue-800">Follow the below steps</h3>
          <p className="text-blue-600 underline mb-4 font-medium">Triage Pregnancy Complications</p>
          
          <div className="mt-4 p-4 bg-white border border-blue-300 rounded">
            <p className="mb-3 text-gray-700">For all pregnancy-related concerns, please follow these steps:</p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>Determine if this is an emergency situation requiring immediate medical attention</li>
              <li>For bleeding, severe pain, or signs of miscarriage, transfer directly to the OB Triage line</li>
              <li>For after-hours emergencies, direct patients to go to the ER</li>
              <li>Document all symptoms and patient concerns carefully</li>
              <li>When transferring calls, provide complete patient information and symptom details</li>
            </ol>
          </div>
        </div>
        
        <div className="flex justify-between">
          <button 
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
            onClick={goBack}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );

  // Return the appropriate screen based on currentScreen state
  const renderScreen = () => {
    switch (currentScreen) {
      case 'main':
        return <MainScreen />;
      case 'symptoms':
        return <SymptomsScreen />;
      case 'dryMouthPediatric':
        return <DryMouthPediatricScreen />;
      case 'chestPain':
        return <ChestPainScreen />;
      case 'bloodSugar':
        return <BloodSugarScreen />;
      case 'bloodyNose':
        return <BloodyNoseScreen />;
      case 'diarrheaPediatric':
        return <DiarrheaPediatricScreen />;
      case 'vomitingPediatric':
        return <VomitingPediatricScreen />;
      case 'sleepyPediatric':
        return <SleepyPediatricScreen />;
      case 'rashPediatric':
        return <RashPediatricScreen />;
      case 'rash':
        return <RashScreen />;
      case 'shortnessOfBreath':
        return <ShortnessOfBreathScreen />;
      case 'soreThroat':
        return <SoreThroatScreen />;
      case 'utiSymptoms':
        return <UTIScreen />;
      case 'trauma':
        return <TraumaScreen />;
      case 'strokeSymptoms':
        return <StrokeScreen />;
      case 'pregnancyComplications':
        return <PregnancyComplicationsScreen />;
      default:
        return (
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-red-600 text-white p-4">
              <h1 className="text-2xl font-bold">Page Not Found</h1>
            </div>
            
            <div className="p-6">
              <div className="flex flex-col items-center justify-center py-12">
                <svg className="w-16 h-16 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
                <h2 className="text-xl font-bold text-gray-800 mb-2">Sorry, the requested screen could not be found.</h2>
                <p className="text-gray-600 mb-6">The page you're looking for doesn't exist or has been moved.</p>
                <button 
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  onClick={() => setCurrentScreen('main')}
                >
                  Return to Main Menu
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {renderScreen()}
    </div>
  );
};

export default EnhancedTriageTool;