const initialState = {
    count:19
}

const Reducer = (state = initialState, action) => {
    let stateData = {...state}
    if(action.type === "PICK_QUESTION")
    {
        stateData.questionNum = action.payload[0]
        stateData.selectedQuestion = action.payload[1]
    }
    else if(action.type === "SET_ANSWER")
    {
        stateData.resultQuestion = action.payload["question"]
        stateData.resultAnswer = action.payload["answer"]
    }
    else if(action.type === "RESET") stateData={}
        return stateData;
}

export default Reducer;