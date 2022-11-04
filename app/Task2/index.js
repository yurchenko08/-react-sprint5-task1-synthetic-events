import React, { Component } from "react";

export default class Task2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          id: 1,
          text: "hidden text 1",
        },
        {
          id: 2,
          text: "hidden text 2",
        },
        {
          id: 3,
          text: "hidden text 3",
        },
      ],
      text: "",
    };
  }
  onMouseOver = (text) => {
    this.setState({
      text: text,
    });
  };

  onMouseOut = () => {
    this.setState({
      text: "",
    });
  };

  render() {
    const { list, text } = this.state;
    return (
      <div>
        {list.map((el) => (
          <div
            key={el.id}
            className='element'
            onMouseOver={() => this.onMouseOver(el.text)}
            onMouseOut={this.onMouseOut}
          >
            id - {el.id}
          </div>
        ))}
        <div className='text'>{text}</div>
      </div>
    );
  }
}
