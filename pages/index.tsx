import { useEffect, useState } from "react";
import * as C from "../components/App.components"
import * as I from "../components/Info.components";
import * as F from "../components/Form.components";
import { filterListByMouth, getCurrentMouth } from "../helpers/dataFilter";
import financas from '../types/financas';
import categorias from "../types/categorias";

interface IProps {
  data: financas[]
  categorias: categorias[]
}


export default function Home(props: IProps) {
  const [financas, setFinancas] = useState<financas[]>(props.data)
  const [filteredList, setFilteredList] = useState<financas[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMouth())
  const [income, setIncome] = useState<number>(0)
  const [expense, setExpense] = useState<number>(0)

  useEffect(() => {
    setFilteredList(filterListByMouth(financas ?? [], currentMonth))
  }, [financas, currentMonth])

  useEffect(() => {
    let income = 0
    let expense = 0

    filteredList.map(item => {
      if (item.category.expense) {
        expense = expense + item.value
      } else {
        income = income + item.value
      }
    })

    setIncome(income)
    setExpense(expense)
  }, [filteredList])

  function handleMonthChange(newMoth: string) {
    setCurrentMonth(newMoth)
  }
  function handleList(dataForm: financas) {
    const novoId = props.data.length + 1
    dataForm.id = novoId
    const novasFinancas = [...financas]
    novasFinancas.push({
      id: dataForm.id,
      category: dataForm.category,
      date: new Date(dataForm.date.getFullYear(), dataForm.date.getMonth() + 1, dataForm.date.getDay()),
      title: dataForm.title,
      value: dataForm.value
    })
    setFinancas(novasFinancas)
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Finançeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <I.InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <F.FormArea
          categorias={props.categorias}
          addForm={handleList}
        />
        <C.Tabela list={filteredList ?? []} />
      </C.Body>
    </C.Container>
  )
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/financas")
  const categorias = await fetch("http://localhost:3000/api/categorias")
  const data = await response.json()
  const dataCategoria = await categorias.json()
  return {
    props: {
      data: data ?? [],
      categorias: dataCategoria ?? []
    }
  }
}

