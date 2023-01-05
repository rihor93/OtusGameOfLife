import { PropsWithChildren } from "react"
import './CellComponent.css'

/**
     * интерфейс ячейки сетки, содержит id и жизненный статус
     */
export interface Cell {
    id: number,
    status: CellStatus,
}

/**
 * жизненные статусы ячейки
 */
export enum CellStatus{
    Alive,
    AliveOld,
    Dead,
}

export const CellComponent: React.FC<
PropsWithChildren<{ value: Cell}>
>= ({value}) => {

    return (
    <div className={value.status === CellStatus.Alive ? "cell alive" : (value.status === CellStatus.AliveOld ? "cell alive old" : "cell dead")}>
        {value.status}
    </div>)
}