//We start by creating some simple functions that RETURN something

const greeting = () => {
    return "Hello user!";
};

const goodbye = () => {
    return "Goodbye user!";
};

const loading = () => {
    return "Reticulating splines...";
};

// Once created, they must be EXPORTED. You can only export one DEFAULT function.
export default greeting;
// The rest can be exported using this bracket { } syntax
export { goodbye, loading };