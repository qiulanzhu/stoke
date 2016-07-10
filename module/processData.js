var underscore = require('underscore');

var filterDataArr = [];
module.exports = {
    filterStokeData: function (data, callback) {
        var allStokeInfoArray = data.split(';');
        allStokeInfoArray.pop();
        underscore.each(allStokeInfoArray, function (item) {
            var eachStokeInfoArray = item.split(',');
            logger.ndump('item', eachStokeInfoArray);

            var stokeCode = eachStokeInfoArray[0].match(/[\d]+/);
            logger.ndump('stokeCode', stokeCode);

            var stokeName = eachStokeInfoArray[0].match(/[\u4E00-\u9FFF]+/);
            logger.ndump('stokeName', stokeName);

            var todayOpenPrice = eachStokeInfoArray[1];
            logger.ndump('todayOpenPrice', todayOpenPrice);

            var yesterdayClosePrice = eachStokeInfoArray[2];
            logger.ndump('yesterdayClosePrice', yesterdayClosePrice);

            var curPrice = eachStokeInfoArray[3];
            logger.ndump('curPrice', curPrice);

            var growth = (curPrice - yesterdayClosePrice).toFixed(3);
            logger.ndump('growth', growth);

            var growthPercent = (((curPrice - yesterdayClosePrice)/yesterdayClosePrice)*100).toFixed(2) + '%';
            logger.ndump('growthPercent', growthPercent);
            
            var dealTime = eachStokeInfoArray[30];
            logger.ndump('dealTime', dealTime);

            var filterData = {
                stokeCode: stokeCode,
                stokeName: stokeName,
                todayOpenPrice: todayOpenPrice,
                yesterdayClosePrice: yesterdayClosePrice,
                curPrice: curPrice,
                growth: growth,
                growthPercent: growthPercent,
                dealTime: dealTime
            };
            filterDataArr.push(filterData);

            callback(null, filterDataArr);
        })
    }
};