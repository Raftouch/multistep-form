import { FormWrapper } from "./FormWrapper";

interface AccountData {
    email: string
    password: string
}

type AccountFormProps = AccountData & {
    updateFields: (fields: Partial<AccountData>) => void
}

export function AccountForm({email, password, updateFields}: AccountFormProps) {
    const inputStyles="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"

    return (
        <FormWrapper title="Account Creation">
            <label>Email</label>
            <input 
                className={inputStyles}
                type="email" 
                autoFocus 
                required 
                value={email} 
                onChange={e => updateFields({email: e.target.value})}
            />
            <label>Password</label>
            <input 
                className={inputStyles}
                type="password" 
                required 
                value={password} 
                onChange={e => updateFields({password: e.target.value})}
            />
        </FormWrapper>
    )
}