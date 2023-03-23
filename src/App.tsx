import { useMultistepForm } from "./hooks/useMultistepForm"

function App() {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <div>one</div>,
    <div>two</div>
  ])

  return (
    <div className="h-[300px] relative bg-white border-4 border-black p-4 m-8 rounded">
        <form>
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
            <button type="button" onClick={next} className="border-2 border-black px-2 rounded">
              {isLastStep ? "Finish" : "Next"}
            </button>
          </div>
        </form>
    </div>
  )
}

export default App