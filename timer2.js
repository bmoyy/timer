const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("\nThanks for using me, ciao!");
    process.exit();
  }

  if (key === 'b') {
    process.stdout.write('.');
  }
  
  if (key > 0 && key <= 9){
    process.stdout.write(`\nsetting timer for ${key} seconds...`);
      setTimeout(() => {
    process.stdout.write('\x07');
  },(key * 1000));
  }
});