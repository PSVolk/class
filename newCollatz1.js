function collatzConjecture(n)
 {
  let fuck = [n];

  while (n !== 1) 
  {
    if (n % 2 === 0) 
	{
      n = n / 2;
    } 
	else
		{
      n = 3 * n + 1;
    }
    fuck.push(n);
  }

  return fuck;
}

let number = 3;
let fuck = collatzConjecture(number);
console.log(fuck);
