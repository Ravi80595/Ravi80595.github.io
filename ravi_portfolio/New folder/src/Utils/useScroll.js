
// A dedicated hook/function can hide implementation details, and provides a simple API to your components.

const useScroll = () => {
    const elRef = useRef(null);
    const executeScroll = () => elRef.current.scrollIntoView();
  
    return [executeScroll, elRef];
};

//   Use it in any functional component.

  const ScrollDemo = () => {
    const [executeScroll, elRef] = useScroll()
    useEffect(executeScroll, []) // Runs after component mounts
    
    return <div ref={elRef}>Element to scroll to</div> 
}