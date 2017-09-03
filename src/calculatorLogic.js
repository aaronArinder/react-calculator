import React, { Component } from 'react';

class Calculator extends React.Component {
  state = {
    displayValue: '0',
    savedValue: null,
    signOfOperation: null
  };

  //THE BELOW IS FROM MICHAEL JACKSON'S YOUTUBE TUTORIAL: https://www.youtube.com/watch?v=ZtU7Mhf9vN8

  inputDigit(digit) {
    const { displayValue, signOfOperation, savedValue } = this.state;

    if (signOfOperation === '=') {
      this.setState({
        displayValue: String(digit),
        savedValue: null,
        signOfOperation: null
      });
    } else {
      this.setState({
        displayValue:
          displayValue === '0' ? String(digit) : displayValue + digit
      });
    }
  }

  operations(sign) {
    const { displayValue, signOfOperation, savedValue } = this.state;

    if (savedValue === null) {
      this.setState({
        savedValue: displayValue + sign,
        displayValue: ''
      });
    } else {
      this.setState({
        savedValue: String(savedValue + sign),
        displayValue: ''
      });
    }
  }

  inputDot() {
    const { displayValue } = this.state;
    if (displayValue.indexOf('.') === -1) {
      this.setState({
        displayValue: displayValue + '.'
      });
    }
  }

  clearDisplay() {
    const { displayValue } = this.state;
    this.setState({
      displayValue: '0',
      savedValue: null,
      signOfOperation: null
    });
  }

  toggleSign() {
    const { displayValue } = this.state;
    this.setState({
      displayValue:
        displayValue.charAt(0) === '-'
          ? displayValue.substr(1)
          : '-' + displayValue
    });
  }

  inputPercent() {
    const { displayValue } = this.state;
    // const value = parseFloat(displayValue)

    this.setState({
      displayValue: String(displayValue / 100)
    });
  }

  equals() {
    const { displayValue, signofOperation, savedValue } = this.state;

    //  if (savedValue.charAt(savedValue.length - 1) === "+" || "-" || "/" || "*"){
    this.setState({
      displayValue: eval(savedValue + displayValue),
      savedValue: eval(savedValue + displayValue)
    });
    //  } else {this.setState({displayValue: savedValue, signOfOperation: "="})}

    console.log(eval(displayValue));
  }

  render() {
    console.log(this.state);
    const { displayValue } = this.state;

    return (
      <div className="calculator">
        <div className="calculator-display">
          {displayValue}
        </div>
        <div className="calculator-keypad">
          <div className="input-keys">
            <div className="function-keys">
              <button
                className="calculator-key key-clear"
                onClick={() => this.clearDisplay()}
              >
                AC
              </button>
              <button
                className="calculator-key key-sign"
                onClick={() => this.toggleSign()}
              >
                ±
              </button>
              <button
                className="calculator-key key-percent"
                onClick={() => this.inputPercent()}
              >
                %
              </button>
            </div>
            <div className="digit-keys">
              <button
                className="calculator-key key-0"
                onClick={() => this.inputDigit(0)}
              >
                0
              </button>
              <button
                className="calculator-key key-dot"
                onClick={() => this.inputDot()}
              >
                •
              </button>
              <button
                className="calculator-key key-1"
                onClick={() => this.inputDigit(1)}
              >
                1
              </button>
              <button
                className="calculator-key key-2"
                onClick={() => this.inputDigit(2)}
              >
                2
              </button>
              <button
                className="calculator-key key-3"
                onClick={() => this.inputDigit(3)}
              >
                3
              </button>
              <button
                className="calculator-key key-4"
                onClick={() => this.inputDigit(4)}
              >
                4
              </button>
              <button
                className="calculator-key key-5"
                onClick={() => this.inputDigit(5)}
              >
                5
              </button>
              <button
                className="calculator-key key-6"
                onClick={() => this.inputDigit(6)}
              >
                6
              </button>
              <button
                className="calculator-key key-7"
                onClick={() => this.inputDigit(7)}
              >
                7
              </button>
              <button
                className="calculator-key key-8"
                onClick={() => this.inputDigit(8)}
              >
                8
              </button>
              <button
                className="calculator-key key-9"
                onClick={() => this.inputDigit(9)}
              >
                9
              </button>
            </div>
          </div>
          <div className="operator-keys">
            <button
              className="calculator-key key-divide"
              onClick={() => this.operations('/')}
            >
              ÷
            </button>
            <button
              className="calculator-key key-multiply"
              onClick={() => this.operations('*')}
            >
              ×
            </button>
            <button
              className="calculator-key key-subtract"
              onClick={() => this.operations('-')}
            >
              -
            </button>
            <button
              className="calculator-key key-add"
              onClick={() => this.operations('+')}
            >
              +
            </button>
            <button
              className="calculator-key key-equals"
              onClick={() => this.equals()}
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
