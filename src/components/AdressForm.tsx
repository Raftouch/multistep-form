export function AddressForm() {
    return (
        <>
            <label>Street</label>
            <input type="text" autoFocus required />
            <label>City</label>
            <input type="text" required />
            <label>Zip</label>
            <input type="number" min={1} required />
        </>
    )
}