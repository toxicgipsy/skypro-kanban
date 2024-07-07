import { useContext } from "react"
import { TasksContext } from "../TasksContext"

export const useTaskContext = () => {
    return useContext(TasksContext);
}