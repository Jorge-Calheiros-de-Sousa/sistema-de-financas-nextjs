import { NextApiRequest, NextApiResponse } from "next";
import categorias from "../../types/categorias";

export default function Handler(req: NextApiRequest, res: NextApiResponse<categorias[]>) {
    res.send([
        {
            id: 1,
            title: "Alimentação",
            slug: "alimentacao",
            color: 'blue',
            expense: true
        },
        {
            id: 2,
            title: "Aluguel",
            slug: "aluguel",
            color: 'brown',
            expense: true
        },
        {
            id: 3,
            title: "Salário",
            slug: "salario",
            color: 'green',
            expense: false
        }
    ])
}