var event;
if(typeof(Event) === 'function') {
    event = new Event('Footer');
}else{
    event = document.createEvent('Event');
    event.initEvent('Footer', true, true);
}

document.dispatchEvent(event);