import { useState } from "react";

function BillInput({ bill, onSetBill }) {
    return (
        <div>
            <label>How much was the bill?</label>
            <input
                type="text"
                placeholder="Bill value"
                value={bill}
                onChange={(event) => onSetBill(Number(event.target.value))}
            />
        </div>
    );
}

function SelectPercentage({ children, percentage, onSelect }) {
    return (
        <div>
            <label>{children}</label>
            <select
                value={percentage}
                onChange={(event) => onSelect(Number(event.target.value))}
            >
                <option value="0">Dissatisfied (0%)</option>
                <option value="5">It was ok (5%)</option>
                <option value="10">It was good (10%)</option>
                <option value="20">Absolutely amazing (20%)</option>
            </select>
        </div>
    );
}

function Output({ bill, tip }) {
    return (
        <h3>
            You pay {bill + tip} (${bill} + ${tip} tip )
        </h3>
    );
}

function Reset({ onReset }) {
    return <button onClick={onReset}>Reset</button>;
}

function TipCalculator() {
    const [bill, setBill] = useState("");
    const [percentage1, SetPercentage1] = useState(0);
    const [percentage2, SetPercentage2] = useState(0);

    const tip = bill * ((percentage1 + percentage2) / 2 / 100);

    function handleReset() {
        setBill("");
        SetPercentage1(0);
        SetPercentage2(0);
    }

    return (
        <div>
            <BillInput bill={bill} onSetBill={setBill} />
            <SelectPercentage
                percentage={percentage1}
                onSelect={SetPercentage1}
            >
                How much you liked the service?
            </SelectPercentage>
            <SelectPercentage
                percentage={percentage2}
                onSelect={SetPercentage2}
            >
                How much did your friends liked the service?
            </SelectPercentage>
            {bill > 0 && (
                <>
                    <Output bill={bill} tip={tip} />
                    <Reset onReset={handleReset} />
                </>
            )}
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <TipCalculator />
        </div>
    );
}

export default App;
