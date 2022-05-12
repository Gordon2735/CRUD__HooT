'use strict';

import { T_sum as T_sumCheck } from '../utility/test/test-units/T_sum.test.js';
import { T_calculator as T_calculatorCheck } from '../utility/test/test-units/T_calculator.test.js';

const testHootCRUD = () => {
	console.info('testHootCRUD');
	T_sumCheck();
	T_calculatorCheck();
};

export default testHootCRUD;
