import React from 'react'
import { questions } from './questionsList'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux'
import { selectQuestion, resetDetails }from '../actions/index'
import UserInput from './userInput'
const useStyles = makeStyles((theme) => ({
    RowData:{
        fontSize: '15px',
        fontWeight: 'bold',
        color: '#767676',
        display:"flex",
        textAlign:"left", 
        marginLeft:"50px",
        padding:"5px",
        color:"mintcream",
        '&:hover':{
            background:"navy"
        }
    },
    Question:{
        margin:"5px",
        cursor:"pointer",
         '&:hover':{
            background:"navy"
        }
    }
}))

const Questions = () => {
    const classes = useStyles();
    const selectedQuestion = useSelector((state) => state && state.selectedQuestion)
    const dispatch = useDispatch()

    const storeQuestionDetsila = (selected) => {
        dispatch(selectQuestion(selected))
    }

    return(
       <div>
           { questions &&  Object.entries(questions).map((question) => {
               return <div className={classes.RowData}>
                            <label style={{margin:"5px"}}>{`${question[0]} : `}</label>
                            <div onClick={() => storeQuestionDetsila(question)}  className={classes.Question} style={{ cursor:"pointer" }}>
                            {question[1]}
                            </div>
                      </div>
           })}
           <UserInput isOpen={selectedQuestion} handleClose={() => dispatch(resetDetails([]))} />
        </div>
    )
}

export default Questions;