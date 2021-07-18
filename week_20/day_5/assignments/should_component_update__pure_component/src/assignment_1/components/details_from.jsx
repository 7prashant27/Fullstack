import React from "react";
import CreateTable from "./create_table";
import { v4 as uuid } from "uuid";
import Styles from "./component.module.css" 

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      address: "",
      department: null,
      salary: "",
      marital: false,
      data: [],
      departmentFilter: "all",
      sort: null,
    };
  }

  handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    const val = type === "checkbox" ? checked : value;
    this.setState({
      [name]: val,
    });
  };

  handleDel = (id) => {
    let new_data = this.state.data.filter((elem) => elem.id !== id);
    this.setState({
      data: new_data,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      id: uuid(),
      name: this.state.name,
      age: this.state.age,
      address: this.state.address,
      department: this.state.department,
      salary: Number(this.state.salary),
      marital: `${this.state.marital}`,
      edit_mode: false,
    };
    this.setState({
      data: [...this.state.data, payload],
    });
  };


  handleEdit = (id) => {
    const { data } = this.state;
    let newData = data.map((item) => {
      if(item.id === id){
        return {...item , edit_mode: !item.edit_mode}
      }
      else {
        return item
      }
    }
    )
    this.setState({
      data: newData,
    });
    console.log(this.state.data)
  }


  render() {
    return (
      <div>
        <div className={Styles.form_div}>
        <form>
          <label>
            Name:
            </label>
            <input
              name="name"
              value={this.state.name}
              type="text"
              onChange={this.handleChange}
            />
          <br />
          <br />
          <label>
            Age:
            </label>
            <input
              name="age"
              value={this.state.age}
              type="number"
              onChange={this.handleChange}
            />
          <br />
          <br />
          <label>
            Address:
            </label>
            <input
              autoComplete="off"
              name="address"
              value={this.state.address}
              type="text"
              onChange={this.handleChange}
            />
          <br />
          <br />
          <label>
            salary:
            </label>
            <input
              autoComplete="off"
              name="salary"
              value={this.state.salary}
              type="number"
              onChange={this.handleChange}
            />
          
          <br />
          <br />
          <label>
            Department:
            </label>
            <select name="department" onChange={this.handleChange}>
              <option value="Full_Stack_Developer">Full Stack Developer</option>
              <option value="Android_Developer">Android Developer</option>
              <option value="Front_End_Developer">Front End Developer</option>
            </select>
          
          <br />
          <br />
          <label>
            Marital Status:
            </label>
            <input
              name="marital"
              value={this.state.marital}
              type="checkbox"
              onChange={this.handleChange}
            />
          
          <br />
          <br />

          <input type="button" value="SUBMIT" onClick={this.handleSubmit} />
        </form>
        </div>
        
        <br />

        <div className={Styles.display_div}>

          {/* filter area */}

          <div  className={Styles.filter_div}>
            <label>
              Filter By Department:
              <br />
              <select name="departmentFilter" onChange={this.handleChange}>
                <option value="">Choose</option>
                <option value="all">
                  all
                </option>
                <option value="Full_Stack_Developer">
                  Full Stack Developer
                </option>
                <option value="Android_Developer">Android Developer</option>
                <option value="Front_End_Developer">Front End Developer</option>
              </select>
            </label>
            <br />
            <label>
              SORT:
              <select name="sort" onChange={this.handleChange}>
                <option value="">Choose..</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </label>
          </div>

          {/* table area */}

          <div className={Styles.table_div}>
            {this.state.data.length === 0 ? (
              <p>No data to display</p>
            ) : (
              <CreateTable
                data={this.state.data
                  .filter(({ department }) => {
                    if (this.state.departmentFilter === "all") {
                      return true
                    } else {
                      return department === this.state.departmentFilter;
                    }
                  }).sort((a, b) => {
                    if (this.state.sort === null) {
                      return (0);
                    }
                    if (this.state.sort === "asc") {
                      return (a.salary - b.salary);
                    } else if (this.state.sort === "desc") {
                      return (b.salary - a.salary);
                    }
                  })
                }
                del={this.handleDel}
                edit={this.handleEdit}
                handleChange={this.handleChange}
              />
            )}
          </div>

        </div>
      </div>
    );
  }
}
