export function assertNotNull(text: string, field: string) {
    if(!text) {
        throw new Error(field + " cannot be null or empty")
    }
}