# JavaScript logger
Usage:
```
npm install https://github.com/skoif/jslogger.git
```
Code example:
```ecmascript 6
const Logger = require('jslogger');
const loggerInstance = new Logger({});

loggerInstance.info("INFO");
loggerInstance.log("LOG");
loggerInstance.debug("ATTENTION");
loggerInstance.warn("WARNING");
loggerInstance.error("ERROR");
```

### Arguments list:
argument name - variable type - default value - about

- info - bool - true - log or not infos
- log - bool - true - log or not logs
- debug - bool - true - log or not debugs
- warn - bool - true - log or not warns
- error - bool - true - log or not errors
- addName - bool - true - add event name or not
- infoName - string - "INFO" - what to add before infos
- logName - string - "LOG" - what to add before logs
- debugName - string - "DEBUG" - what to add before debugs
- warnName - string - "WARNING" - what to add before warns
- errorName - string - "ERROR" - what to add before errors
- prefix - string - "" - text prefix to add (It could be module's name)
- dynamicPrefix - function - ()=>{ return "-"; } - Function to add it's return as second prefix (It colud be timestamo)
- join - string - "" - how to separate multiple parameters
- output - function - console.log - function to call for logging