export const App = ():HTMLDivElement => {
    const app = document.createElement('div');
    app.innerHTML = 'Hello, World!';
    return app;
};