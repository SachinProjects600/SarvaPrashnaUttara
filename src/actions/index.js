
export const selectQuestion = (selected) => {
    return {
            type:"PICK_QUESTION",
            payload:selected
        }
}

export const setAnswer = (result) => {
    return {
        type:"SET_ANSWER",
        payload:result
    }
} 

export const resetDetails = () => {
    return {
        type:"RESET",
        payload:null
    }
} 