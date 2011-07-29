/*
---

provides: Accordion
requires: [Core/DomReady, More/Fx.Accordion]

...
*/
window.addEvent('domready', function(){
	new Fx.Accordion($('accordion'), '#accordion h2', '#accordion .content');
});
