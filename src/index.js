import { homepage } from './dom';
import { locWeather
    ,catchError } from './function';
import './style.css';
let content = document.createElement('div');
content.id = 'content';
document.body.append(content);
homepage.addBg();
var y = null;
const getWeather = async(loc) => {
    y = await locWeather(loc).catch(catchError);
    return y;
};
(async () => {
  const weather = await getWeather("manila").catch(catchError);
  console.log(weather);
})()

