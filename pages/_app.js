import '../styles/global.css';
// app.js or your main server file
const pluginsRoute = require('./routes/plugins');
app.use('/api/plugins', pluginsRoute);


function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
