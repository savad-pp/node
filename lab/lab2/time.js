var timer = setTimeout(function(name) {
    console.log('Hello ' + name);
  }, 1000, 'Shelley');
timer.ref();
timer.unref();
console.log("waiting on timer...");
