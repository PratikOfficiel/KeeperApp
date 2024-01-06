import React from "react";

function Todo(){

    const [inputtext,setinputtext] = React.useState()
    const [listitems,updatelist] = React.useState([])

    function handleinput(event){
        const newvalue = event.target.value
        setinputtext(newvalue)
    }

    function additem(){
        updatelist(previousitems=>{
            return [...previousitems, inputtext]
        })

        setinputtext("")
    }
    
    return(
        <div className="todo">
            <header className="todoheading">
                <h1>ToDo List</h1>
            </header>

            <div className="todoform">
                <input onChange={handleinput} type="text" value={inputtext}/>

                <button onClick={additem}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {listitems.map((item)=>{return(<li className="todoitem">{item}</li>)})}
                </ul>
            </div>
        </div>
    )
}

export default Todo;