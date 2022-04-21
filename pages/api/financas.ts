import { NextApiRequest, NextApiResponse } from "next";
import financas from "../../types/financas";

export default function Handler(req: NextApiRequest, res: NextApiResponse<financas[]>) {
    res.send([
        {
            id: 1,
            date: new Date(2021, 9, 15),
            category: {
                id: 1,
                title: "Alimentação",
                slug: "alimentacao",
                color: "blue",
                expense: true
            },
            title: 'MacDonaty',
            value: 25.99
        },
        {
            id: 2,
            date: new Date(2021, 9, 15),
            category: {
                id: 1,
                title: "Alimentação",
                slug: "alimentacao",
                color: "blue",
                expense: true
            },
            title: 'Burger King',
            value: 25.99
        },
        {
            id: 3,
            date: new Date(2022, 3, 15),
            category: {
                id: 1,
                title: "Alimentação",
                slug: "alimentacao",
                color: "blue",
                expense: true
            },
            title: 'Girafas',
            value: 25.99
        },
        {
            id: 4,
            date: new Date(2022, 3, 15),
            category: {
                id: 2,
                title: "Aluguel",
                slug: "aluguel",
                color: 'brown',
                expense: true
            },
            title: 'Hotel São Cristovão',
            value: 25.99
        },
        {
            id: 5,
            date: new Date(2021, 20, 15),
            category: {
                id: 1,
                title: "Salário",
                slug: "salario",
                color: 'green',
                expense: false
            },
            title: 'Dinheiro',
            value: 25.99
        },
        {
            id: 6,
            date: new Date(2022, 3, 15),
            category: {
                id: 1,
                title: "Salário",
                slug: "salario",
                color: 'green',
                expense: false
            },
            title: 'TrabalhoZinho',
            value: 800.00
        },
        {
            id: 7,
            date: new Date(2022, 4, 10),
            category: {
                id: 1,
                title: "Alimentação",
                slug: "alimentacao",
                color: "blue",
                expense: true
            },
            title: 'MacLancheFeliz',
            value: 50.99
        },
        {
            id: 8,
            date: new Date(2022, 4, 15),
            category: {
                id: 2,
                title: "Aluguel",
                slug: "aluguel",
                color: 'brown',
                expense: true
            },
            title: 'Hotel São Cristovão Colom',
            value: 2500.00
        },
        {
            id: 9,
            date: new Date(2022, 4, 12),
            category: {
                id: 1,
                title: "Salário",
                slug: "salario",
                color: 'green',
                expense: false
            },
            title: 'Dinheiro',
            value: 250.99
        },
        {
            id: 10,
            date: new Date(2022, 4, 1),
            category: {
                id: 1,
                title: "Salário",
                slug: "salario",
                color: 'green',
                expense: false
            },
            title: 'Trabalho1',
            value: 850.00
        },
    ])
}