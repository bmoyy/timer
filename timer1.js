const args = process.argv;

const alarm = (args) => {
  let timer = args.slice(2);
  for (let time of timer) {
    if (time < 0) continue;
    if (isNaN(time)) continue;
    
    setTimeout(() => {
      process.stdout.write('.');
    },(time * 1000));
  }

};

alarm(args);
