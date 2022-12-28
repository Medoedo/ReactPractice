import { Component } from "react";

import "./eployees-add-form.css"

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: ""
        }
    }

    onInputValue = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        const {name, salary} = this.state;
        const {onCreate} = this.props

        return (
            <div className="app-add-form">
                <h3>Додайте новоно працівника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={(e) => onCreate(e, name, salary)}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Як його звати?"
                        name="name"
                        value={name}
                        onChange={this.onInputValue} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onInputValue} />
    
                    <button type="submit"
                            className="btn btn-outline-light">Додати</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;