import React, { useState } from "react";

const Calculator = () => {
	const [total, setTotal] = useState(0);

	const onSubmit = (e) => {
		e.preventDefault();
		let _total = 0;
		const formData = new FormData(e.target);
		const formObj = Object.fromEntries(formData.entries());
    for (const _key in formObj) {
      if (isNaN(Number(formObj[_key]))) {
				_total = 0;
        alert("Given input is not a number")
				return;
			}
			_total += Number(formObj[_key]);
    }
		setTotal(_total);
	};

	return (
		<div>
			<h2>Adding Two Numbers</h2>
			<form onSubmit={onSubmit}>
				<div>
					<input type="number" name="input1" required />
				</div>
				<br />
				<div>
					<input type="number" name="input2" required />
				</div>
				<br />
				<input type="submit" value="Add Two Numbers" />
			</form>
			<p>{`Total: ${total !== 0 ? total : ""}`}</p>
		</div>
	);
};

export default Calculator;
