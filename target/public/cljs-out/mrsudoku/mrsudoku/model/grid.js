// Compiled by ClojureScript 1.10.339 {}
goog.provide('mrsudoku.model.grid');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('mrsudoku.utils');
/**
 * Create a new cell.
 */
mrsudoku.model.grid.mk_cell = (function mrsudoku$model$grid$mk_cell(var_args){
var G__8543 = arguments.length;
switch (G__8543) {
case 0:
return mrsudoku.model.grid.mk_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return mrsudoku.model.grid.mk_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mrsudoku.model.grid.mk_cell.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mrsudoku.model.grid.mk_cell.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null);
});

mrsudoku.model.grid.mk_cell.cljs$core$IFn$_invoke$arity$1 = (function (v){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),v], null);
});

mrsudoku.model.grid.mk_cell.cljs$core$IFn$_invoke$arity$2 = (function (st,v){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),st,new cljs.core.Keyword(null,"value","value",305978217),v], null);
});

mrsudoku.model.grid.mk_cell.cljs$lang$maxFixedArity = 2;

mrsudoku.model.grid.cell_value = (function mrsudoku$model$grid$cell_value(cell){
var G__8545 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cell);
var G__8545__$1 = (((G__8545 instanceof cljs.core.Keyword))?G__8545.fqn:null);
switch (G__8545__$1) {
case "init":
case "set":
case "solved":
case "conflict":
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cell);

break;
default:
return null;

}
});
mrsudoku.model.grid.sudoku_grid = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(7)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(1)),mrsudoku.model.grid.mk_cell.call(null,(9)),mrsudoku.model.grid.mk_cell.call(null,(5)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(6)),mrsudoku.model.grid.mk_cell.call(null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null,(8)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(4)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(7)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(6)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(8)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(3)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(2)),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(3)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(1)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(6))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(6)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(4)),mrsudoku.model.grid.mk_cell.call(null,(1)),mrsudoku.model.grid.mk_cell.call(null,(9)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(8)),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null,(2)),mrsudoku.model.grid.mk_cell.call(null,(8)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(5)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(7)),mrsudoku.model.grid.mk_cell.call(null,(9))], null)], null)], null);
/**
 * Get the cell at coordinates `(cx,cy)`
 * with `cx` the column number and `cy` the row number.
 */
mrsudoku.model.grid.cell = (function mrsudoku$model$grid$cell(grid,cx,cy){
if(((((1) <= cx)) && ((cx <= (9))))){
} else {
throw (new Error("Assert failed: (<= 1 cx 9)"));
}

if(((((1) <= cy)) && ((cy <= (9))))){
} else {
throw (new Error("Assert failed: (<= 1 cy 9)"));
}

var block_x = cljs.core.quot.call(null,(cx - (1)),(3));
var cell_x = cljs.core.rem.call(null,(cx - (1)),(3));
var block_y = cljs.core.quot.call(null,(cy - (1)),(3));
var cell_y = cljs.core.rem.call(null,(cy - (1)),(3));
var cell_ref = ((cell_y * (3)) + cell_x);
var block = grid.call(null,block_y).call(null,block_x);
return block.call(null,cell_ref);
});
/**
 * Change the `grid` cell at coordinates `(cx,cy)`
 *   with `cx` the column number and `cy` the row number,
 *   and `cell` is the new cell-content.
 */
mrsudoku.model.grid.change_cell = (function mrsudoku$model$grid$change_cell(grid,cx,cy,cell){
if(((((1) <= cx)) && ((cx <= (9))))){
} else {
throw (new Error("Assert failed: (<= 1 cx 9)"));
}

if(((((1) <= cy)) && ((cy <= (9))))){
} else {
throw (new Error("Assert failed: (<= 1 cy 9)"));
}

var block_x = cljs.core.quot.call(null,(cx - (1)),(3));
var cell_x = cljs.core.rem.call(null,(cx - (1)),(3));
var block_y = cljs.core.quot.call(null,(cy - (1)),(3));
var cell_y = cljs.core.rem.call(null,(cy - (1)),(3));
var cell_ref = ((cell_y * (3)) + cell_x);
return cljs.core.update_in.call(null,grid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_y,block_x,cell_ref], null),((function (block_x,cell_x,block_y,cell_y,cell_ref){
return (function (_){
return cell;
});})(block_x,cell_x,block_y,cell_y,cell_ref))
);
});
mrsudoku.model.grid.cell__GT_str = (function mrsudoku$model$grid$cell__GT_str(cell){
var pred__8547 = cljs.core._EQ_;
var expr__8548 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cell);
if(cljs.core.truth_(pred__8547.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),expr__8548))){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cell))," "].join('');
} else {
if(cljs.core.truth_(pred__8547.call(null,new cljs.core.Keyword(null,"empty","empty",767870958),expr__8548))){
return " . ";
} else {
if(cljs.core.truth_(pred__8547.call(null,new cljs.core.Keyword(null,"set","set",304602554),expr__8548))){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cell)),"]"].join('');
} else {
if(cljs.core.truth_(pred__8547.call(null,new cljs.core.Keyword(null,"conflict","conflict",1978796605),expr__8548))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cell)),"!"].join('');
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__8548)].join('')));
}
}
}
}
});
/**
 * Get the #`b` block of the `grid`.
 */
