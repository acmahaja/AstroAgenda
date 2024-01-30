function StarBackground() {
    return <div className="fixed top-0 left-0 right-0 bottom-0 bg-black z-3">
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-stars-background z-0 block" />
    <div className="twinkling absolute w-[10000px] h-full top-0 left-0 right-0 bottom-0 z-2" />
    </div>  
}

export default StarBackground;