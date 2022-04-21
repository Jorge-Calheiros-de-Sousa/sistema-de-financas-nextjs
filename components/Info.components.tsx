import { formatCurrentMonth } from "../helpers/dataFilter"
import style from "../styles/Info.module.css"

interface IPropsInfoArea {
    currentMonth: string
    onMonthChange: (newMoth: string) => void
    income: number
    expense: number
}

interface IProps {
    children: any
}

interface IPropsArrowMonth {
    children: any
    click: () => void
}

interface IPropsResumeItem {
    title: string
    value: number
    color?: string
}

function MonthArea(props: IProps) {
    return (
        <div className={style.monthArea}>
            {props.children}
        </div>
    )
}

function MonthArrow(props: IPropsArrowMonth) {
    return (
        <div className={style.monthArrow} onClick={props.click}>
            {props.children}
        </div>
    )
}

function MonthText(props: IProps) {
    return (
        <div className={style.monthText}>
            {props.children}
        </div>
    )
}

function ResumeArea(props: IProps) {
    return (
        <div className={style.resumeArea}>
            {props.children}
        </div>
    )
}

function ResumeItem(props: IPropsResumeItem) {
    return (
        <div className={style.containerResumeItem}>
            <div className={style.resumeItemTitle}>
                {props.title}
            </div>
            <div className={style.resumeItemInfo} style={{
                color: props.color
            }}>
                ${props.value.toFixed(2)}
            </div>
        </div>
    )
}

export function InfoArea(props: IPropsInfoArea) {
    const dezembro = 12

    function handlePrevMonth() {
        const [year, month] = props.currentMonth.split("-")
        const currentDate = new Date(parseInt(year), parseInt(month))
        currentDate.setMonth(currentDate.getMonth() - 1)
        props.onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() === 0 ? dezembro : currentDate.getMonth()}`)
    }

    function handleNextMonth() {
        const [year, month] = props.currentMonth.split("-")
        const currentDate = new Date(parseInt(year), parseInt(month))
        currentDate.setMonth(currentDate.getMonth() + 1)
        props.onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() === 0 ? dezembro : currentDate.getMonth()}`)
    }

    return (
        <div className={style.containerInfoArea}>
            <MonthArea>
                <MonthArrow click={handlePrevMonth}> Anterior </MonthArrow>
                <MonthText>{formatCurrentMonth(props.currentMonth)}</MonthText>
                <MonthArrow click={handleNextMonth}> Proximo </MonthArrow>
            </MonthArea>
            <ResumeArea>
                <ResumeItem
                    title="Receitas"
                    value={props.income}
                    color={'green'}
                />
                <ResumeItem
                    title="Despesas"
                    value={props.expense}
                    color={'red'}
                />
                <ResumeItem
                    title="Balanço"
                    value={props.income - props.expense}
                    color={props.income - props.expense < 0 ? 'red' : 'green'}
                />
            </ResumeArea>
        </div>
    )
}