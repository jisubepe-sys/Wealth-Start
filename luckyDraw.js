const cron = require('node-cron');

const luckyDraw = () => {
    // Lucky draw logic
};

cron.schedule('0 0 1 * *', luckyDraw); // Runs monthly