import financas from "../types/financas";

export function getCurrentMouth() {
    const now = new Date()
    return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

export function filterListByMouth(list: financas[], currentMouth: string): financas[] {
    const [year, mouth] = currentMouth.split("-")
    let newList: financas[] = []
    newList = list.filter(item => (new Date(item.date)).getFullYear() === parseInt(year) && ((new Date(item.date)).getMonth()) === parseInt(mouth))
    return newList
}

function adicionarZero(number: number) {
    if (number < 10) {
        return `0${number}`
    }
    return `${number}`
}

export function formatData(data: Date): string {
    const date = new Date(data);
    return `${adicionarZero(date.getDay())}/${adicionarZero(date.getMonth())}/${date.getFullYear()}`
}

export function formatCurrentMonth(currentMonth: string): string {
    const [year, month] = currentMonth.split("-")
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return `${months[parseInt(month) - 1]} de ${year}`
}