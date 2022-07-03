const fs = require('fs');
const path = require('path');

const output_dir = './public/vendor/';
const assets = ['./node_modules/react-toastify/dist/ReactToastify.min.css'];

assets.forEach((asset_path) => {
  const filename = path.basename(asset_path);
  fs.createReadStream(path.resolve(asset_path)).pipe(
    fs.createWriteStream(path.resolve(output_dir, filename))
  );
});
