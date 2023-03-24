import { FormWrapper } from "./FormWrapper";

interface AddressData {
    street: string
    city: string
    zip: string
}

type AddressFormProps = AddressData & {
    updateFields: (fields: Partial<AddressData>) => void
}

export function AddressForm({street, city, zip, updateFields}: AddressFormProps) {
    const inputStyles="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"

    return (
        <FormWrapper title="Address">
            <label>Street</label>
            <input 
                className={inputStyles}
                type="text" 
                autoFocus 
                required 
                value={street} 
                onChange={e => updateFields({street: e.target.value})}
            />
            <label>City</label>
            <input 
                className={inputStyles}
                type="text" 
                required 
                value={city} 
                onChange={e => updateFields({city: e.target.value})}
            />
            <label>Zip</label>
            <input 
                className={inputStyles}
                type="text" 
                required 
                value={zip} 
                onChange={e => updateFields({zip: e.target.value})}
            />
        </FormWrapper>
    )
}