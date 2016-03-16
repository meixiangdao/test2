var i = 0,
    dom = document,
    p,
    t;
for (; i<1000; i++) {
    p = dom.createElement('p');
    t = dom.createTextNode('No.' + i + '<br>');
    p.appendChild(t);
    dom.body.appendChild(p);
}