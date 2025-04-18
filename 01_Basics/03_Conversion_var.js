let a = "06"

console.log(`${typeof a} ${a}` );

let convert_num = Number(a);
console.log(`${typeof convert_num} ${convert_num}`);

let b = "06abc"
console.log(`${typeof b} ${b}` );
let convert_num2 = Number(b);
console.log(`${typeof convert_num2} ${convert_num2}`);

// "06" can be converted in number 
// "06abc" can converted by it's it's value change to "NaN".

let active = 1
let active_st = "true"
let active_em = ""
let active_f = 0
let active_st_f = "0"
let active_st_t = "t"

let active2 = Boolean(active)
let active_st2 = Boolean(active_st)
let active_em2 = Boolean(active_em)
let active_f2 = Boolean(active_f)
let active_st_f2 = Boolean(active_st_f)
let active_st_t2 = Boolean(active_st_t)

console.log(`${typeof active} ${active}`);
console.log(`${typeof active2} ${active2}`);
console.log("_________________________________");

console.log(`${typeof active_st} ${active_st}`);
console.log(`${typeof active_st2} ${active_st2}`);
console.log("_________________________________");
console.log(`${typeof active_em} ${active_em}`);
console.log(`${typeof active_em2} ${active_em2}`);
console.log("_________________________________");
console.log(`${typeof active_f} ${active_f}`);
console.log(`${typeof active_f2} ${active_f2}`);
console.log("_________________________________");
console.log(`${typeof active_st_f} ${active_st_f}`);
console.log(`${typeof active_st_f2} ${active_st_f2}`);
console.log("_________________________________");
console.log(`${typeof active_st_t} ${active_st_t}`);
console.log(`${typeof active_st_t2} ${active_st_t2}`);

// number 1
// boolean true
// _________________________________
// string true
// boolean true
// _________________________________
// string 
// boolean false
// _________________________________
// number 0
// boolean false
// _________________________________
// string 0
// boolean true
// _________________________________
// string t
// boolean true