mrsudoku.model.grid.block = (function mrsudoku$model$grid$block(grid,b){
if(((((1) <= b)) && ((b <= (9))))){
} else {
throw (new Error("Assert failed: (<= 1 b 9)"));
}

var row = cljs.core.quot.call(null,(b - (1)),(3));
var blk = cljs.core.rem.call(null,(b - (1)),(3));
return cljs.core.nth.call(null,cljs.core.nth.call(null,grid,row),blk);
});
/**
 * Reduce the `b`-th `block` of a sudoku grid with a function taking 4
 *   parameters: `acc` for the accumulated value, `index` for the cell
 *   index in the block, `cx, cy` for the cell
 *   coordinates in the grid and `cell` for the cell content.
 */
mrsudoku.model.grid.reduce_block = (function mrsudoku$model$grid$reduce_block(f,init,block,b){
var bx = ((3) * cljs.core.rem.call(null,(b - (1)),(3)));
var by = ((3) * cljs.core.quot.call(null,(b - (1)),(3)));
var yoffset = (0);
var index = (1);
var cells = block;
var acc = init;
while(true){
if(cljs.core._EQ_.call(null,yoffset,(3))){
return acc;
} else {
var vec__8550 = (function (){var xoffset = (0);
var index__$1 = index;
var cells__$1 = cells;
var acc__$1 = acc;
while(true){
if(cljs.core._EQ_.call(null,xoffset,(3))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc__$1,cells__$1,index__$1], null);
} else {
var G__8553 = (xoffset + (1));
var G__8554 = (index__$1 + (1));
var G__8555 = cljs.core.rest.call(null,cells__$1);
var G__8556 = f.call(null,acc__$1,index__$1,((bx + xoffset) + (1)),((by + yoffset) + (1)),cljs.core.first.call(null,cells__$1));
xoffset = G__8553;
index__$1 = G__8554;
cells__$1 = G__8555;
acc__$1 = G__8556;
continue;
}
break;
}
})();
var nacc = cljs.core.nth.call(null,vec__8550,(0),null);
var ncells = cljs.core.nth.call(null,vec__8550,(1),null);
var nindex = cljs.core.nth.call(null,vec__8550,(2),null);
var G__8557 = (yoffset + (1));
var G__8558 = nindex;
var G__8559 = ncells;
var G__8560 = nacc;
yoffset = G__8557;
index = G__8558;
cells = G__8559;
acc = G__8560;
continue;
}
break;
}
});
/**
 * Do the effects in function `f!` while traversing the `b`-th `block`
 *   of a sudoku grid . The function `f!` takes 4 parameters: `index` for
 *   the index of the cell in the block, `cx, cy`
 *   for the cell coordinates in the grid and `cell` for the cell content.
 */
mrsudoku.model.grid.do_block = (function mrsudoku$model$grid$do_block(f_BANG_,block,b){
return mrsudoku.model.grid.reduce_block.call(null,(function (_,index,cx,cy,cell){
return f_BANG_.call(null,index,cx,cy,cell);
}),null,block,b);
});
/**
 * Get the #`r` row in the `grid`.
 */
mrsudoku.model.grid.block_row = (function mrsudoku$model$grid$block_row(block,r){
if(((((1) <= r)) && ((r <= (3))))){
} else {
throw (new Error("Assert failed: (<= 1 r 3)"));
}

var base = ((r - (1)) * (3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,block,base),cljs.core.nth.call(null,block,(base + (1))),cljs.core.nth.call(null,block,(base + (2)))], null);
});
/**
 * Get the #`r` row in the `grid`.
 */
mrsudoku.model.grid.row = (function mrsudoku$model$grid$row(grid,r){
if(((((1) <= r)) && ((r <= (9))))){
} else {
throw (new Error("Assert failed: (<= 1 r 9)"));
}

var block_r = cljs.core.quot.call(null,(r - (1)),(3));
var row_r = (cljs.core.rem.call(null,(r - (1)),(3)) + (1));
var blocks = cljs.core.nth.call(null,grid,block_r);
return mrsudoku.utils.concatv.call(null,mrsudoku.model.grid.block_row.call(null,cljs.core.nth.call(null,blocks,(0)),row_r),mrsudoku.model.grid.block_row.call(null,cljs.core.nth.call(null,blocks,(1)),row_r),mrsudoku.model.grid.block_row.call(null,cljs.core.nth.call(null,blocks,(2)),row_r));
});
mrsudoku.model.grid.row__GT_str = (function mrsudoku$model$grid$row__GT_str(row){
return clojure.string.join.call(null," ",cljs.core.map.call(null,mrsudoku.model.grid.cell__GT_str,row));
});
/**
 * Fetch all the rows of a sudoku `grid`.
 */
