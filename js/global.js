var fullName = 'Ragen Sanner';
var action1 = 'ran';
var noun1 = 'toothbrush';

// var story = 'One day, ' + fullName + ' ' + action1 + ' over the ' + noun1;

var story = `One day, ${fullName} ${action1} over the ${noun1}.`;
// THe tick marks allow you to break the line and break up the text. If you want to do it in the long version, you have to end the quote then start it up again with a plus sign.

console.log(story);












// start Collin's test code
function avow(description, assertion, context) {
  var log = console.log.bind(console)
  var isBrowser = typeof window != 'undefined'
  var isAssertionGroup = typeof assertion === 'function' || arguments.length === 1
  var isAssertion = !isAssertionGroup
  var isPass = assertion
  var showContext = isAssertion && !isPass && context

  if (isAssertionGroup) {
    log('')
    isBrowser?
    log('%c> ' + description, 'font-weight: bold; color: goldenrod;'):
    log('\x1b[1m\x1b[33m> ' + description + '\x1b[22m\x1b[0m')
    isPass? assertion() : undefined
  }

  else if (isAssertion) {
    isBrowser?
    log('[%c' + (isPass? 'PASSED' : 'FAILED') + '%c] %c ' + description, 'font-weight: bold; color: ' + (isPass? 'green' : 'red') + ';', 'font-weight: normal; color: inherit;', 'color: darkcyan;'):
    log('[\x1b[1m' + (isPass? '\x1b[32mPASSED' : '\x1b[31mFAILED') + '\x1b[22m\x1b[0m]\x1b[36m ' + description + '\x1b[0m')
  }

  if (showContext) {
    isBrowser?
    log('%cFailure Context...', 'color: red;'):
    log('\x1b[31mFailure Context...\x1b[0m')
    console.dir(context)
  }
}