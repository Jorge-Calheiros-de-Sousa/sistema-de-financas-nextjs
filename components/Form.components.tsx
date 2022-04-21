import { useState } from "react"
import style from "../styles/Form.module.css"
import categorias from "../types/categorias"
import financas from "../types/financas"

interface IProps {
    categorias: categorias[]
    addForm: (dataForm: financas) => void
}

interface IPropsInput {
    name: string
    label: string
    type: 'text' | 'number' | 'date'
    placeholder?: string
    change: (event: any) => void
}

interface IPropsSelect {
    label: string
    name: string
    options: categorias[]
    change: (event: any) => void
}

interface IPropsButton {
    title: string
    click: () => void
}

function Input(props: IPropsInput) {
    return (
        <div className={style.containerInput}>
            <div>
                {props.label}
            </div>
            <input name={props.name} type={props.type} placeholder={props.placeholder} onChange={props.change} />
        </div>
    )
}

function Select(props: IPropsSelect) {

    return (
        <div className={style.containerInput}>
            <div>
                {props.label}
            </div>
            <select name={props.name} onChange={props.change}>
                <option value={""}>Escolha...</option>
                {props.options.map(categoria => <option value={categoria.id} key={categoria.id}>{categoria.title}</option>)}
            </select>
        </div>
    )
}

function Button(props: IPropsButton) {
    return (
        <div className={style.containerInput}>
            <button onClick={props.click}>
                {props.title}
            </button>
        </div>
    )
}

export function FormArea(props: IProps) {
    const [formValues, setFormValues] = useState(
        {
            date: "",
            category: "",
            title: "",
            value: ""
        }
    )
    function handleInputValues(event: any) {
        const { name, value } = event.target
        setFormValues((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    function submit() {
        const campos = [
            formValues.date,
            formValues.category,
            formValues.title,
            formValues.value
        ]
        const vazios = campos.filter(a => a === "")
        if (vazios.length) {
            alert("Preencha todos os campos")
        } else {
            const categoria = props.categorias.filter(categoria => categoria.id === parseInt(formValues.category))
            const novoForm: financas = {
                date: new Date(formValues.date),
                category: categoria[0],
                title: formValues.title,
                value: parseFloat(formValues.value)
            }
            props.addForm(novoForm)
        }
    }
    return (
        <div className={style.containerFormArea}>
            <Input
                name="date"
                type="date"
                change={handleInputValues}
                label={"Data"}
            />
            <Select
                name="category"
                options={props.categorias}
                change={handleInputValues}
                label={"Categoria"}
            />
            <Input
                name="title"
                type="text"
                placeholder="Titulo"
                change={handleInputValues}
                label={"Título"}
            />
            <Input
                name="value"
                type="number"
                placeholder="Valor"
                change={handleInputValues}
                label={"Valor"}
            />
            <Button
                title="Adicionar"
                click={submit}
            />
        </div>
    )
}