mrsudoku.model.grid.rows = (function mrsudoku$model$grid$rows(grid){
var iter__4324__auto__ = (function mrsudoku$model$grid$rows_$_iter__8561(s__8562){
return (new cljs.core.LazySeq(null,(function (){
var s__8562__$1 = s__8562;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__8562__$1);
if(temp__5720__auto__){
var s__8562__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8562__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8562__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8564 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8563 = (0);
while(true){
if((i__8563 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8563);
cljs.core.chunk_append.call(null,b__8564,mrsudoku.model.grid.row.call(null,grid,i));

var G__8565 = (i__8563 + (1));
i__8563 = G__8565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8564),mrsudoku$model$grid$rows_$_iter__8561.call(null,cljs.core.chunk_rest.call(null,s__8562__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8564),null);
}
} else {
var i = cljs.core.first.call(null,s__8562__$2);
return cljs.core.cons.call(null,mrsudoku.model.grid.row.call(null,grid,i),mrsudoku$model$grid$rows_$_iter__8561.call(null,cljs.core.rest.call(null,s__8562__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,(1),(10)));
});
mrsudoku.model.grid.grid__GT_str = (function mrsudoku$model$grid$grid__GT_str(grid){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,mrsudoku.model.grid.row__GT_str,mrsudoku.model.grid.rows.call(null,grid)));
});
/**
 * Get the #`c` column of the `grid`.
 */
mrsudoku.model.grid.col = (function mrsudoku$model$grid$col(grid,c){
if(((((1) <= c)) && ((c <= (9))))){
} else {
throw (new Error("Assert failed: (<= 1 c 9)"));
}

return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4324__auto__ = (function mrsudoku$model$grid$col_$_iter__8566(s__8567){
return (new cljs.core.LazySeq(null,(function (){
var s__8567__$1 = s__8567;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__8567__$1);
if(temp__5720__auto__){
var s__8567__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8567__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8567__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8569 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8568 = (0);
while(true){
if((i__8568 < size__4323__auto__)){
var cy = cljs.core._nth.call(null,c__4322__auto__,i__8568);
cljs.core.chunk_append.call(null,b__8569,mrsudoku.model.grid.cell.call(null,grid,c,cy));

var G__8570 = (i__8568 + (1));
i__8568 = G__8570;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8569),mrsudoku$model$grid$col_$_iter__8566.call(null,cljs.core.chunk_rest.call(null,s__8567__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8569),null);
}
} else {
var cy = cljs.core.first.call(null,s__8567__$2);
return cljs.core.cons.call(null,mrsudoku.model.grid.cell.call(null,grid,c,cy),mrsudoku$model$grid$col_$_iter__8566.call(null,cljs.core.rest.call(null,s__8567__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,(1),(10)));
})());
});
/**
 * Reduce the whole `grid` of a sudoku with a function taking 4
 *   parameters: `acc` for the accumulated value, `cx, cy` for the cell
 *   coordinates and `cell` for the cell content.
 */
mrsudoku.model.grid.reduce_grid = (function mrsudoku$model$grid$reduce_grid(f,init,grid){
var cy = (1);
var acc = init;
while(true){
if(cljs.core._EQ_.call(null,cy,(10))){
return acc;
} else {
var nacc = (function (){var cx = (1);
var acc__$1 = acc;
while(true){
if(cljs.core._EQ_.call(null,cx,(10))){
return acc__$1;
} else {
var G__8571 = (cx + (1));
var G__8572 = f.call(null,acc__$1,cx,cy,mrsudoku.model.grid.cell.call(null,grid,cx,cy));
cx = G__8571;
acc__$1 = G__8572;
continue;
}
break;
}
})();
var G__8573 = (cy + (1));
var G__8574 = nacc;
cy = G__8573;
acc = G__8574;
continue;
}
break;
}
});
/**
 * Do the effects in function `f!` while traversing the `grid` of a
 *   sudoku. The function `f!` takes 3 parameters: `cx, cy` for the cell
 *   coordinates and `cell` for the cell content.
 */
mrsudoku.model.grid.do_grid = (function mrsudoku$model$grid$do_grid(f_BANG_,grid){
return mrsudoku.model.grid.reduce_grid.call(null,(function (_,cx,cy,cell){
return f_BANG_.call(null,cx,cy,cell);
}),null,grid);
});

//# sourceMappingURL=grid.js.map
