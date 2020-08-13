import React, { Component } from "react";
import { Table, Button } from "reactstrap";

class App extends Component {
  state = {
    isLoading: false,
    invoices: [
      {
        id: "100",
        vendor: "Henkok",
        amount: "$18,000",
        invoice: "1122",
        date: "15/05/1995",
      },
      {
        id: "200",
        vendor: "Henkok",
        amount: "$18,000",
        invoice: "1122",
        date: "15/05/1995",
      },
      {
        id: "300",
        vendor: "Henkok",
        amount: "$18,000",
        invoice: "1122",
        date: "15/05/1995",
      },
      {
        id: "400",
        vendor: "Henkok",
        amount: "$18,000",
        invoice: "1122",
        date: "15/05/1995",
      },
    ],
  };

  remove(id) {
    let updatedInvoices = [...this.state.invoices].filter((i) => i.id != id);
    this.setState({ invoices: updatedInvoices });
  }

  render() {
    const isLoading = this.state.isLoading;
    const allInvoices = this.state.invoices;

    let invoices = allInvoices.map((invoice) => (
      <tr key={invoice.id}>
        <td>{invoice.vendor}</td>
        <td>{invoice.amount}</td>
        <td>{invoice.invoice}</td>
        <td>{invoice.date}</td>
        <td>
          <Button
            className="btn btn-lg btn-success"
            onClick={() => this.remove(invoice.id)}
          >
            Ok
          </Button>
        </td>
        <td>
          <Button
            className="btn btn-lg btn-danger"
            onClick={() => this.remove(invoice.id)}
          >
            NOK
          </Button>
        </td>
        <td>
          <Button
            className="btn btn-lg btn-info"
            onClick={() => this.remove(invoice.id)}
          >
            50%
          </Button>
        </td>
        <td>
          <Button
            className="btn btn-lg btn-warning"
            onClick={() => this.remove(invoice.id)}
          >
            ??
          </Button>
        </td>
        <td>
          <Button
            className="btn btn-lg btn-info"
            onClick={() => this.remove(invoice.id)}
          >
            Image
          </Button>
        </td>
      </tr>
    ));

    if (isLoading) {
      return <div>Loading</div>;
    }
    return (
      <div className="container border border-secondary rounded center">
        <div className="row">
          <div className="col-12">Invoices pending - Test company</div>
        </div>

        <div className="row">
          <div className="col-xs-12 center text-center">
            <Table dark responsive striped bordered hover>
              <thead>
                <th>Vendor</th>
                <th>Amount</th>
                <th>Invoice #</th>
                <th>Date</th>
                <th colSpan="4">Actions</th>
                <th>Image</th>
              </thead>

              <tbody>
                {this.state.invoices === 0 ? (
                  <td>All caught up! </td>
                ) : (
                  invoices
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
