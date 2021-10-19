import { doSomething } from '../src/module';
import './scss/style.scss';
doSomething();

console.log('Hello World!');

for (let i = 0; i < 10; i += 1) {
  console.log('jhgjdhfg');
}

let b: string = 'rt';

setTimeout(() => {
  let a = 'fjg';
  console.log(a + b);
}, 1000);

let el = document.createElement('div');
el.textContent = 'element from TS';
el.className = 'style';
document.body.appendChild(el);
