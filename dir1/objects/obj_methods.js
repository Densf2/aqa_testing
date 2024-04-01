/* eslint-disable max-len */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
const objectNumber1 = {
  name: 'John',
  lastName: 'Doe',
  age: 1000,
  adress: 'Lfufiieieiodpdppds-Koelleoldd',
  phone: {
    mobile: 39399393,
    cordPhone: 230901,
    'cord phone 2': 9000,
  },
};
console.log(objectNumber1.phone.cordPhone); // => 230901
console.log(objectNumber1.phone.cordPhone); // => 230901
console.log(objectNumber1.phone['cord phone 2']);
console.log(objectNumber1.phone.cellPhone);

const anotherObj1 = objectNumber1;
console.log(anotherObj1.age);
anotherObj1.age = 10;
console.log(objectNumber1.age);

const objectNumber11 = {};

objectNumber11.name = 'FJFJJF';

const nameKolo = 'Kolo';
const age2000 = 2000;

const objectValuesPoint = {
  name: nameKolo,
  age: age2000,
};

const selectorHeader = 'h1.main.pointer';
const textInHeader = 'Hello user';

const combinedSelectors = { selectorHeader, textInHeader };
console.log(combinedSelectors.selectorHeader);

const prop = 'age';
const selectorForFooter = {
  [prop]: 3000,
};
const ageFromObject = selectorForFooter.age; // => 3000

// this
const objectValuesPointPlus = {
  name: nameKolo,
  age: age2000,
  sayHi() {
    console.log('Hello from method, not function');
  },
  showName() {
    console.log(`My name is ${this.name}`);
  },
  gender: null,
};

const genderFromObj1 = objectNumber1.gender ?? 'input.field_email';

const resultOfFunction = objectValuesPointPlus.showAge?.();
console.log(resultOfFunction);

for (const valueKey in objectValuesPointPlus) {
  // console.log(valueKey)
  console.log(`${valueKey}: ${objectValuesPointPlus[valueKey]}`);
}

const newObjPlus = Object.create(objectValuesPointPlus);
newObjPlus.legs = 2;

console.log(
  Object.prototype.hasOwnProperty.call(objectValuesPointPlus, 'legs'),
);
console.log(Object.prototype.hasOwnProperty.call(newObjPlus, 'legs'));

const objBasedArays = [
  { name: 'John', lastName: 'Doe' },
  { name: 'John', lastName: 'Doe' },
  { name: 'John', lastName: 'Doe' },
];

// eslint-disable-next-line no-shadow
objBasedArays.forEach((objBasedArays) => {
  if (!objBasedArays.legs) {
    console.log('no property');
  }
  // another actions
});

const keys = Object.keys(objectValuesPointPlus);
const valuesO = Object.values(objectValuesPointPlus);
// console.log(keys + ' values: ' + valuesO)

combinedSelectors.footerElement = 'link.div.input';
combinedSelectors.linkToHomePage = 'link.home.page';

const {
  selectorHeader: newSelHeader,
  footerElement: newfooter,
  linkToHomePage: newLinkH,
} = combinedSelectors;
console.log(newSelHeader);

// const { originalProperty: txtLinkValueInFoooter } = combinedSelectors.footerElements.footerTextELements.homeLinkText

const elementsArray = ['input', 'button', 'button.send'];

const [, , ThirdELement] = elementsArray;

// ...
const copiedSelectors = { ...combinedSelectors };
// assign method
const copiedSelectors2 = { ...combinedSelectors };
copiedSelectors.selectorHeader = 'NNN';
console.log(combinedSelectors.selectorHeader);

function clickAndVerifyDataInFooter(obj) {
  console.log(`Click on the element: ${obj.footerElement}`);
}

clickAndVerifyDataInFooter(copiedSelectors);

// Map

const simpleMap = new Map();
simpleMap.set('keyNumber1', 'valueNumber1');
console.log(simpleMap.get('keyNumber1'));
console.log(simpleMap.has('keyNumber2000'));
simpleMap.delete('keyNotExisted');
simpleMap.clear();
