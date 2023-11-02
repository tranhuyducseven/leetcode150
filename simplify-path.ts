function simplifyPath(path: string): string {
    let result = ""
    const stack: string[] = []
    for(let i = 0; i < path.length; i++){
        if(path[i] == "/")
            continue;
        let temp = ""
        while(i < path.length && path[i] !== "/"){
            temp += path[i];
            i++;
        }

        if (temp == ".")
            continue;
        if (temp == "..")
        {
            if(stack.length > 0)
                stack.pop()
        }

        else {
            stack.push(temp)
        }


    }

    while(stack.length > 0){
        result = "/" + stack.pop() + result
    }

    if(result.length == 0){
        return "/"
    }

    return result;

};