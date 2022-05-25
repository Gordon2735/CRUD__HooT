'use strict';

import { T_sum as T_sumCheck } from '../utility/test/test-units/T_sum.test.js';
import { T_calculator as T_calculatorCheck } from '../utility/test/test-units/T_calculator.test.js';
import { T_logDate as T_logDateCheck } from '../utility/test/test-units/T_logDate.test.js';

const testHootCRUD = () => {
	console.info('testHootCRUD');
	T_sumCheck();
	T_calculatorCheck();
	T_logDateCheck();
};
console.log(
	`\u001b[31;1mTDD :::: TEST DRIVEN DEVELOPMENT on ${new Date()}:: 
		\u001b[33;1m:::: testHootCRUD.test.js ::::`
);
export default testHootCRUD;
