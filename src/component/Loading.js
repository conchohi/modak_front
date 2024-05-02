function Loading(){
    return(
        <div className="flex flex-row gap-2 w-full h-svh items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-amber-800 animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-amber-800 animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-amber-800 animate-bounce [animation-delay:-.5s]"></div>
      </div>
    )
}

export default Loading;