import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class BMICalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      bmi: null,
      category: '',
      error: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.calculateBMI = this.calculateBMI.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      if (this.state.weight && this.state.height) {
        this.calculateBMI();
      }
    });
  }

  calculateBMI() {
    const weight = parseFloat(this.state.weight);
    const height = parseFloat(this.state.height);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      this.setState({
        bmi: null,
        category: '',
        error: 'Please enter valid positive numbers.'
      });
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    let category = '';
    let alertClass = 'secondary';

    if (bmiValue < 18.5) {
      category = 'Underweight';
      alertClass = 'info';
    } else if (bmiValue < 25) {
      category = 'Normal Weight';
      alertClass = 'success';
    } else if (bmiValue < 30) {
      category = 'Overweight';
      alertClass = 'warning';
    } else {
      category = 'Obese';
      alertClass = 'danger';
    }

    this.setState({
      bmi: bmiValue,
      category,
      error: '',
      alertClass
    });
  }

  render() {
    return (
      <div className="min-vh-100 bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
                <div className="card-header bg-gradient bg-primary text-white text-center py-4">
                  <h2 className="mb-1">BMI Calculator</h2>
                  <p className="mb-0 opacity-75">Calculate your Body Mass Index</p>
                </div>

                <div className="card-body p-4 p-md-5">
                  <div className="row g-4">
                    <div className="col-12">
                      <label className="form-label fw-bold fs-5">Weight (kg)</label>
                      <input
                        type="number"
                        name="weight"
                        className="form-control form-control-lg text-center"
                        placeholder="e.g. 70"
                        value={this.state.weight}
                        onChange={this.handleInputChange}
                        min="1"
                        step="0.1"
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-bold fs-5">Height (cm)</label>
                      <input
                        type="number"
                        name="height"
                        className="form-control form-control-lg text-center"
                        placeholder="e.g. 170"
                        value={this.state.height}
                        onChange={this.handleInputChange}
                        min="1"
                        step="1"
                      />
                    </div>
                  </div>

                  {this.state.error && (
                    <div className="alert alert-danger mt-4 text-center fw-bold">
                      {this.state.error}
                    </div>
                  )}

                  {this.state.bmi !== null && !this.state.error && (
                    <div className={`alert alert-${this.state.alertClass} mt-5 text-center py-5 border-0 rounded-4`}>
                      <h1 className="display-3 fw-bold mb-3">{this.state.bmi}</h1>
                      <h3 className="fw-bold mb-0">{this.state.category}</h3>
                    </div>
                  )}

                  <div className="mt-5">
                    <h5 className="text-center text-muted mb-4">BMI Categories</h5>
                    <div className="row text-center g-3">
                      <div className="col-6 col-md-3">
                        <div className="p-3 bg-info bg-opacity-10 rounded">
                          <strong>&lt; 18.5</strong><br />
                          <small>Underweight</small>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="p-3 bg-success bg-opacity-10 rounded">
                          <strong>18.5–24.9</strong><br />
                          <small>Normal</small>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="p-3 bg-warning bg-opacity-10 rounded">
                          <strong>25–29.9</strong><br />
                          <small>Overweight</small>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="p-3 bg-danger bg-opacity-10 rounded">
                          <strong>≥ 30</strong><br />
                          <small>Obese</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-footer bg-light text-center text-muted small py-3">
                  Formula: BMI = weight (kg) / [height (m)]²
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BMICalculator;