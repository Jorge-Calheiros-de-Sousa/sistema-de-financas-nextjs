import { formatData } from "../helpers/dataFilter"
import style from "../styles/App.module.css"
import financas from "../types/financas"


interface IProps { children: any }
interface IPropsTable {
    list: financas[]
}
interface IPropsTableItem {
    item: financas
}

export function Container(props: IProps) {
    return (
        <div>
            {props.children}
        </div>
    )
}

export function Header(props: IProps) {
    return (
        <header className={style.header}>
            {props.children}
        </header>
    )
}

export function HeaderText(props: IProps) {
    return (
        <h1 className={style.h1}>{props.children}</h1>
    )
}

export function Body(props: IProps) {
    return (
        <div className={style.body}>
            {props.children}
        </div>
    )
}

function TableItem({ item }: IPropsTableItem) {
    return (
        <tr>
            <td>{formatData(item.date)}</td>
            <td className={style.tdCategoria} style={{
                backgroundColor: `${item.category.color}`
            }}>{item.category.title}</td>
            <td>{item.title}</td>
            <td style={{
                color: `${item.category.expense ? 'red' : 'green'}`
            }}>R$ {item.value}</td>
        </tr>
    )
}

export function Tabela({ list }: IPropsTable) {
    return (
        <table className={style.table}>
            <thead>
                <tr>
                    <th className={style.th} style={{
                        width: "100px"
                    }}>Data</th>
                    <th className={style.th} style={{
                        width: "130px"
                    }}>Categoria</th>
                    <th className={style.th} style={{
                        width: "auto"
                    }}>Título</th>
                    <th className={style.th} style={{
                        width: "150px"
                    }}>Valor</th>
                </tr>
            </thead>
            <tbody>
                {list.map(item => <TableItem key={item.id} item={item} />)}
            </tbody>
        </table>
    )
}