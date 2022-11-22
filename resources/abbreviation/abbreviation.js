const fs = require('fs');
const path = require('path')
const filepath = path.join(__dirname, './whosonfirst/region.txt')

function setContentRegionToMap() {
    let mapObj = new Map();

    if (!fs.existsSync(filepath)) { return }

    const dict = fs.readFileSync(filepath, 'utf8');
    dict.split('\n').forEach(row => {
        let temp = row.split('=>');
        if (temp.length) {
            let valueMap = _normalize(temp[0]);
            let keyArrMap = temp[1].split('|');
            keyArrMap.forEach(key => {
                mapObj.set(_normalize(key), valueMap);
            });
        }
    }, this)

    return mapObj;
}

function _normalize(cell) {
    if (cell) return cell.trim().toLowerCase().normalize('NFC');

    return cell;
}

module.exports.setContentRegionToMap = setContentRegionToMap