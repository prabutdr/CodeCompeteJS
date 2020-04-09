function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'I', 'O', 'U'];

  return str
    .split('')
    .reduce((res, ch) => res += vowels.includes(ch)? '': ch, '');
}

console.log(disemvowel("This website is for losers LOL!"));