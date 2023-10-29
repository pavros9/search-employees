export const createQueryParams = (string: string) => {
    if (string.trim().length === 0) {
        return
    }

    const items = string.split(',')
    const isNumeric = (num: any) => (typeof (num) === 'number' || typeof (num) === "string" && num.trim() !== '') && !isNaN(num as number);
    const isString = (string: string) => typeof string === 'string' && !+string



    if (items) {
        if (isNumeric(items[0])) {
            return items.map(item => `id=${item.trim()}`).join('&')
        }

        if (isString(items[0].trim())) {
            return items.map(item => `username=${item.trim()}`).join('&')
        }
    } else {
        return undefined
    }
}