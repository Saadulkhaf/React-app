import React, { Component } from "react";

class App extends Component {
  state = {
    isLoading: false,
    invoices: [],
  };

  render() {
    const isLoading = this.state.isLoading;
    const invoices = this.state.invoices;

    const body = [
      {
        id: "100",
        vendor: "Henkok",
        amount: "$18,000",
        date: "15/05/1995",
      },
      {
        id: "100",
        vendor: "Henkok",
        amount: "$18,000",
        date: "15/05/1995",
      },
      {
        id: "100",
        vendor: "Henkok",
        amount: "$18,000",
        date: "15/05/1995",
      },
      {
        id: "100",
        vendor: "Henkok",
        amount: "$18,000",
        date: "15/05/1995",
      },
    ];

    if (isLoading) {
      return <div>Loading</div>;
    }
    return (
      <div className="container border border-secondary rounded center">
        <div className="row">
          <div className="col-12">Invoices pending - Test company</div>
        </div>
      </div>
    );
  }
}

export default App;
