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
    return (
        <FormWrapper title="Address">
            <label>Street</label>
            <input type="text" autoFocus required value={street} onChange={e => updateFields({street: e.target.value})}/>
            <label>City</label>
            <input type="text" required value={city} onChange={e => updateFields({city: e.target.value})}/>
            <label>Zip</label>
            <input type="text" required value={zip} onChange={e => updateFields({zip: e.target.value})}/>
        </FormWrapper>
    )
}