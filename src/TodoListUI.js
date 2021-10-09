import React from 'react';
import 'antd/dist/antd.css';    //引入antd
import { Input, Button, List } from 'antd';   //引入antd组件

const TodoListUI = (props) =>{
    let { list, inputValue,haddleInputChange,handleButtonClick,deleteTodo } = props;
    return(
        <div>
            <div style={{ margin: "10px 0px 0px 10px" }}>
                <div>
                    <Input placeholder='Just to do' style={{ width: "300px", marginRight: "10px" }}
                        onChange={haddleInputChange} value={inputValue}
                    />
                    <Button type="primary" onClick={handleButtonClick}>Record</Button>
                </div>
                <List style={{ width: "300px", marginTop: "10px" }}
                    bordered
                    dataSource={list}
                    renderItem={(item,index) => (
                        <List.Item key={index} onDoubleClick={()=>{deleteTodo(index)}} title="双击删除记录">
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default TodoListUI;