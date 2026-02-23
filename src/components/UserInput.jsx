
export default function UserInput({ onChangeInput, inputValue }) {



  return (
    <section id="user-input" >
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" value={inputValue.initialInvestment} onChange={(e) => onChangeInput(e.target.value, 'initialInvestment')} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Annual Investment</label>
          <input type="number" value={inputValue.annualInvestment} onChange={(e) => onChangeInput(e.target.value, 'annualInvestment')} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" value={inputValue.expectedReturn} onChange={(e) => onChangeInput(e.target.value, 'expectedReturn')} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Duration</label>
          <input type="number" value={inputValue.duration} onChange={(e) => onChangeInput(e.target.value, 'duration')} />
        </p>
      </div>
    </section>
  )
}