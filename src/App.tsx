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
    next()
  }

  return (
    <div className="h-[300px] relative bg-white border-4 border-black p-4 m-8 rounded">
        <form onSubmit={onSubmit}>
          <div className="absolute top-4 right-4">
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div className="flex gap-4 justify-end mt-52">
            {!isFirstStep && (
            <button type="button" onClick={back} className="border-2 border-black px-2 rounded">
              Back
            </button>
            )}
            <button type="submit" className="border-2 border-black px-2 rounded">
              {isLastStep ? "Finish" : "Next"}
            </button>
          </div>
        </form>
    </div>
  )
}

export default App