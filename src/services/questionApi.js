import {QUESTIONS} from './questions';

const getQuestions = (total) => {

  const count = QUESTIONS.length;
  const start = (Date.now() / 1000 / 20) % count;
  return QUESTIONS.splice(start, total);
  // total = total || 5;
  // let indexes = [];
  // while (true) {
  //   const index = Math.floor(Math.random() * Math.floor(QUESTIONS.length));
  //   if (!indexes.includes(index)) {
  //     indexes.push(index);
  //   }
  //
  //   if (indexes.length === total) {
  //     break;
  //   }
  // }
  //
  // let result = [];
  // indexes.forEach(function (element) {
  //   result.push(QUESTIONS[element]);
  // });
  //
  // return result;
}


export default getQuestions;
