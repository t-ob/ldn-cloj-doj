goog.provide('conway.core');
goog.require('cljs.core');
goog.require('goog.dom');
conway.core.greet = (function greet(n){
return cljs.core.str.call(null,"Hello ",n);
});
goog.exportSymbol('conway.core.greet', conway.core.greet);
conway.core.alive_QMARK_ = (function alive_QMARK_(cosmos,i,j){
return cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.nth.call(null,cosmos,i),j),1);
});
goog.exportSymbol('conway.core.alive_QMARK_', conway.core.alive_QMARK_);
conway.core.draw = (function draw(cosmos){
var rows__64547 = cljs.core.range.call(null,cljs.core.count.call(null,cosmos));
var cols__64548 = cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.nth.call(null,cosmos,0)));

var G__64549__64551 = cljs.core.seq.call(null,rows__64547);

if(cljs.core.truth_(G__64549__64551))
{var i__64552 = cljs.core.first.call(null,G__64549__64551);
var G__64549__64553 = G__64549__64551;

while(true){
var G__64550__64554 = cljs.core.seq.call(null,cols__64548);

if(cljs.core.truth_(G__64550__64554))
{var j__64555 = cljs.core.first.call(null,G__64550__64554);
var G__64550__64556 = G__64550__64554;

while(true){
if(cljs.core.truth_(conway.core.alive_QMARK_.call(null,cosmos,i__64552,j__64555)))
{conway.core.drawsquare.call(null,j__64555,i__64552);
} else
{}
var temp__3698__auto____64557 = cljs.core.next.call(null,G__64550__64556);

if(cljs.core.truth_(temp__3698__auto____64557))
{var G__64550__64558 = temp__3698__auto____64557;

{
var G__64561 = cljs.core.first.call(null,G__64550__64558);
var G__64562 = G__64550__64558;
j__64555 = G__64561;
G__64550__64556 = G__64562;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____64559 = cljs.core.next.call(null,G__64549__64553);

if(cljs.core.truth_(temp__3698__auto____64559))
{var G__64549__64560 = temp__3698__auto____64559;

{
var G__64563 = cljs.core.first.call(null,G__64549__64560);
var G__64564 = G__64549__64560;
i__64552 = G__64563;
G__64549__64553 = G__64564;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
goog.exportSymbol('conway.core.draw', conway.core.draw);
conway.core.drawsquare = (function drawsquare(i,j){
var canvas__64565 = goog.dom.getElement.call(null,"cosmos");
var context__64566 = canvas__64565.getContext("2d");

context__64566.fillStyle = "red";
return context__64566.fillRect((40 * i),(40 * j),40,40);
});
goog.exportSymbol('conway.core.drawsquare', conway.core.drawsquare);
conway.core.cosmos = cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([0,1,0,1,0]),cljs.core.Vector.fromArray([1,1,1,1,0]),cljs.core.Vector.fromArray([0,1,0,1,1])]);
goog.exportSymbol('conway.core.cosmos', conway.core.cosmos);
conway.core.get_value_mod = (function get_value_mod(cosmos,i,j){
var rows__64567 = cljs.core.count.call(null,cosmos);
var cols__64568 = cljs.core.count.call(null,cljs.core.nth.call(null,cosmos,0));

return cljs.core.nth.call(null,cljs.core.nth.call(null,cosmos,(i % rows__64567)),(j % cols__64568));
});
conway.core.sum_neighbours = (function sum_neighbours(cosmos,i,j){
return (((((((conway.core.get_value_mod.call(null,cosmos,(i - 1),(j - 1)) + conway.core.get_value_mod.call(null,cosmos,(i - 1),j)) + conway.core.get_value_mod.call(null,cosmos,(i - 1),(j + 1))) + conway.core.get_value_mod.call(null,cosmos,i,(j - 1))) + conway.core.get_value_mod.call(null,cosmos,i,(j + 1))) + conway.core.get_value_mod.call(null,cosmos,(i + 1),(j - 1))) + conway.core.get_value_mod.call(null,cosmos,(i + 1),j)) + conway.core.get_value_mod.call(null,cosmos,(i + 1),(j + 1)));
});
conway.core.destiny = (function destiny(cosmos,i,j){
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,conway.core.get_value_mod.call(null,cosmos,i,j))))
{if(cljs.core.truth_((conway.core.sum_neighbours.call(null,cosmos,i,j) < 2)))
{return 0;
} else
{if(cljs.core.truth_((conway.core.sum_neighbours.call(null,cosmos,i,j) > 3)))
{return 0;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return 1;
} else
{return null;
}
}
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,conway.core.sum_neighbours.call(null,cosmos,i,j),3)))
{return 1;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return 0;
} else
{return null;
}
}
}
});
conway.core.next_cosmos = (function next_cosmos(cosmos){
return cosmos;
});
goog.exportSymbol('conway.core.next_cosmos', conway.core.next_cosmos);
