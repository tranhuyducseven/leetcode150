// Have the function HTMLElements(str) read the str parameter being passed which will be a string of HTML DOM elements and plain text.
// The elements that will be used are: b, i, em, div, p. For example: if str is "<div><b><p>hello world</p></b></div>" then this string of
// DOM elements is nested correctly so your program should return the string true.
// If a string is not nested correctly, return the first element encountered where, if changed into a different element, would result in
// a properly formatted string. If the string is not formatted properly, then it will only be one element that needs to be changed.
// For example: if str is "<div><i>hello</i>world</b>" then your program should return the string div because if the first <div> element

// were changed into a <b>, the string would be properly formatted.
// Examples
// Input: "<div><div><b></b></div></p>"
// Output: div
// Input: "<div>abc</div><p><em><i>test test test</b></em></p>"
// Output: i

// Solution
function htmlElement(str){
    const stack = [];
    const tags = str.match(/<\/?[a-z]+>/g);
    const tagMap = {
        '<b>': '</b>',
        '<i>': '</i>',
        '<em>': '</em>',
        '<div>': '</div>',
        '<p>': '</p>'
    };
    for(let tag of tags){
        if(tag[1] === '/'){
            if(stack.length === 0) return tag.slice(2, -1);
            if(tagMap[stack[stack.length - 1]] === tag) stack.pop();
            else return stack[stack.length - 1].slice(1, -1);
        }else{
            stack.push(tag);
        }
    }
    return true;
}
 
console.log(htmlElement("<div><div><b></b></div></p>"));
