import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class CourseList extends Component {
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
    render() {
        return (
            <div>
                <h1>课程列表</h1>
                <ul>
                    {
                        this.state.list.map(item=>(
                          <Link to={`/CourseDetail/${item.id}`}>
                            <li key={item.id}>
                             {item.title}
                            </li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        );
    }
    componentDidMount(){
        fetch('data/courseList.json')
        .then(response=>{
            return response.json()
        })
        .then(res=>{
            this.setState({
                list:res.data
            })
        })
    }
}

export default CourseList;