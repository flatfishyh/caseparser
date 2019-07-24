'use strict';

var caseparser = require('./lib/caseparser');

const dashToSnake = {
  string: function () {
    const data = 'first-name-is-before-last-name';
    const expected = 'first_name_is_before_last_name';
    const result = caseparser.dashToSnake(data);
    const isFailed = result !== expected;
    console.log('\t\tdashToSnake', '=>', isFailed ? 'FAILED' : 'PASSED');
    if (isFailed) {
      console.error('expected: ', expected);
      console.error('received: ', result);
    }
  },
  json: function () {
    const data = {
      "id": 1,
      "is-under-age": false,
      "first-name": "Timothee",
      "last-name": "Clausner",
      "email": "tclausner0@economist.com",
      "telephone-numbers": [
        "(9999) 99999-9999",
        "(8888) 88888-8888"
      ],
      "addresses": [
        {
          "country": "United_States",
          "state": "Illinois",
          "city": "Rockford",
          "postal-code": "61105",
          "street": {
            "street-name": "41 Forest Run Circle",
            "street-number": "539"
          }
        }
      ]
    };
    const expected = {
      "id": 1,
      "is_under_age": false,
      "first_name": "Timothee",
      "last_name": "Clausner",
      "email": "tclausner0@economist.com",
      "telephone_numbers": [
        "(9999) 99999-9999",
        "(8888) 88888-8888"
      ],
      "addresses": [
        {
          "country": "United_States",
          "state": "Illinois",
          "city": "Rockford",
          "postal_code": "61105",
          "street": {
            "street_name": "41 Forest Run Circle",
            "street_number": "539"
          }
        }
      ]
    };
    const result = caseparser.dashToSnake(data);
    const isFailed = JSON.stringify(result) !== JSON.stringify(expected);
    console.log('\t\tdashToSnake', '=>', isFailed ? 'FAILED' : 'PASSED');
    if (isFailed) {
      console.error('expected: ', expected);
      console.error('received: ', result);
    }
  }
};

const dashToCamel = {
  string: function () {
    const data = 'first-name-is-before-last-name';
    const expected = 'firstNameIsBeforeLastName';
    const result = caseparser.dashToCamel(data);
    const isFailed = result !== expected;
    console.log('\t\tdashToCamel', '=>', isFailed ? 'FAILED' : 'PASSED');
    if (isFailed) {
      console.error('expected: ', expected);
      console.error('received: ', result);
    }
  },
  json: function () {
    const data = {
      "id": 1,
      "is-under-age": false,
      "first-name": "Timothee",
      "last-name": "Clausner",
      "email": "tclausner0@economist.com",
      "telephone-numbers": [
        "(9999) 99999-9999",
        "(8888) 88888-8888"
      ],
      "addresses": [
        {
          "country": "United_States",
          "state": "Illinois",
          "city": "Rockford",
          "postal-code": "61105",
          "street": {
            "street-name": "41 Forest Run Circle",
            "street-number": "539"
          }
        }
      ]
    };
    const expected = {
      "id": 1,
      "isUnderAge": false,
      "firstName": "Timothee",
      "lastName": "Clausner",
      "email": "tclausner0@economist.com",
      "telephoneNumbers": [
        "(9999) 99999-9999",
        "(8888) 88888-8888"
      ],
      "addresses": [
        {
          "country": "United_States",
          "state": "Illinois",
          "city": "Rockford",
          "postalCode": "61105",
          "street": {
            "streetName": "41 Forest Run Circle",
            "streetNumber": "539"
          }
        }
      ]
    };
    const result = caseparser.dashToCamel(data);
    const isFailed = JSON.stringify(result) !== JSON.stringify(expected);
    console.log('\t\tdashToCamel', '=>', isFailed ? 'FAILED' : 'PASSED');
    if (isFailed) {
      console.error('expected: ', expected);
      console.error('received: ', result);
    }
  }
};

const dashToPascal = {
  string: function () {
    const data = 'first-name-is-before-last-name';
    const expected = 'FirstNameIsBeforeLastName';
    const result = caseparser.dashToPascal(data);
    const isFailed = result !== expected;
    console.log('\t\tdashToPascal', '=>', isFailed ? 'FAILED' : 'PASSED');
    if (isFailed) {
      console.error('expected: ', expected);
      console.error('received: ', result);
    }
  },
  json: function () {
    const data = {
      "id": 1,
      "is-under-age": false,
      "first-name": "Timothee",
      "last-name": "Clausner",
      "email": "tclausner0@economist.com",
      "telephone-numbers": [
        "(9999) 99999-9999",
        "(8888) 88888-8888"
      ],
      "addresses": [
        {
          "country": "United_States",
          "state": "Illinois",
          "city": "Rockford",
          "postal-code": "61105",
          "street": {
            "street-name": "41 Forest Run Circle",
            "street-number": "539"
          }
        }
      ]
    };
    const expected = {
      "Id": 1,
      "IsUnderAge": false,
      "FirstName": "Timothee",
      "LastName": "Clausner",
      "Email": "tclausner0@economist.com",
      "TelephoneNumbers": [
        "(9999) 99999-9999",
        "(8888) 88888-8888"
      ],
      "Addresses": [
        {
          "Country": "United_States",
          "State": "Illinois",
          "City": "Rockford",
          "PostalCode": "61105",
          "Street": {
            "StreetName": "41 Forest Run Circle",
            "StreetNumber": "539"
          }
        }
      ]
    };
    const result = caseparser.dashToPascal(data);
    const isFailed = JSON.stringify(result) !== JSON.stringify(expected);
    console.log('\t\tdashToPascal', '=>', isFailed ? 'FAILED' : 'PASSED');
    if (isFailed) {
      console.error('expected: ', expected);
      console.error('received: ', result);
    }
  }
};

