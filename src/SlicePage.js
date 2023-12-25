import { createSlice } from '@reduxjs/toolkit'


const initialState={
    taskList:[],
    selectedTask:{}
}

const tasksSlice = createSlice(
    {
        name:'tasksSlice',
        initialState,
        reducers: {

            addItems:(state,action)=>{
                const id=Math.random()*100
                let task={...action.payload,id,check:false}
                state.taskList.push(task)
            },

            removeItems:(state,action)=>{
                state.taskList=state.taskList.filter((task)=>task.id !== action.payload.id)
            },

            updateItems:(state,action)=>{
                state.taskList=state.taskList.map((task)=>
                    task.id === action.payload.id ? action.payload :task
                
                )
            },

            setselectedItems:(state,action)=>{
                    state.selectedTask=action.payload
            },

            check:(state,action)=>{
                state.taskList=action.payload
            }

        }

    })

  export const { addItems,removeItems,updateItems,setselectedItems,check }=tasksSlice.actions

 export default tasksSlice.reducer;