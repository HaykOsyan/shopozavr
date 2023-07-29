import { $host, $authHost } from ".";

export const createCategory = async (category) => {
    const {data} = await $authHost.post('api/category', {'name': category})
    return data
}

export const fetchCategories = async () => {
    const {data} = await $host.get('api/category')
    return data.categories
}

export const fetchOneCategory = async (id) => {
    const {data} = await $host.get('api/category/' + id)
    return data
}