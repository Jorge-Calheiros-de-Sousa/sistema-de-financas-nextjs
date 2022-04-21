import categorias from "./categorias"

type financas = {
    id?: number,
    date: Date,
    category: categorias,
    title: string,
    value: number
}

export default financas