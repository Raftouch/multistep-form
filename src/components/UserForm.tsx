import { FormWrapper } from "./FormWrapper";

interface UserData {
    firstName: string
    lastName: string
    age: string
}

type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

export function UserForm({firstName, lastName, age, updateFields}: UserFormProps) {
    const inputStyles = "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"

    return (
        <FormWrapper title="User Details">
            <label>First Name</label>
            <input 
                className={inputStyles}
                type="text" 
                autoFocus 
                required 
                value={firstName} 
                onChange={e => updateFields({firstName: e.target.value})}
            />
            <label>Last Name</label>
            <input 
                className={inputStyles}
                type="text" 
                required 
                value={lastName} 
                onChange={e => updateFields({lastName: e.target.value})}
            />
            <label>Age</label>
            <input 
                className={inputStyles}
                type="number" 
                min={1} 
                required 
                value={age} 
                onChange={e => updateFields({age: e.target.value})}
            />
        </FormWrapper>
    )
}