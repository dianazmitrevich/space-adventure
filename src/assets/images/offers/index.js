const ctx = require.context("./", false, /\.(avif|webp|jpe?g|png)$/i);

const images = {};

ctx.keys().forEach((key) => {
    const url = ctx(key);
    const file = key.replace("./", "");
    const [name, ext] = file.split(".");
    const type = ext === "jpeg" ? "jpg" : ext;

    images[name] = images[name] || {};
    images[name][type] = url;
});

export default images;
