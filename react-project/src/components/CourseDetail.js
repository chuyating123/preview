import React, { Component } from 'react';

class CourseDetail extends Component {
    constructor() {
        super()
        this.state = {
            details: {}
        }
    }
    componentDidMount() {
        fetch(`/data/course${this.props.match.params.id}.json`)
            .then(response => {
                return response.json()
            }).then(res => {
                this.setState({
                    details: res.data
                })
            })
    }
    render() {
        let { params } = this.props.match
        return (
            <div>
                <h1>课程详情</h1>
                <p>id:{params.id}</p>
                <p>课程名称:{this.state.details.title}</p>
                <p>课程教师:{this.state.details.teacher}</p>
                <p>课程简介:{this.state.details.intro}</p>
            </div>
        );
    }
}

export default CourseDetail;