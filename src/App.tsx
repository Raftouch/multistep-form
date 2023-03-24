import { FormEvent, useState } from "react"
import { AccountForm } from "./components/AccountForm"
import { AddressForm } from "./components/AddressForm"
import { UserForm } from "./components/UserForm"
import { useMultistepForm } from "./hooks/useMultistepForm"

interface FormData {
  firstName: string
  lastName: string
  age: string
  street: string
  city: string
  zip: string
  email: string
  password: string
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  zip: "",
  email: "",
  password: ""
}

function App() {
  const buttonStyles = "shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
  const [data, setData] = useState(INITIAL_DATA)

  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return {...prev, ...fields}
    })
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields}/>,
    <AddressForm {...data} updateFields={updateFields}/>,
    <AccountForm {...data} updateFields={updateFields}/>
  ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert("Account created successfully!")
  }

  return (
    <div className="relative bg-white border-4 border-gray-500 p-4 m-8 rounded text-gray-500">
        <form onSubmit={onSubmit}>
          <div className="absolute top-4 right-4">
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div className="flex gap-4 justify-end mt-10">
            {!isFirstStep && (
            <button 
              type="button" 
              onClick={back} 
              className={buttonStyles}
            >
              Back
            </button>
            )}
            <button 
              type="submit" 
              className={buttonStyles}
            >
              {isLastStep ? "Finish" : "Next"}
            </button>
          </div>
        </form>
    </div>
  )
}

export default App