const dashToUpperSnake = {
  string: function () {
    const data = 'first-name-is-before-last-name';
    const expected = 'FIRST_NAME_IS_BEFORE_LAST_NAME';
    const result = caseparser.dashToUpperSnake(data);
    const isFailed = result !== expected;
    console.log('\t\tdashToUpperSnake', '=>', isFailed ? 'FAILED' : 'PASSED');
    if (isFailed) {
      console.error('expected: ', expected);
      console.error('received: ', result);
    }
  },
  json: function () {
    const data = {
      "id": 1,
      "is-under-age": false,
      "first-name": "Timothee",
      "last-name": "Clausner",
      "email": "tclausner0@economist.com",
      "telephone-numbers": [
        "(9999) 99999-9999",
        "(8888) 88888-8888"
      ],
      "addresses": [
        {
          "country": "United_States",
          "state": "Illinois",
          "city": "Rockford",
          "postal-code": "61105",
          "street": {
            "street-name": "41 Forest Run Circle",
            "street-number": "539"
          }
        }
      ]
    };
    const expected = {
      "ID": 1,
      "IS_UNDER_AGE": false,
      "FIRST_NAME": "Timothee",
      "LAST_NAME": "Clausner",
      "EMAIL": "tclausner0@economist.com",
      "TELEPHONE_NUMBERS": [
        "(9999) 99999-9999",
        "(8888) 88888-8888"
      ],
      "ADDRESSES": [
        {
          "COUNTRY": "United_States",
          "STATE": "Illinois",
          "CITY": "Rockford",
          "POSTAL_CODE": "61105",
          "STREET": {
            "STREET_NAME": "41 Forest Run Circle",
            "STREET_NUMBER": "539"
          }
        }
      ]
    };
    const result = caseparser.dashToUpperSnake(data);
    const isFailed = JSON.stringify(result) !== JSON.stringify(expected);
    console.log('\t\tdashToUpperSnake', '=>', isFailed ? 'FAILED' : 'PASSED');
    if (isFailed) {
      console.error('expected: ', expected);
      console.error('received: ', result);
    }
  }
};

const dashToUpperDash = {
  string: function () {
    const data = 'first-name-is-before-last-name';
    const expected = 'FIRST-NAME-IS-BEFORE-LAST-NAME';
    const result = caseparser.dashToUpperDash(data);
    const isFailed = result !== expected;
    console.log('\t\tdashToUpperDash', '=>', isFailed ? 'FAILED' : 'PASSED');
    if (isFailed) {
      console.error('expected: ', expected);
      console.error('received: ', result);
    }
  },
  json: function () {
    const data = {
      "id": 1,
      "is-under-age": false,
      "first-name": "Timothee",
      "last-name": "Clausner",
      "email": "tclausner0@economist.com",
      "telephone-numbers": [
        "(9999) 99999-9999",
        "(8888) 88888-8888"
      ],
      "addresses": [
        {
          "country": "United_States",
          "state": "Illinois",
          "city": "Rockford",
          "postal-code": "61105",
          "street": {
            "street-name": "41 Forest Run Circle",
            "street-number": "539"
          }
        }
      ]
    };
    const expected = {
      "ID": 1,
      "IS-UNDER-AGE": false,
      "FIRST-NAME": "Timothee",
      "LAST-NAME": "Clausner",
      "EMAIL": "tclausner0@economist.com",
      "TELEPHONE-NUMBERS": [
        "(9999) 99999-9999",
        "(8888) 88888-8888"
      ],
      "ADDRESSES": [
        {
          "COUNTRY": "United_States",
          "STATE": "Illinois",
          "CITY": "Rockford",
          "POSTAL-CODE": "61105",
          "STREET": {
            "STREET-NAME": "41 Forest Run Circle",
            "STREET-NUMBER": "539"
          }
        }
      ]
    };
    const result = caseparser.dashToUpperDash(data);
    const isFailed = JSON.stringify(result) !== JSON.stringify(expected);
    console.log('\t\tdashToUpperDash', '=>', isFailed ? 'FAILED' : 'PASSED');
    if (isFailed) {
      console.error('expected: ', expected);
      console.error('received: ', result);
    }
  }
};

const testDashCaseSuite = function () {
  console.log('\tString:');
  dashToSnake.string();
  dashToCamel.string();
  dashToPascal.string();
  dashToUpperSnake.string();
  dashToUpperDash.string();
  console.log('\tJSON:');
  dashToSnake.json();
  dashToCamel.json();
  dashToPascal.json();
  dashToUpperSnake.json();
  dashToUpperDash.json();
};

module.exports = { testDashCaseSuite };