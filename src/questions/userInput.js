import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormLabel, TextField } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { answers } from '../answers/index'
import { setAnswer, resetDetails }from '../actions/index'
import ResultData from './result'
const UserInput = ({isOpen, handleClose}) => {
    const state = useSelector((state) => state && state.selectedQuestion? state : {}) ;
    const { selectedQuestion, questionNum:questionNumber, resultAnswer } = state
    const allAnswers = {...answers}
    const [userNumners, serUserNumbers] = useState({num1:"",num2:"",num3:""})
    const dispatch = useDispatch();
    const {num1,num2,num3} =  userNumners;
    //const [showAnswer, setShowAnswer] = useState(false)

    const onSubmittted = () => {
        let answerDetails = getAnswers()
        dispatch(setAnswer(answerDetails));
        //setShowAnswer(true)
    }

    const closeDailog = () => {
        serUserNumbers({})
        handleClose()
    }

    const getAnswers = () => {
            let putasankhye = 0;
            let answerSankhye = 0;
            // for prashne sankhye
            debugger
            answerSankhye = ((+num1+(+num2)+(+num3))%12)
            if(answerSankhye === 0) answerSankhye = 12;

            // for putasankhye
            let reminder =  +questionNumber%10;
            let otherNum = Math.floor(+questionNumber/10);
            putasankhye = (otherNum * 4) + reminder + answerSankhye -1;
            return allAnswers[putasankhye][answerSankhye];
    }

    const resetAllDetails = () => {
        serUserNumbers({})
        dispatch(resetDetails(null))
        //setShowAnswer(false)
    }

    const updateNumners = (key,value) => {
        if(!isNaN(value) && value <= 108)
        {
            serUserNumbers({
                ...userNumners,
                [key]:value
            })
        }
    }

    return(
        <Dialog onClose={closeDailog} open={isOpen}>
            <DialogTitle>
                Please enter 3 numbers between 1 and 108
                {/* ದಯವಿಟ್ಟು 1 ಮತ್ತು 108 ರ ನಡುವೆ 3 ಸಂಖ್ಯೆಗಳನ್ನು ನಮೂದಿಸಿ */}
            </DialogTitle>
            <DialogContent>
            <div>
                <div>
                <FormLabel>
                    {selectedQuestion}
                </FormLabel>
                <div style={{margin:"10px"}}>
                    <TextField value={userNumners.num1} onChange={(e) => updateNumners("num1", e.target.value)} variant="outlined" size="small" label="Number 1"></TextField>
                </div>
                <div  style={{margin:"10px"}}>
                    <TextField value={userNumners.num2} onChange={(e) => updateNumners("num2", e.target.value)} variant="outlined" size="small" label="Number 2"></TextField>
                </div>
                <div  style={{margin:"10px"}}>
                    <TextField value={userNumners.num3} onChange={(e) => updateNumners("num3", e.target.value)} variant="outlined" size="small" label="Number 3"></TextField>
                </div>
                </div>
               { resultAnswer && <div>
                  <ResultData isOpen={resultAnswer} handleClose={resetAllDetails} />
                </div>}
            </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeDailog} color="secondary" variant="contained" size="small"> 
                    Cancel
                </Button>
                <Button onClick={onSubmittted} disabled={!(num1 && num2 && num3)} color="primary" variant="contained" size="small"> 
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default UserInput;