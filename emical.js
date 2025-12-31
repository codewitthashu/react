import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class EMICalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      principal: 500000,        // Loan Amount in ₹
      rate: 8.5,                // Annual Interest Rate in %
      tenureYears: 5,           // Loan Tenure in years
      tenureMonths: 60,         // Auto-calculated months
      emi: 0,
      totalInterest: 0,
      totalAmount: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.calculateEMI = this.calculateEMI.bind(this);
  }

  componentDidMount() {
    this.calculateEMI();
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    let updatedState = { [name]: parseFloat(value) || 0 };

    // Sync years and months
    if (name === 'tenureYears') {
      updatedState.tenureMonths = value * 12;
    } else if (name === 'tenureMonths') {
      updatedState.tenureYears = (value / 12).toFixed(1);
    }

    this.setState(updatedState, this.calculateEMI);
  }

  calculateEMI() {
    const { principal, rate, tenureMonths } = this.state;

    if (principal <= 0 || rate <= 0 || tenureMonths <= 0) {
      this.setState({
        emi: 0,
        totalInterest: 0,
        totalAmount: 0
      });
      return;
    }

    // Monthly interest rate
    const monthlyRate = rate / (12 * 100);
    // Number of monthly installments
    const n = tenureMonths;

    // EMI Formula: EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
    const emiValue =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) /
      (Math.pow(1 + monthlyRate, n) - 1);

    const totalAmount = emiValue * n;
    const totalInterest = totalAmount - principal;

    this.setState({
      emi: emiValue.toFixed(0),
      totalInterest: totalInterest.toFixed(0),
      totalAmount: totalAmount.toFixed(0)
    });
  }

  render() {
    return (
      <div className="min-vh-100 bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
                <div className="card-header bg-gradient bg-primary text-white text-center py-4">
                  <h2 className="mb-1">EMI Calculator</h2>
                  <p className="mb-0 opacity-75">Calculate your Equated Monthly Installment</p>
                </div>

                <div className="card-body p-4 p-md-5">
                  {/* Loan Amount */}
                  <div className="mb-4">
                    <label className="form-label fw-bold fs-5">
                      Loan Amount (₹)
                    </label>
                    <input
                      type="number"
                      name="principal"
                      className="form-control form-control-lg text-center"
                      value={this.state.principal}
                      onChange={this.handleInputChange}
                      min="1000"
                      step="1000"
                    />
                    <div className="form-text text-muted text-center">
                      ₹{this.state.principal.toLocaleString('en-IN')}
                    </div>
                  </div>

                  {/* Interest Rate */}
                  <div className="mb-4">
                    <label className="form-label fw-bold fs-5">
                      Annual Interest Rate (%)
                    </label>
                    <input
                      type="number"
                      name="rate"
                      className="form-control form-control-lg text-center"
                      value={this.state.rate}
                      onChange={this.handleInputChange}
                      min="0.1"
                      max="30"
                      step="0.1"
                    />
                  </div>

                  {/* Tenure */}
                  <div className="row g-3 mb-5">
                    <div className="col-6">
                      <label className="form-label fw-bold">Tenure (Years)</label>
                      <input
                        type="number"
                        name="tenureYears"
                        className="form-control form-control-lg text-center"
                        value={this.state.tenureYears}
                        onChange={this.handleInputChange}
                        min="1"
                        max="30"
                        step="0.5"
                      />
                    </div>
                    <div className="col-6">
                      <label className="form-label fw-bold">Tenure (Months)</label>
                      <input
                        type="number"
                        name="tenureMonths"
                        className="form-control form-control-lg text-center"
                        value={this.state.tenureMonths}
                        onChange={this.handleInputChange}
                        min="12"
                        max="360"
                      />
                    </div>
                  </div>

                  {/* Results */}
                  <div className="row text-center g-4">
                    <div className="col-md-4">
                      <div className="p-4 bg-primary bg-opacity-10 rounded-4">
                        <h5 className="text-primary fw-bold">Monthly EMI</h5>
                        <h3 className="display-5 fw-bold text-primary mb-0">
                          ₹{parseInt(this.state.emi).toLocaleString('en-IN')}
                        </h3>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-4 bg-warning bg-opacity-10 rounded-4">
                        <h5 className="text-warning fw-bold">Total Interest</h5>
                        <h3 className="display-5 fw-bold text-warning mb-0">
                          ₹{parseInt(this.state.totalInterest).toLocaleString('en-IN')}
                        </h3>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-4 bg-success bg-opacity-10 rounded-4">
                        <h5 className="text-success fw-bold">Total Amount</h5>
                        <h3 className="display-5 fw-bold text-success mb-0">
                          ₹{parseInt(this.state.totalAmount).toLocaleString('en-IN')}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Breakdown */}
                  {this.state.emi > 0 && (
                    <div className="mt-5 p-4 bg-light rounded-4">
                      <div className="row text-center">
                        <div className="col-6">
                          <small className="text-muted">Principal Amount</small>
                          <h5 className="fw-bold">₹{this.state.principal.toLocaleString('en-IN')}</h5>
                        </div>
                        <div className="col-6">
                          <small className="text-muted">Interest Portion</small>
                          <h5 className="fw-bold text-danger">
                            ₹{parseInt(this.state.totalInterest).toLocaleString('en-IN')}
                          </h5>
                        </div>
                      </div>
                      <div className="progress mt-3" style={{ height: '30px' }}>
                        <div
                          className="progress-bar bg-primary"
                          style={{
                            width: `${(this.state.principal / this.state.totalAmount) * 100}%`
                          }}
                        >
                          {((this.state.principal / this.state.totalAmount) * 100).toFixed(0)}%
                        </div>
                        <div
                          className="progress-bar bg-danger"
                          style={{
                            width: `${(this.state.totalInterest / this.state.totalAmount) * 100}%`
                          }}
                        >
                          {((this.state.totalInterest / this.state.totalAmount) * 100).toFixed(0)}%
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="card-footer bg-light text-center text-muted small py-3">
                  EMI Formula: P × r × (1+r)^n / ((1+r)^n − 1)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EMICalculator;