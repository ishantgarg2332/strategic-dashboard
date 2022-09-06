/* eslint-disable sort-keys */
const locationObj = window.location;

Object.defineProperty(window, "location", {
    writable: true,
    value: {
        ...locationObj,
        assign: jest.fn()
    }
});

Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation(() => ({
        matches: false
    }))
});

Object.defineProperty(window, "scrollTo", {
    value: jest.fn(),
    writable: true
});